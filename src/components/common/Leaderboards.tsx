// Leaderboard.tsx
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// Helper: Generates random names
function randomName() {
  const first = ["Sagar", "Himanshu", "Goga", "Dinku" ];
  const last = ["Baa", "Sootwaal", "Negi", "Vyaas"];
  return (
    first[Math.floor(Math.random() * first.length)] +
    " " +
    last[Math.floor(Math.random() * last.length)]
  );
}

// Helper: Generates random leaderboard data
function getRandomBoard(count: number, maxScore: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: randomName(),
    score: Math.floor(Math.random() * maxScore),
  }));
}

interface LeaderboardProps {
  userRank: number;         // e.g., 339
  userScore: number;        // user's score, e.g., 74
  maxScore: number;         // e.g., 200
  userName: string;         // your platform should fill this dynamically
}

export const Leaderboard: React.FC<LeaderboardProps> = ({
  userRank,
  userScore,
  maxScore,
  userName,
}) => {
  // Prepare data only once
  const leaderboard = useMemo(() => {
    const top5 = getRandomBoard(5, maxScore)
      .sort((a, b) => b.score - a.score)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));

    // Only show user row if rank > 10
    const userRow =
      userRank > 5
        ? {
            id: "user",
            name: userName,
            score: userScore,
            rank: userRank,
          }
        : null;

    return { top5, userRow };
  }, [userRank, userScore, maxScore, userName]);

  // Animation configs
  const rowVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 120, damping: 5 },
    exit: { opacity: 0, y: 24 },
  };

  const highlightRow = (rank: number | string) =>
    rank === 1
      ? "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-50"
      : rank === "user"
      ? "bg-blue-50"
      : typeof rank === "number" && rank <= 3
      ? "bg-green-50"
      : "";

  return (
    <div className="relative max-w-lg mx-auto p-2 rounded-2xl bg-gradient-to-tr from-white to-gray-50 shadow-xl border border-gray-200">
      <div className="flex items-center mb-2 gap-2">
        <Sparkles className="text-yellow-400 animate-pulse" size={26} />
        <h2 className="text-xl font-black text-gray-800 tracking-tight">Top 5 Leaderboard</h2>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 text-gray-500 font-medium">#</th>
              <th className="text-left px-3 py-2 text-gray-500 font-medium">Name</th>
              <th className="text-right px-3 py-2 text-gray-500 font-medium">Score</th>
            </tr>
          </thead>
          <AnimatePresence>
            <tbody>
              {leaderboard.top5.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ ...rowVariants.transition, delay: i * 0.04 }}
                  variants={rowVariants}
                  className={
                    "rounded-lg " + highlightRow(user.rank)
                  }
                >
                  <td className="font-bold px-3 py-2">
                    <span
                      className={`inline-block w-8 h-8 rounded-full text-center ${
                        user.rank === 1
                          ? "bg-yellow-400 text-white shadow"
                          : user.rank === 2
                          ? "bg-amber-400 text-white"
                          : user.rank === 3
                          ? "bg-amber-400 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {user.rank}
                    </span>
                  </td>
                  <td className="px-3 py-2 font-medium text-gray-800">{user.name}</td>
                  <td className="px-3 py-2 text-right font-bold tabular-nums text-blue-700">
                    {user.score}
                    <span className="text-xs text-gray-400 pl-2">/ {maxScore}</span>
                  </td>
                </motion.tr>
              ))}

              {/* Show current user if not in top 10 */}
              {leaderboard.userRow && (
                <motion.tr
                  key="user"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ ...rowVariants.transition, delay: 0.7 }}
                  variants={rowVariants}
                  className={`rounded-lg ring-2 ring-blue-400 ${highlightRow("user")}`}
                >
                  <td className="font-bold px-3 py-2">
                    <span className="inline-block w-8 h-8 rounded-full text-center bg-blue-500 text-white shadow-md">
                      {leaderboard.userRow.rank}
                    </span>
                  </td>
                  <td className="px-3 py-2 font-medium text-blue-900">
                    {leaderboard.userRow.name}
                    <span className="ml-2 inline text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                      YOU
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right font-bold tabular-nums text-blue-700">
                    {leaderboard.userRow.score}
                    <span className="text-xs text-gray-400 pl-2">/ {maxScore}</span>
                  </td>
                </motion.tr>
              )}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
    </div>
  );
};

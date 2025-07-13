import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";

type NotificationItem = {
  id: string | number;
  title: string;
  date: string;
  link: string;
  type: "info" | "success" | "alert";
};

type NotificationsListProps = {
  title?: string;
  notifications: NotificationItem[];
} & HTMLMotionProps<"ul">;

const typeMap = {
  info: {
    icon: Info,
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-400",
    ring: "ring-blue-200",
    accent: "bg-gradient-to-b from-blue-400 to-blue-200",
  },
  success: {
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
    border: "border-green-400",
    ring: "ring-green-200",
    accent: "bg-gradient-to-b from-green-400 to-green-200",
  },
  alert: {
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
    border: "border-red-400",
    ring: "ring-red-200",
    accent: "bg-gradient-to-b from-red-400 to-red-200",
  },
};

export const NotificationsList: React.FC<NotificationsListProps> = ({
  title = "Notifications",
  notifications,
  ...ulProps
}) => (
  <div className="max-w-xl mx-auto px-2">
    <h2 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-tight">{title}</h2>
    <motion.ul layout {...ulProps} className="space-y-4">
      <AnimatePresence>
        {notifications.length > 0 ? (
          notifications.map((notif) => {
            const { icon: Icon, color, border, ring, accent } = typeMap[notif.type];
            return (
              <motion.li
                key={notif.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ scale: 1.015, boxShadow: "0 6px 32px 0 rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.22 }}
                className={`relative flex items-center rounded-xl shadow-md bg-white overflow-hidden border-l-8 ${border} group`}
              >
                {/* Animated accent bar */}
                <motion.div
                  className={`absolute left-0 top-0 h-full w-2.5 ${accent} group-hover:w-3 transition-all duration-200`}
                  layoutId={`accent-${notif.type}`}
                />
                {/* Icon */}
                <div className={`z-10 flex-shrink-0 rounded-full p-2 mr-4 ml-4 mt-2 mb-2 shadow ${color} ring-2 ${ring} transition-all`}>
                  <Icon size={26} />
                </div>
                {/* Content */}
                <div className="flex-1 py-3 pr-4">
                  <Link
                    to={notif.link}
                    className="text-lg font-semibold text-gray-900 hover:underline transition-colors"
                  >
                    {notif.title}
                  </Link>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      {new Date(notif.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {notif.type === "alert" && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-600 animate-pulse">
                        Urgent
                      </span>
                    )}
                    {notif.type === "success" && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-600">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center py-14 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg width={80} height={80} viewBox="0 0 80 80" fill="none">
              <circle cx={40} cy={40} r={36} fill="#f1f5f9" />
              <path d="M40 28v16M40 52h.01" stroke="#94a3b8" strokeWidth={3} strokeLinecap="round" />
            </svg>
            <div className="mt-3 text-lg font-medium">No notifications</div>
            <div className="text-sm mt-1 text-gray-400">You're all caught up!</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.ul>
  </div>
);

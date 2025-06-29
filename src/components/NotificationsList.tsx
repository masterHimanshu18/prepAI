// src/components/NotificationsList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";
type NotificationItem = {
    id: string;
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
  info: { icon: Info, color: "text-blue-500" },
  success: { icon: CheckCircle, color: "text-green-500" },
  alert: { icon: AlertTriangle, color: "text-red-500" },
};

export const NotificationsList: React.FC<NotificationsListProps> = ({
  title = "Notifications",
  notifications,
  ...ulProps
}) => (
  <div className="max-w-xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>

    <motion.ul layout {...ulProps}>
      <AnimatePresence>
        {notifications.length > 0 ? (
          notifications.map((notif) => {
            const { icon: Icon, color } = typeMap[notif.type];
            return (
              <motion.li
                key={notif.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-start bg-white p-4 mb-2 shadow rounded"
              >
                <Icon className={`mr-3 mt-1 ${color}`} size={24} />
                <div>
                  <Link to={notif.link} className="text-lg font-medium hover:underline">
                    {notif.title}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {new Date(notif.date).toLocaleDateString()}
                  </p>
                </div>
              </motion.li>
            );
          })
        ) : (
          <motion.div
            className="text-center py-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No notifications
          </motion.div>
        )}
      </AnimatePresence>
    </motion.ul>
  </div>
);

// src/data/sscCglNotifications.ts
export interface NotificationItem {
  id: string | number;
  title: string;
  date: string; // ISO string
  link: string;
  type: "info" | "success" | "alert";
}

export const sscCglNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "Tier‑1 Admit Card Released",
    date: "2025-06-20",
    link: "/ssc-cgl/tier1/admit-card",
    type: "info",
  },
  {
    id: 2,
    title: "Vacancy Increased for Sub‑Inspector",
    date: "2025-06-18",
    link: "/ssc-cgl/updates/vacancy",
    type: "success",
  },
  {
    id: 3,
    title: "Tier‑2 Exam Date Announced",
    date: "2025-06-15",
    link: "/ssc-cgl/tier2/date",
    type: "alert",
  },
];

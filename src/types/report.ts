export type ReportType     = "nearmiss" | "observation" | "accident" | "incident";
export type ReportStatus   = "new" | "accepted" | "in-progress" | "cancelled" | "completed";
export type ReportPriority = "high" | "medium" | "low";

export interface ReportAuthor {
  id: string;
  name: string;
  avatar: string;
}

export interface Report {
  id: string;
  reportId: string;       // e.g. RPT-001
  title: string;
  description: string;
  type: ReportType;
  status: ReportStatus;
  priority: ReportPriority;
  department: string;
  riskCategory: string;
  author: ReportAuthor;
  likes: number;
  comments: number;
  attachments: number;
  createdAt: string;      // ISO date string
  updatedAt: string;
}

export type EmployeeRole   = "super_admin" | "admin" | "manager" | "employee";
export type EmployeeStatus = "active" | "inactive";
export type EmploymentType = "full_time" | "part_time" | "contract";

export interface Employee {
  id: string;
  employeeId: string;       // e.g. EMP-001
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  birthDate: string;
  gender: "male" | "female";
  branch: string;
  department: string;
  position: string;
  employmentType: EmploymentType;
  role: EmployeeRole;
  status: EmployeeStatus;
  permissions: string[];
  username: string;
  lastLogin: string;
  createdAt: string;
}

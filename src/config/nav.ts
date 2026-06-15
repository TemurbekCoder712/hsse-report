import * as Icons from "@/components/Layouts/sidebar/icons";

export type Role = "super_admin" | "admin";

export interface NavSubItem {
  title: string;
  url: string;
}

export interface NavItem {
  title: string;
  url?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: NavSubItem[];
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const SUPER_ADMIN_NAV_DATA: NavSection[] = [
  {
    label: "ASOSIY MENYU",
    items: [
      {
        title: "Dashboard",
        url: "/super-admin/dashboard",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Xodimlar",
        url: "/super-admin/employees",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Kalendar",
        url: "/super-admin/calendar",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Hisobotlar",
        url: "/super-admin/reports",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Xabarlar",
        url: "/super-admin/messages",
        icon: Icons.Message,
        items: [],
      },
    ],
  },
  {
    label: "SOZLAMALAR",
    items: [
      {
        title: "Sozlamalar",
        url: "/super-admin/settings",
        icon: Icons.Settings,
        items: [],
      },
    ],
  },
];

export const ADMIN_NAV_DATA: NavSection[] = [
  {
    label: "ASOSIY MENYU",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Hisobotlar",
        url: "/admin/reports",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Xabarlar",
        url: "/admin/messages",
        icon: Icons.Message,
        items: [],
      },
    ],
  },
  {
    label: "SOZLAMALAR",
    items: [
      {
        title: "Sozlamalar",
        url: "/admin/settings",
        icon: Icons.Settings,
        items: [],
      },
    ],
  },
];

export const ROLE_DASHBOARDS: Record<Role, string> = {
  super_admin: "/super-admin/dashboard",
  admin: "/admin/dashboard",
};

export function getNavDataByRole(role: Role | null): NavSection[] {
  switch (role) {
    case "super_admin":
      return SUPER_ADMIN_NAV_DATA;
    case "admin":
      return ADMIN_NAV_DATA;
    default:
      return ADMIN_NAV_DATA;
  }
}

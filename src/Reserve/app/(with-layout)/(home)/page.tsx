"use client";

import { ROLE_DASHBOARDS, type Role } from "@/config/nav";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();
  const role = useAuthStore((s) => s.role) as Role | null;

  useEffect(() => {
    const destination = role ? ROLE_DASHBOARDS[role] : "/auth/sign-in";
    router.replace(destination);
  }, [role, router]);

  return null;
}

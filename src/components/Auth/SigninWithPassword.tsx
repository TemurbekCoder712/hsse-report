"use client";

import { EmailIcon, PasswordIcon } from "@/assets/icons";
import { signIn } from "@/lib/auth/auth-client";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import InputGroup from "../shared/FormElements/InputGroup";
import { Checkbox } from "../shared/FormElements/checkbox";

export default function SigninWithPassword() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (!result.data) {
        setError(result.error?.message ?? "Kirish amalga oshmadi");
        toast.error(result.error?.message ?? "Kirish amalga oshmadi");
        return;
      }

      const user = result.data.user;

      // Rolni global store ga saqlash
      setUser(user, user.role);

      toast.success("Muvaffaqiyatli kirdingiz!");

      // Rolga qarab dashboard ga yo'naltirish
      if (user.role === "super_admin") {
        router.replace("/super-admin/dashboard");
      } else {
        router.replace("/admin/dashboard");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Kirish amalga oshmadi";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        type="email"
        label="Email"
        className="mb-4 [&_input]:py-3.75"
        placeholder="Email manzilingizni kiriting"
        name="email"
        handleChange={handleChange}
        value={data.email}
        icon={<EmailIcon />}
      />

      <InputGroup
        type="password"
        label="Parol"
        className="mb-5 [&_input]:py-3.75"
        placeholder="Parolingizni kiriting"
        name="password"
        handleChange={handleChange}
        value={data.password}
        icon={<PasswordIcon />}
      />

      <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
        <Checkbox
          label="Eslab qolish"
          name="remember"
          withIcon="check"
          minimal
          radius="md"
          onChange={(e) => setData({ ...data, remember: e.target.checked })}
        />

        <Link
          href="/"
          className="ring-primary outline-0 hover:text-primary focus-visible:text-primary focus-visible:ring dark:text-white dark:hover:text-primary"
        >
          Parolni unutdingizmi?
        </Link>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </p>
      )}

      <div className="mb-4.5">
        <button
          type="submit"
          disabled={loading}
          className="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          Kirish
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
          )}  
        </button>
      </div>

      {/* Demo credentials hint */}
      <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-500 dark:border-dark-3 dark:text-dark-6">
        <p className="mb-1 font-semibold text-dark dark:text-white">Demo kirish:</p>
        <p>
          <span className="font-medium">Super Admin:</span> super@hsse.uz / super123
        </p>
        <p>
          <span className="font-medium">Admin:</span> admin@hsse.uz / admin123
        </p>
      </div>
    </form>
  );
}

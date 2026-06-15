"use client";

// ─── Mock foydalanuvchilar ───────────────────────────────────────────────────
// Login uchun quyidagi ma'lumotlarni ishlating:
//   super_admin : super@hsse.uz  /  super123
//   admin       : admin@hsse.uz  /  admin123
// ────────────────────────────────────────────────────────────────────────────

export type AppRole = "super_admin" | "admin";

interface MockUser {
  id: string;
  name: string;
  email: string;
  image: string;
  role: AppRole;
}

const MOCK_USERS: Record<string, { password: string; user: MockUser }> = {
  "super@hsse.uz": {
    password: "super123",
    user: {
      id: "1",
      name: "Super Admin",
      email: "super@hsse.uz",
      image: "https://avatar.vercel.sh/super-admin",
      role: "super_admin",
    },
  },
  "admin@hsse.uz": {
    password: "admin123",
    user: {
      id: "2",
      name: "Admin",
      email: "admin@hsse.uz",
      image: "https://avatar.vercel.sh/admin",
      role: "admin",
    },
  },
};

// ─── Session storage key ─────────────────────────────────────────────────────
const SESSION_KEY = "hsse_mock_session";

function saveSession(user: MockUser) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  // Middleware cookie orqali tekshiradi, shuning uchun cookie ga ham yozamiz
  document.cookie = `${SESSION_KEY}=${encodeURIComponent(JSON.stringify(user))};path=/;max-age=${60 * 60 * 24}`;
}

function loadSession(): MockUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as MockUser) : null;
  } catch {
    return null;
  }
}

function clearSession() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(SESSION_KEY);
  // Cookie ni ham o'chiramiz
  document.cookie = `${SESSION_KEY}=;path=/;max-age=0`;
}

// ─── signIn ──────────────────────────────────────────────────────────────────
export const signIn = {
  email: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    rememberMe?: boolean;
  }) => {
    const record = MOCK_USERS[email.toLowerCase()];

    if (!record || record.password !== password) {
      return {
        data: null,
        error: { message: "Email yoki parol noto'g'ri" },
      };
    }

    saveSession(record.user);

    return {
      data: { user: record.user, session: { token: "mock-token" } },
      error: null,
    };
  },
};

// ─── signUp ──────────────────────────────────────────────────────────────────
export const signUp = {
  email: async () => ({
    data: null,
    error: { message: "Ro'yxatdan o'tish bu versiyada mavjud emas" },
  }),
};

// ─── signOut ─────────────────────────────────────────────────────────────────
export const signOut = async () => {
  clearSession();
  return { data: true, error: null };
};

// ─── useSession ──────────────────────────────────────────────────────────────
export function useSession() {
  const user = loadSession();

  if (!user) {
    return {
      data: null,
      isPending: false,
      error: null,
    };
  }

  return {
    data: {
      user,
      session: {
        id: "mock",
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        token: "mock-token",
      },
    },
    isPending: false,
    error: null,
  };
}

// ─── getSession ──────────────────────────────────────────────────────────────
export const getSession = async () => {
  const user = loadSession();
  if (!user) return { data: null, error: null };
  return { data: { user }, error: null };
};

export const authClient = { signIn, signUp, signOut, useSession, getSession };

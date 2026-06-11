// Robust Mock Auth Server using Proxy
const mockHandler = {
  get: (target: any, prop: string) => {
    if (prop === "api") {
      return {
        getSession: async () => ({
          user: {
            id: "1",
            name: "Demo User",
            email: "demo@example.com",
            image: "https://avatar.vercel.sh/demo",
            role: "admin",
            bio: "This is a demo bio",
          },
          session: {
            id: "1",
            userId: "1",
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            token: "demo-token",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        }),
      };
    }
    return new Proxy(() => {}, mockHandler);
  },
  apply: () => {},
};

export const auth = new Proxy({}, mockHandler) as any;

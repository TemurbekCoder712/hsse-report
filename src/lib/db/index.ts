// Robust Mock DB using Proxy to prevent crashes on property access
const mockHandler = {
  get: (target: any, prop: string) => {
    if (prop === "then") return undefined;
    return new Proxy(() => Promise.resolve([]), mockHandler);
  },
  apply: () => Promise.resolve([]),
};

export const db = new Proxy({}, mockHandler) as any;

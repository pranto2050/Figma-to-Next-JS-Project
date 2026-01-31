/**
 * Admin authentication store (array-based).
 * Replace login/logout/getSession implementations with API calls when connecting to backend.
 */

const SESSION_KEY = "admin_session";

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  avatar?: string;
}

export interface AdminSession {
  user: AdminUser;
  token: string;
  expiresAt: number;
}

/** Mock users – replace with API fetch when backend is ready */
export const ADMIN_USERS: AdminUser[] = [
  {
    id: "1",
    email: "admin@gmail.com",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "editor@example.com",
    name: "Editor User",
    role: "editor",
  },
  {
    id: "3",
    email: "viewer@example.com",
    name: "Viewer User",
    role: "viewer",
  },
];

/** Validate credentials against mock data. Replace with API call later. */
export function login(
  email: string,
  password: string
): { success: true; session: AdminSession } | { success: false; error: string } {
  const user = ADMIN_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { success: false, error: "Invalid email or password." };
  }
  // Demo admin: exact password "admin". Other users: any password 4+ chars. Backend will validate properly.
  if (user.email.toLowerCase() === "admin@gmail.com") {
    if (password !== "admin") {
      return { success: false, error: "Invalid email or password." };
    }
  } else if (!password || password.length < 4) {
    return { success: false, error: "Password must be at least 4 characters." };
  }

  const session: AdminSession = {
    user,
    token: `mock_token_${user.id}_${Date.now()}`,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  return { success: true, session };
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SESSION_KEY);
  }
}

/** Get current session from storage. Replace with token refresh / API later. */
export function getSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session: AdminSession = JSON.parse(raw);
    if (session.expiresAt < Date.now()) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

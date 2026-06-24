import { auth } from "@/lib/auth";

export async function getSession() {
  return await auth();
}

export async function requireAuth() {
  const session = await auth();
  if (!session) {
    throw new Error("Non autorisé");
  }
  return session;
}
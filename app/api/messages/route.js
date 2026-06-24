import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";
export async function GET() {
  try {
    await requireAuth();
    const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
}

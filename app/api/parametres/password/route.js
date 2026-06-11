import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function PUT(req) {
  try {
    const session = await requireAuth();
    const { ancien, nouveau } = await req.json();
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
    const valid = await bcrypt.compare(ancien, user.password);
    if (!valid) return NextResponse.json({ error: "Mot de passe actuel incorrect" }, { status: 400 });
    const hash = await bcrypt.hash(nouveau, 12);
    await prisma.user.update({ where: { id: user.id }, data: { password: hash } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

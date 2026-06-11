import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function PUT(req, { params }) {
  try {
    await requireAuth();
    const body = await req.json();
    const actualite = await prisma.actualite.update({ where: { id: params.id }, data: body });
    return NextResponse.json(actualite);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await requireAuth();
    await prisma.actualite.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

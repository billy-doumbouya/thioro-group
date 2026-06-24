import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";
export async function PATCH(req, { params }) {
  try {
    await requireAuth();
    const body = await req.json();
    const msg = await prisma.message.update({ where: { id: params.id }, data: body });
    return NextResponse.json(msg);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await requireAuth();
    await prisma.message.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

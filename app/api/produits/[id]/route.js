import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";

export async function PUT(req, { params }) {
  try {
    await requireAuth();
    const body = await req.json();
    const produit = await prisma.produit.update({ where: { id: params.id }, data: body });
    return NextResponse.json(produit);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await requireAuth();
    await prisma.produit.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

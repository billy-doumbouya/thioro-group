import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";
export async function GET() {
  try {
    const images = await prisma.galerieImage.findMany({ orderBy: { ordre: "asc" } });
    return NextResponse.json(images);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await requireAuth();
    const body = await req.json();
    const img = await prisma.galerieImage.create({ data: body });
    return NextResponse.json(img);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

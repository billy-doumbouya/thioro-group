import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all");
    const actualites = await prisma.actualite.findMany({
      where: all ? {} : { publie: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(actualites);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await requireAuth();
    const body = await req.json();
    const slug = slugify(body.titre) + "-" + Date.now();
    const actualite = await prisma.actualite.create({ data: { ...body, slug } });
    return NextResponse.json(actualite);
  } catch (err) {
    if (err.message === "Non autorisé") return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const categorie = searchParams.get("categorie");
    const produits = await prisma.produit.findMany({
      where: { actif: true, ...(categorie && { categorie }) },
      orderBy: { ordre: "asc" },
    });
    return NextResponse.json(produits);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await requireAuth();
    const body = await req.json();
    const produit = await prisma.produit.create({ data: body });
    return NextResponse.json(produit);
  } catch (err) {
    if (err.message === "Non autorisé") return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

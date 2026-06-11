import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    const params = await prisma.parametre.findMany();
    return NextResponse.json(params);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(req) {
  try {
    await requireAuth();
    const body = await req.json();
    const ops = Object.entries(body).map(([cle, valeur]) =>
      prisma.parametre.upsert({
        where: { cle },
        update: { valeur: String(valeur || "") },
        create: { cle, valeur: String(valeur || "") },
      })
    );
    await Promise.all(ops);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

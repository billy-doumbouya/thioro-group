// app/api/notifications/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/getSession";
export async function GET() {
  try {
    await requireAuth();

    const [messagesNonLus, devisNouveaux] = await Promise.all([
      prisma.message.count({ where: { lu: false } }),
      prisma.devis.count({ where: { statut: "nouveau" } }),
    ]);

    const total = messagesNonLus + devisNouveaux;

    return NextResponse.json({
      total,
      details: {
        messages: messagesNonLus,
        devis: devisNouveaux,
      },
    });
  } catch {
    return NextResponse.json({ total: 0, details: { messages: 0, devis: 0 } });
  }
}

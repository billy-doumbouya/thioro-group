import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/nodemailer";
export async function GET() {
  try {
    const devis = await prisma.devis.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(devis);
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const devis = await prisma.devis.create({ data: body });

    await sendEmail({
      to: process.env.SMTP_FROM,
      subject: `Nouvelle demande de devis — ${body.prenom} ${body.nom}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>De :</strong> ${body.prenom} ${body.nom} (${body.societe || "—"})</p>
        <p><strong>Email :</strong> ${body.email}</p>
        <p><strong>Téléphone :</strong> ${body.telephone}</p>
        <p><strong>Activité :</strong> ${body.activite}</p>
        <hr />
        <p>${body.message}</p>
      `,
    }).catch(() => {});

    return NextResponse.json({ success: true, id: devis.id });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

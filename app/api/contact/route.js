import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { nom, prenom, email, telephone, societe, activite, message } = body;

    const msg = await prisma.message.create({
      data: {
        nom: `${prenom} ${nom}`,
        email,
        telephone,
        sujet: activite,
        message,
      },
    });

    // Email de notification
    await sendEmail({
      to: process.env.SMTP_FROM,
      subject: `Nouveau message — ${prenom} ${nom}`,
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>De :</strong> ${prenom} ${nom} (${societe || "Particulier"})</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Domaine :</strong> ${activite}</p>
        <hr />
        <p>${message}</p>
      `,
    }).catch(() => {});

    return NextResponse.json({ success: true, id: msg.id });
  } catch (err) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

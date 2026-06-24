const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@thiorogroup.com";
  const password = process.env.ADMIN_PASSWORD || "AdminThioro";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("✅ Admin déjà existant :", email);
    return;
  }

  const hash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: { email, password: hash, nom: "Administrateur", role: "admin" },
  });

  console.log("✅ Administrateur créé :", email);
}

main().catch(console.error).finally(() => prisma.$disconnect());

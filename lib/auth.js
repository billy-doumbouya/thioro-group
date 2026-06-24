import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        console.log(
          "🟦 authorize() appelé avec email:",
          JSON.stringify(credentials?.email),
        );
        console.log("🟦 password reçu:", JSON.stringify(credentials?.password));
        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Email ou mot de passe manquant");
          return null;
        }
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          if (!user) {
            console.log("❌ Aucun utilisateur trouvé pour:", credentials.email);
            return null;
          }
          console.log("✅ Utilisateur trouvé. Hash en DB:", user.password);
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password,
          );
          console.log("🔑 Résultat bcrypt.compare:", isValid);
          if (!isValid) {
            return null;
          }
          return {
            id: user.id,
            email: user.email,
            name: user.nom,
            role: user.role,
          };
        } catch (err) {
          console.log("🔥 ERREUR dans authorize():", err.message);
          console.log(err.stack);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
});

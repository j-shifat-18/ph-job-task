import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Export authOptions separately for server-side usage
export const authOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.role =
          profile.email.toLowerCase() === "info.jahirulsifat@gmail.com"
            ? "owner"
            : "user";
      }
      return token;
    },
    async session({ session, token }) {
      session.user = session.user || {};
      session.user.role = token.role;
      return session;
    },
  },
};

// NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

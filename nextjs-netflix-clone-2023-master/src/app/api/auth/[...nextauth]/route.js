import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.Iv1.8e7c1f35febdaffc",
      clientSecret: "be102a94499cdc7aca8f320881434e7521ff113d ",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

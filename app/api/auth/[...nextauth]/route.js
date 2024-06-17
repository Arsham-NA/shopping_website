import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";



export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "4d201b6f15fec26e22d3",
      clientSecret: "99c5f2deb62ef5f7d896885764c7abe5118e2477",
    }),
  ],
  secret: process.env.SECRET
}

export const handler =  NextAuth(authOptions);
export {handler as GET, handler as POST};
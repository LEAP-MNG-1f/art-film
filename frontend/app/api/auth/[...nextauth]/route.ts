// import NextAuth from "next-auth";
// import { JWT } from "next-auth/jwt";
// import GoogleProvider from "next-auth/providers/google";

// // Extend the default session types
// declare module "next-auth" {
//   interface Session {
//     accessToken?: string;
//     refreshToken?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken?: string;
//     refreshToken?: string;
//   }
// }

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline", // This enables refresh tokens
//           response_type: "code",
//         },
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   jwt: {
//     maxAge: 60 * 60 * 24 * 30, // 30 days
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   callbacks: {
//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//     async jwt({ token, account }) {
//       if (account) {
//         token.accessToken = account.access_token;
//         token.refreshToken = account.refresh_token;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.accessToken = token.accessToken;
//       session.refreshToken = token.refreshToken;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import clientPromise from "../../../../lib/mongodb";
import axios from "axios";

// Extend the default session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
    };
    accessToken?: string;
  }
}

const googleAuth = async (user: any) => {
  const response = await axios.post("http://localhost:9000/api/google-auth", {
    email: user.email,
    profile: user.profile,
    googleId: user.googleId,
  });
  return response.data;
};

const handler = NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline", // Enable refresh tokens
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await googleAuth({
          email: user.email,
          profile,
          googleId: account?.providerAccountId,
        });
        return true;
      } catch (error) {
        console.error("Google Sign-in Error:", error);
        return false;
      }
    },

    async redirect({ url, baseUrl }) {
      // Ensure redirect goes to home page after successful login
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user, account }) {
      // Add user ID to the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to the session
      session.user.id = token.id as string;
      return session;
    },
  },
  events: {
    async signIn(message) {
      // Optional: Log sign-in events
      console.log("Sign-in event:", message);
    },
  },
});

export { handler as GET, handler as POST };

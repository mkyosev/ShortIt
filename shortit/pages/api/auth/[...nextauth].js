import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prismadb'
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

const registerUser = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true
      // Add any additional user fields you need here
    },
  })
  const hashedPassword = await bcrypt.hash(password, 10);
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: "Custom Register",
        image: "https://www.edgestructuraldesign.com/wp-content/uploads/2016/08/Icon.blank-person.jpg",
        userLevel: 1
      }
    })
    if (newUser) {
      delete newUser.password;
      return newUser;

    } else { return null }
  } else {
    return null;
  }

  // Save the new user to the database with the hashed password


};

const loginUser = async (email, password) => {
  // Your server-side authentication logic here
  // Fetch the user from the database using the provided email
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      name: true,
      password: true,
      email: true,
      userLevel: true,
      urls: true,
      // Add any additional user fields you need here
    },
  })
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      delete user.password;
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }

};

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        action: { label: 'Action', type: 'text', value: 'login' },
      },
      authorize: async (credentials) => {
        const { email, password, action } = credentials;

        if (action === 'register') {
          const newUser = await registerUser(email, password);
          return Promise.resolve(newUser);
        } else {
          const user = await loginUser(email, password);
          return Promise.resolve(user);
        }
      }
    })
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
    strategy: 'jwt'
  },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     if (token && token.id) {
  //       session.user.id = token.id;
  //     }
  //     return session;
  //   },
  // },
}
export default NextAuth(authOptions)
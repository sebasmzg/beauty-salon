import { ILoginRequest } from "@/app/core/application/dto";
import { AuthService } from "@/app/infraestructure/services/auth.service";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
}

interface AuthUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface CustomSession extends Session {
  user: {
    id?: string;
    token?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        //si no hay credenciales, retornar null y error
        if (!credentials?.password || !credentials?.username) {
          console.error("No credentials provided");
          return null;
        }
        //si hay credenciales, retornar el objeto con las credenciales usando nuestra interfaz
        const loginRequest: ILoginRequest = {
          userName: credentials.username,
          password: credentials.password,
        };

        try {
          const authService = new AuthService();
          const response = await authService.login(loginRequest);

          return {
            email: loginRequest.userName,
            id: loginRequest.userName,
            name: loginRequest.userName,
            token: response.token,
          } as AuthUser;

        } catch (error) {
          console.log("rerror in authorize", error);
          return Promise.reject(new Error(JSON.stringify(error)));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.token = authUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.token = (token as AuthToken).token;
      console.log("token", token);
      return customSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  }
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
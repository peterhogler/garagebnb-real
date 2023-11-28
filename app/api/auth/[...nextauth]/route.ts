import clientPromise from "@/lib/mongodbclient";
import NextAuth, { AuthOptions } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/user.model";
import { compare } from "bcrypt";
import { connectWithMongoDB } from "@/lib/mongodb";

const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            type: "credentials",
            credentials: {
                _id: {},
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                try {
                    await connectWithMongoDB();

                    if (!credentials) return null;

                    const user = await User.findOne({ email: credentials.email });

                    if (!user) return null;

                    const passwordMatch = await compare(credentials.password, user.password);

                    if (!passwordMatch) return null;

                    return user;
                } catch (error) {
                    console.error("An error occurred during authorization:", error);
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.uid = user;
            }

            return token;
        },
        session: async ({ session, token }) => {
            if (!session.user) {
                session.user = {};
            }
            //@ts-ignore
            session.user = { email: token.email, _id: token.uid._id };
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

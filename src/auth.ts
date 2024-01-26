import NexxtAuth from 'next-auth';
import authConfig from './auth.config';

export const { handlers: {
    GET,
    POST,

}, auth,
    signIn,
    signOut } = NexxtAuth({

        secret: process.env.AUTH_SECRET,
        session: {
            strategy: "jwt"
        },
        callbacks: {
            async session({ session }) {
                return session;
            },
            async jwt({ token }) {
                if(token.sub) return token;

                return token;
            }
        },
        ...authConfig
    })
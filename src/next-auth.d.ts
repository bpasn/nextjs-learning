import { type DefaultSession } from 'next-auth';
import JWT from 'next-auth/jwt';
// Declare your framework library
declare module "next-auth" {

    interface Session {
        user: {
            accessToken: string;
            role: string;
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        role?: string;
        accessToken?: string;
    }
}
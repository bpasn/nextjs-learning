import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {

                if(!!true){
                    return null;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;
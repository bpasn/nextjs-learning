import { signIn } from "@/auth"
import { DEFAULT_REDIRECT } from "@/routes";
import { AuthError } from "next-auth"

export const loginAction = async (email: string, password: string) => {
    try {
      signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_REDIRECT
        });
        
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
        throw error;
    }
}
export const registerAction = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
        
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
        throw error
    }
}
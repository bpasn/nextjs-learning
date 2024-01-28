"use client";

import { FormInput, Github } from "lucide-react";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { loginSchemaInfer, loginSchemaResove } from "@/schemas/auth/login-schema";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Link from "next/link";
type Props = {};

const LoginForm = () => {
    const form = useForm<loginSchemaInfer>({
        resolver: loginSchemaResove,
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = () => {

    };
    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Login Form</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="m@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="***" {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <Button className="w-full" variant={"default"} >
                            Sign In
                        </Button>
                        <div className="flex mt-[2px_!important]">
                            <Link href={"/auth/register"} className="underline ml-auto">register</Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <div className="relative mb-5 mt-5">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
            <CardFooter className="flex justify-between space-x-3">
                <Button size={"lg"} className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input  shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    <Github className="mr-2 h-4 w-4"/>
                    Github
                </Button>
                <Button size={"lg"} className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="mr-2 h-4 w-4">
                        <path
                            fill="currentColor"
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z">
                        </path>
                    </svg>
                    Google
                </Button>
            </CardFooter>
        </Card>
    );
};

export default LoginForm;
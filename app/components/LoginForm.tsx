"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

        if (!email || !password) return;

        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        router.push("/");
        router.refresh();
    };

    return (
        <>
            <form className="bg-[#D9D9D9] w-[95%] lg:w-[60vw] mx-auto px-5 py-7 space-y-4 rounded-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 space-y-2">
                    <label htmlFor="email">E-post:</label>
                    <input
                        className=" bg-[#B8B8B8] py-3 px-4 text-black/40 rounded-lg"
                        type="text"
                        name="email"
                        id="name"
                        placeholder="E-post..."
                        autoComplete="off"
                    />
                </div>
                <div className="flex flex-col gap-2 space-y-2">
                    <label htmlFor="password">Lösenord:</label>
                    <input
                        className="bg-[#B8B8B8] py-3 px-4 text-black/40 rounded-lg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Lösenord..."
                        autoComplete="off"
                    />
                </div>

                <div className="flex items-center justify-between pt-3">
                    <Link href="/register" className="text-black/40 text-sm ml-16 underline underline-offset-4">
                        Registrera dig
                    </Link>
                    <button className="bg-[#4470B2] text-white px-3 py-1 border rounded-lg" type="submit">
                        Logga in
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;

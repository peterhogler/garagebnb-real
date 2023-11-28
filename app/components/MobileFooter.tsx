"use client";
import { LuParkingSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { capitalize } from "@/utils/capitalize";
const MobileFooter = () => {
    const { data: session } = useSession();

    return (
        <footer className="w-full flex lg:hidden max-w-[1440px] m-auto items-center gap-8 justify-evenly border-t p-4">
            <Link href="/" className="inline-flex gap-2">
                <LuParkingSquare size={25} />
                Parkering
            </Link>
            <Link href="/my-listings" className="inline-flex gap-2">
                <LuParkingSquare size={25} />
                Mina Parkeringar
            </Link>
            {!session?.user ? (
                <Link href="/login" className="inline-flex gap-2">
                    <CgProfile size={25} />
                    Logga In
                </Link>
            ) : (
                <div className="inline-flex gap-2">
                    <CgProfile size={25} />
                    {capitalize(session?.user.email as string)}
                </div>
            )}
        </footer>
    );
};

export default MobileFooter;

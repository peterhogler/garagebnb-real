"use client";
import { BiCar } from "react-icons/bi";
import { LuParkingSquare } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setSearch } from "@/redux/filter/filterSlice";
import { IoCloseSharp } from "react-icons/io5";
import { capitalize } from "@/utils/capitalize";

const Navbar = () => {
    const { data: session } = useSession();
    const search = useAppSelector(selectSearchState);
    const dispatch = useAppDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));
    };

    return (
        <header className="px-4 py-2 border-b">
            <nav className="max-w-[1440px] m-auto flex items-center gap-8">
                <Link href="/" className="inline-flex gap-2 items-center">
                    <BiCar size={27} />
                    GarageBNB
                </Link>
                <ul className="hidden lg:inline-flex">
                    <Link href="/" className="inline-flex gap-2 items-center">
                        <LuParkingSquare size={27} />
                        Parkering
                    </Link>
                </ul>
                <div className="inline-flex flex-1 px-2 justify-center">
                    <div className="inline-flex items-center lg:w-3/4 border px-2 py-1 rounded-full gap-1 w-full">
                        <label htmlFor="search">
                            <AiOutlineSearch size={27} />
                        </label>
                        <input
                            type="text"
                            className="flex-1 p-1 w-full  focus:outline-none"
                            placeholder="Search"
                            id="search"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button
                            className={`relative right-2 ml-5 font-bold text-rose-600 ${!search ? "invisible" : "visible"}`}
                            onClick={() => dispatch(setSearch(""))}>
                            <IoCloseSharp size={25} />
                        </button>
                    </div>
                </div>
                <ul className="hidden lg:inline-flex gap-8">
                    {session?.user ? (
                        <li className="inline-flex gap-8">
                            <Link href={`/my-listings/${session?.user?._id}`}>Mina Parkeringar</Link>
                            <Link href="/" onClick={() => signOut()}>
                                Welcome {capitalize(session?.user?.email as string)}!
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/login">Logga In</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

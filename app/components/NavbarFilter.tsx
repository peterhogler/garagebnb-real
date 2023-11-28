"use client";
import { selectCategoryState, setCategory } from "@/redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MouseEvent } from "react";
import { BiCar } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const NavbarFilter = () => {
    const category = useAppSelector(selectCategoryState);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const handleCategoryButton = (e: MouseEvent<HTMLButtonElement>) => {
        const { value: category } = e.currentTarget;

        router.push("/");
        dispatch(setCategory(category));
    };

    return (
        <div className="inline-flex lg:justify-center lg:py-6">
            <button
                className=" bg-[#4470B2] relative w-full lg:w-[200px] p-3 text-white"
                value="Bil"
                onClick={handleCategoryButton}>
                <BiCar className="absolute left-4 top-1/2 transform -translate-y-1/2" size={27} />
                <div className="text-center">Bil</div>
            </button>
            <button className="bg-[#E37575] relative w-full lg:w-[200px] p-3" value={"MC"} onClick={handleCategoryButton}>
                <BiCar className="absolute right-4 top-1/2 transform -translate-y-1/2" size={27} />
                <div className="flex-1 text-center">MC</div>
            </button>
            <button
                className={`hidden lg:block ml-3 font-bold text-rose-600 ${!category ? "invisible" : "visible"}`}
                onClick={() => dispatch(setCategory(""))}>
                <IoCloseSharp size={25} />
            </button>
        </div>
    );
};

export default NavbarFilter;

"use client";
import GoBackNavbar from "../components/GoBackNavbar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart, selectCartState, selectTotalCartPrice } from "@/redux/checkout/checkoutSlice";
import CheckoutItems from "../components/checkout/CheckoutItems";
import { createBooking } from "@/lib/actions/booking.actions";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Item } from "@/typings/item.typings";

const Page = () => {
    const cart: Item[] = useAppSelector(selectCartState);
    const totalPrice = useAppSelector(selectTotalCartPrice);

    const { data: session } = useSession();

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            for (const item of cart) {
                await createBooking(item);
            }
            dispatch(clearCart());
        } catch (error) {
            console.error(`Error has occurred`);
        } finally {
            router.push(`/my-listings/${session?.user?._id}`);
        }
    };

    return (
        <main className="h-full p-4">
            <GoBackNavbar />
            <div className="h-full grid justify-center mt-32">
                {cart && cart.length > 0 ? (
                    <>
                        {" "}
                        <div className="h-max w-[500px] p-4 border space-y-4">
                            <div className="text-center text-lg tracking-widest">Checkout ({cart.length})</div>
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded-full bg-[#4470B2]" />
                                <div className="flex-1 bg-slate-200 h-[1px]"></div>
                                <div className="h-5 w-5 rounded-full bg-[#4470B2] animate-pulse" />
                                <div className="flex-1 bg-slate-200 h-[1px]"></div>
                                <div className="h-5 w-5 rounded-full bg-[#D9D9D9]" />
                            </div>
                            <CheckoutItems cart={cart} />
                            <button
                                className="w-full text-center p-3 bg-[#44B25C] text-white rounded-full"
                                onClick={handleCheckout}>
                                Betala nu (Totalt: {totalPrice}kr)
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-lg tracking-widest">Ingen bokning (0)</div>
                )}
            </div>
        </main>
    );
};

export default Page;

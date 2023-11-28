"use client";
import { Listing } from "@/typings/listing.typings";
import ListingDetailsCheckboxes from "./ListingDetailsCheckboxes";
import { FaLocationPin } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { createBooking } from "@/lib/actions/booking.actions";
import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/checkout/checkoutSlice";

interface ListingDetailsFormProps {
    listing: Listing;
}

const ListingDetailsForm: React.FC<ListingDetailsFormProps> = ({ listing }) => {
    const [dates, setDates] = useState<string[]>([]);

    const { data: session } = useSession();

    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(dates);
    }, [dates]);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!session?.user) return;

        const booking = {
            id: crypto.randomUUID(),
            listingId: listing._id,
            imageUrl: listing.imageUrl,
            userId: session.user?._id,
            dates,
            price: listing.price,
        };

        try {
            dispatch(addToCart(booking));
            // await createBooking(booking);
        } catch (error) {
            if (error instanceof Error) {
                console.log(`Error has occured: ${error.message}`);
            } else {
                console.log("Unknown error has occured.");
            }
        } finally {
            router.push(`/checkout`);
        }
    };

    return (
        <form className="h-[60dvh] lg:h-[85dvh] grid grid-rows-2 lg:grid-cols-2 gap-3 " onSubmit={handleFormSubmit}>
            <div className=" px-3 lg:px-0 w-full relative">
                <img className="w-full h-full rounded-lg" src={listing.imageUrl} alt="" />
                <div className="absolute bottom-0 left-0 right-0 inline-flex items-center w-full justify-between p-4">
                    <div className="inline-flex items-center gap-2 text-white">
                        <FaLocationPin className={listing.category !== "MC" ? "text-[#4470B2]" : "text-[#E37575]"} size={28} />
                        {listing.city}
                    </div>
                    <div
                        className={`px-4 py-2 rounded-full text-white ${
                            listing.category !== "MC" ? "bg-[#4470B2]" : "bg-[#E37575]"
                        }`}>
                        {listing.price}kr / dygn
                    </div>
                </div>
            </div>
            <div className="h-full w-full flex flex-col gap-4 px-2">
                <ListingDetailsCheckboxes onCheckChange={setDates} dates={dates} />
                <div className="inline-flex items-center bg-gray-200 w-full p-4 gap-6 rounded-lg">
                    <div className="bg-gray-300 p-3 ml-4 rounded-full ">
                        <FiUser size={50} />
                    </div>
                    <div>
                        <p>Joe Doe</p>
                        <p>Rating: 5/5</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 border rounded-lg p-4 space-y-4">
                    <div className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <p>Address:</p>
                            <div className="p-2 bg-gray-200 rounded-lg">{listing.street}</div>
                        </div>
                        <div className="space-y-2">
                            <p>Garage:</p>
                            <div className="p-2 bg-gray-200 rounded-lg">{listing.description}</div>
                        </div>
                        <div className="space-y-2">
                            <p>Pris:</p>
                            <div className="p-2 bg-gray-200 rounded-lg">{listing.price}kr / dygn</div>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <button
                            type="submit"
                            className="text-white  w-full py-3 rounded-lg bg-[#44B25C] disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={dates.length < 2}>
                            Reservera
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ListingDetailsForm;

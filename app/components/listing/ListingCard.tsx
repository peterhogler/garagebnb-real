import { ListingCardProps } from "@/typings/listing.typings";
import Link from "next/link";
import { FaLocationPin } from "react-icons/fa6";

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
    const imageUrl = listing.imageUrl;
    return (
        <Link href={`/listings/${listing.slug}`} className="inline-flex border h-[200px] rounded-md">
            <div
                className={`flex-1 flex items-end justify-center border bg-cover bg-center bg-no-repeat p-3`}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}>
                <div className="flex w-full items-center justify-between">
                    <div className="inline-flex  gap-2 text-white">
                        <FaLocationPin className={listing.category !== "MC" ? "text-[#4470B2]" : "text-[#E37575]"} size={20} />
                        <span>{listing.city}</span>
                    </div>
                    <div
                        className={`px-3 py-1 bg-[#4470B2]/90 rounded-full inline-flex items-center text-white ${
                            listing.category !== "MC" ? "bg-[#4470B2]" : "bg-[#E37575]"
                        }`}>
                        {listing.price}kr / dygn
                    </div>
                </div>
            </div>
            <div className="p-3 text-md flex flex-col justify-between w-[35%] bg-[#D9D9D9] ">
                <p>Kategori: {listing.category}</p>
                <p>Uteparkering nära till centrum billigt</p>
                <button
                    className={`text-white px-4 py-1 rounded-full tracking-wide ${
                        listing.category !== "MC" ? "bg-[#4470B2]" : "bg-[#E37575]"
                    }`}>
                    RESERVERA
                </button>
            </div>
        </Link>
    );
};

export default ListingCard;

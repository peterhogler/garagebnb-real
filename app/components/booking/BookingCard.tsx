import { FC } from "react";
import { FaLocationPin } from "react-icons/fa6";

const BookingCard: FC<BookingCardProps> = ({ booking }) => {
    const sortedDates = booking.dates.sort();
    const totalPrice = booking.price * booking.dates.length;

    return (
        <div className="flex flex-col border h-[200px] rounded-md">
            <div
                className="flex-1 h-full flex items-end justify-center border  bg-center p-3 bg-red-200 bg-cover"
                style={{
                    backgroundImage: `url(${booking.listingId.imageUrl})`,
                }}>
                <div className="flex w-full items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-white">
                        <FaLocationPin className="text-[#4470B2]" size={20} />
                        <span>Åmål</span>
                    </div>
                    <div className="px-3 py-1 bg-[#4470B2]/90 rounded-full inline-flex items-center text-white">
                        {booking.price}kr / dygn
                    </div>
                </div>
            </div>
            <div className="bg-[#D9D9D9] text-center p-1 text-sm">
                <span>
                    Från: {sortedDates[0]} - Till: {sortedDates[sortedDates.length - 1]} ({booking.dates.length} dagar) Totalt:{" "}
                    {totalPrice}kr
                </span>
                <span></span>
            </div>
        </div>
    );
};

export default BookingCard;

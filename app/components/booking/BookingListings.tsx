import { FC } from "react";
import BookingCard from "./BookingCard";
import { Booking, BookingListingsProps } from "@/typings/booking.typings";

const BookingListings: FC<BookingListingsProps> = ({ bookings }) => {
    return (
        <div className="space-y-5">
            <div className="w-full text-center py-2 text-lg border lg:border-none rounded-lg lg:rounded-lg">
                Mina Bokade Parkeringar {bookings ? `(${bookings.length})` : null}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {bookings.map((booking: Booking, idx) => {
                    return <BookingCard key={idx} booking={booking} />;
                })}
            </div>
        </div>
    );
};

export default BookingListings;

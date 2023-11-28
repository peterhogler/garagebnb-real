import { getUserBookings } from "@/lib/actions/booking.actions";
import GoBackNavbar from "../../components/GoBackNavbar";
import BookingListings from "../../components/booking/BookingListings";
import { ObjectId } from "mongoose";

const Page = async ({ params }: { params: { id: string } }) => {
    const bookings = (await getUserBookings(params.id)) as Booking[];
    return (
        <main className="h-full p-4 xl:p-0">
            <GoBackNavbar />
            <BookingListings bookings={bookings} />
        </main>
    );
};

export default Page;

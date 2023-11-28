import { ObjectId } from "mongoose";

interface Booking {
    _id: ObjectId | string;
    listingId: {
        _id: ObjectId | string;
        imageUrl: string;
    };
    userId: {
        _id: ObjectId;
        email: string;
    };
    dates: string[];
    price: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface BookingListingsProps {
    bookings: Booking[];
}

interface BookingCardProps {
    booking: Booking;
}

"use server";

import { revalidatePath } from "next/cache";
import { connectWithMongoDB } from "../mongodb";
import { Booking as BookingType } from "@/typings/booking.typings";
import Booking from "../models/booking.model";

const createBooking = async (booking: BookingType) => {
    try {
        await connectWithMongoDB();
        const newBooking = await Booking.create(booking);
        return newBooking.toObject();
    } catch (error) {
        console.error("Error creating booking:", error); // Log the specific error
        throw new Error("Error creating booking");
    } finally {
        revalidatePath(`/my-listings/[id]`);
    }
};

const getUserBookings = async (id: string) => {
    try {
        await connectWithMongoDB();
        const bookings = await Booking.find({ userId: id })
            .populate({ path: "userId", select: "email" })
            .populate({ path: "listingId", select: "imageUrl" })
            .exec();

        return bookings;
    } catch (error) {
        throw new Error("Unknown error");
    } finally {
        revalidatePath(`/my-listings/[id]`);
    }
};

export { createBooking, getUserBookings };

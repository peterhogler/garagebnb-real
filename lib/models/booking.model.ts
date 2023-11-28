import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
    {
        listingId: { type: Schema.Types.ObjectId, ref: "Listing" },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        dates: [{ type: String, required: true }],
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;

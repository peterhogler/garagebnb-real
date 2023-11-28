import mongoose, { Schema } from "mongoose";

const listingSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    reservable: { type: Boolean, default: true },
    slug: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
});

const Listing = mongoose.models.Listing || mongoose.model("Listing", listingSchema);
export default Listing;

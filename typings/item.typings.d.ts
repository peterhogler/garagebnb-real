import { ObjectId } from "mongoose";

interface Item {
    id: string;
    listingId: ObjectId;
    imageUrl: string;
    userId: string;
    dates: string[];
    price: number;
}

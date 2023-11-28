import { ObjectId } from "mongoose";

interface Item {
    id: string;
    listingId: ObjectId | string;
    imageUrl: string;
    userId: string;
    dates: string[];
    price: number;
}

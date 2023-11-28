import { ObjectId } from "mongoose";

type categoryTypes = "Bil" | "MC";

interface Listing {
    _id: ObjectId;
    title: string;
    description: string;
    imageUrl: string;
    slug: string;
    street: string;
    price: number;
    city: string;
    category: categoryTypes;
}

interface ListingCardProps {
    listing: Listing;
}

interface ListingDetailsProps {
    listing: Listing;
}

interface ListingDetailsDescriptionProps {
    listing: Listing;
}

interface ListingDetailsImageProps {
    listing: Listing;
}

interface ListingsProps {
    listings: Listing[];
}

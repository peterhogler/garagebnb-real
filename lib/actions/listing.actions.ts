"use server";

import { Listing as ListingType } from "@/typings/listing.typings";
import Listing from "../models/listing.model";
import { connectWithMongoDB } from "../mongodb";

const getAllListings = async (): Promise<ListingType[]> => {
    try {
        await connectWithMongoDB();
        const listings = await Listing.find();
        return listings.map((listing) => listing.toObject());
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error has occured while trying to get listings: ${error.message}`);
        } else {
            throw new Error(`Unknown error has occured while trying to get listings: No error message`);
        }
    }
};

const getListing = async (slug: string): Promise<ListingType> => {
    const decodedSlug = decodeURIComponent(slug);
    try {
        await connectWithMongoDB();
        const listing = await Listing.findOne({ slug: decodedSlug });
        return listing.toObject();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error occured while trying to get listing: ${slug}`);
        } else {
            throw new Error(`Unknown error has occured while trying to get listing: No error message`);
        }
    }
};

export { getAllListings, getListing };

"use client";
import { ListingsProps } from "@/typings/listing.typings";
import ListingCard from "./ListingCard";
import { useAppSelector } from "@/redux/hooks";
import { selectCategoryState, selectSearchState } from "@/redux/filter/filterSlice";

const Listings: React.FC<ListingsProps> = ({ listings = [] }) => {
    const category = useAppSelector(selectCategoryState);
    const search = useAppSelector(selectSearchState);

    const filteredListings = listings.filter((item) => {
        return (category === "" || item.category === category) && item.city.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div className="h-full py-4">
            <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredListings.map((listing, index) => (
                    <ListingCard key={index} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default Listings;

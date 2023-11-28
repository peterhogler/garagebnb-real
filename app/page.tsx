import NavbarFilter from "./components/NavbarFilter";
import Listings from "./components/listing/Listings";
import { getAllListings } from "@/lib/actions/listing.actions";

export default async function Home() {
    const listings = await getAllListings();
    return (
        <main className="p-4 lg:p-0 h-full">
            <NavbarFilter />
            <Listings listings={listings} />
        </main>
    );
}

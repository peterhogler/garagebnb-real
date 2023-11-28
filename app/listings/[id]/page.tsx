import ListingDetailsForm from "@/app/components/listing/ListingDetailsForm";
import GoBackNavbar from "@/app/components/GoBackNavbar";
import { getListing } from "@/lib/actions/listing.actions";
import NavbarFilter from "@/app/components/NavbarFilter";
import { Listing } from "@/typings/listing.typings";

const Page = async ({ params }: { params: { id: string } }) => {
    const listing = await getListing(params.id) as Listing;
    return (
        <main className="h-full flex flex-col">
            <NavbarFilter />
            <GoBackNavbar />
            <ListingDetailsForm listing={listing} />
        </main>
    );
};

export default Page;

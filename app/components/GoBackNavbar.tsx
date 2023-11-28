import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const GoBackNavbar = ({ title }: { title?: string }) => {
    return (
        <nav className="flex items-center py-4 px-2 lg:px-0 relative">
            <Link href={"/"} className="inline-flex items-center gap-1">
                <FiArrowLeft size={28} /> Tillbaka
            </Link>
            {!!title && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-widest">
                    <h1>{title}</h1>
                </div>
            )}
        </nav>
    );
};

export default GoBackNavbar;

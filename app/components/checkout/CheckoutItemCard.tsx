import { removeFromCart, selectTotalCartPrice } from "@/redux/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ObjectId } from "mongoose";
import { FC } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CheckoutItemCard: FC<CheckoutItemCardProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const totalPrice = item.price * item.dates.length;

    const sortedItemDates = [...item.dates];
    sortedItemDates.sort();

    return (
        <div className="flex flex-col border h-[200px] rounded-md">
            <div
                className="relative flex-1 h-full flex items-end justify-center  bg-[url(https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center p-3"
                style={{
                    backgroundImage: `url(${item.imageUrl})`,
                }}>
                <div className="flex w-full items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-white">
                        <FaLocationPin className="text-[#4470B2]" size={20} />
                        <span>Åmål</span>
                    </div>
                    <div className="px-3 py-1 bg-[#4470B2]/90 rounded-full inline-flex items-center text-white">
                        {item.price}kr / dygn
                    </div>
                </div>
                <div className="absolute top-3 right-3">
                    <button onClick={() => dispatch(removeFromCart(item))}>
                        <IoMdRemoveCircleOutline className="text-red-600" size={26} />
                    </button>
                </div>
            </div>
            <div className="bg-[#D9D9D9] inline-flex justify-center gap-2 text-center p-1 text-mkd">
                <div className="space-x-2">
                    Datum:
                    {sortedItemDates.map((date: string) => {
                        return <span> {date}</span>;
                    })}
                </div>
                <span>
                    ({item.dates.length} dagar) Total: {totalPrice}kr
                </span>
            </div>
        </div>
    );
};

export default CheckoutItemCard;

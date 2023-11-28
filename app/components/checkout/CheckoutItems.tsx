import { FaLocationPin } from "react-icons/fa6";
import CheckoutItemCard from "./CheckoutItemCard";
import { FC } from "react";

const CheckoutItems: FC<CheckoutItemProps> = ({ cart = [] }) => {
    return (
        <div className="space-y-6">
            {cart.map((item: any, idx) => {
                return <CheckoutItemCard item={item} key={item.id} />;
            })}
        </div>
    );
};

export default CheckoutItems;

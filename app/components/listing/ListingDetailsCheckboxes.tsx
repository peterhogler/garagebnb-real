import { convertDayToFormattedDate } from "@/utils/date";
import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface ListingDetailsCheckboxesProps {
    onCheckChange: Dispatch<SetStateAction<string[]>>;
    dates: string[];
}
const days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

const ListingDetailsCheckboxes: FC<ListingDetailsCheckboxesProps> = ({ onCheckChange, dates }) => {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        if (checked) {
            handleChecked(value);
        } else {
            handleUnchecked(value);
        }
    };

    const handleChecked = (value: string) => {
        const newDate = convertDayToFormattedDate(value);
        if (newDate) {
            onCheckChange([...dates, newDate]);
        }
    };

    const handleUnchecked = (value: string) => {
        const uncheckedDate = convertDayToFormattedDate(value);
        if (uncheckedDate) {
            const updatedValues = dates.filter((item) => item !== uncheckedDate);
            onCheckChange(updatedValues);
        }
    };

    return (
        <div className="flex gap-6 justify-evenly lg:justify-center">
            {days.map((day) => (
                <div key={day} className="space-x-2">
                    <input
                        type="checkbox"
                        id={day}
                        name="day"
                        value={day}
                        onChange={handleCheckboxChange}
                        required={dates.length < 2}
                    />
                    <label htmlFor={day}>{day.substring(0, 3)}</label>
                </div>
            ))}
        </div>
    );
};

export default ListingDetailsCheckboxes;

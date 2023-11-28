const days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

const convertDayToFormattedDate = (dayName: string) => {
    const today = new Date();
    const currentDay = today.getDay();
    const selectedDayIndex = days.findIndex((day) => day.toLowerCase() === dayName.toLowerCase());

    if (selectedDayIndex > -1) {
        let daysToAdd = selectedDayIndex - currentDay;

        if (daysToAdd < 0) {
            daysToAdd += 7;
        }

        today.setDate(today.getDate() + daysToAdd);
        const formattedDate = `${today.getDate()}/${today.getMonth() + 1}`;

        return formattedDate;
    }

    return null;
};

export { convertDayToFormattedDate };

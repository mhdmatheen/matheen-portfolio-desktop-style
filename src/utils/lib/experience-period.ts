const parseDate = (str: string) => {
    const [monthStr, yearStr] = str.trim().split(" ");
    const month = new Date(`${monthStr} 1, ${yearStr}`).getMonth(); // 0-based
    const year = parseInt(yearStr, 10);
    return new Date(year, month);
};

export function getReadableDuration(rangeStr: string) {

    const [startStr, endStr] = rangeStr.split(" - ");
    const startDate = parseDate(startStr);
    const endDate = parseDate(endStr);

    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const humanReadable = `${years} year${years !== 1 ? "s" : ""} ${months ? `${months} month${months !== 1 ? "s" : ""}` : ""
        }`.trim();

    const decimal = (totalMonths / 12).toFixed(1).replace(".0", "");

    return {
        humanReadable, // "2 years 6 months"
        decimalYears: `${decimal} year${decimal !== "1.0" ? "s" : ""}`, // "2.5 years"
    };
}
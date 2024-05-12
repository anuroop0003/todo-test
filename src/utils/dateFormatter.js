const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function dateFormatter(date_string) {
  const date = new Date(date_string);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }
  const formattedDate = `${month} ${day}${daySuffix}, ${year}`;
  return formattedDate;
}

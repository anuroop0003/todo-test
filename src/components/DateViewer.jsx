import calendar_icon from "../assets/calendar.svg";
import { dateFormatter } from "../utils/dateFormatter";
export default function DateViewer({ date_string }) {
  return (
    <div className="bg-date_container rounded-sm flex items-center gap-2 px-1.5 py-1">
      <img className="h-4 w-4" src={calendar_icon} />
      <span className="font-semibold text-xs leading-5 text-date_text">
        {dateFormatter(date_string)}
      </span>
    </div>
  );
}

import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
}

interface CalendarViewProps {
  events: Event[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const renderEvents = (day: Date) => {
    const dayEvents = events.filter((event) =>
      isSameDay(new Date(event.date), day),
    );
    return dayEvents.map((event) => (
      <div
        key={event.id}
        className="text-xs bg-blue-100 text-blue-800 rounded px-1 mb-1 truncate"
      >
        {event.title}
      </div>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-gray-50 text-gray-500 text-center py-2 text-sm font-semibold"
          >
            {day}
          </div>
        ))}
        {monthDays.map((day) => (
          <div
            key={day.toString()}
            className={`bg-white p-2 h-32 overflow-y-auto ${
              !isSameMonth(day, currentMonth) ? "text-gray-400" : ""
            }`}
          >
            <div className="font-semibold text-sm mb-1">{format(day, "d")}</div>
            {renderEvents(day)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;

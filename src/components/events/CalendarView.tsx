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
  isToday,
} from "date-fns";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  attendees: number;
}

interface CalendarViewProps {
  events: Event[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded px-1 py-0.5 mb-1 truncate cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
        onClick={() => setSelectedEvent(event)}
      >
        {event.title}
      </div>
    ));
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted">
        <h2 className="text-xl font-semibold text-foreground">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-muted-foreground/10 transition-colors duration-200"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-muted-foreground/10 transition-colors duration-200"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-muted p-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-muted-foreground/5 text-muted-foreground text-center py-2 text-sm font-semibold"
          >
            {day}
          </div>
        ))}
        {monthDays.map((day, index) => (
          <div
            key={day.toString()}
            className={`bg-card p-1 h-24 overflow-y-auto ${
              !isSameMonth(day, currentMonth)
                ? "text-muted-foreground/50 bg-gray-50 dark:bg-gray-800"
                : isToday(day)
                  ? "bg-blue-50 dark:bg-blue-900 font-semibold"
                  : `bg-${["pink", "purple", "indigo", "blue", "teal", "green", "yellow"][index % 7]}-50 dark:bg-${["pink", "purple", "indigo", "blue", "teal", "green", "yellow"][index % 7]}-900`
            }`}
          >
            <div className="font-medium text-sm mb-1">{format(day, "d")}</div>
            {renderEvents(day)}
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-50 p-6 rounded-lg shadow-xl max-w-md w-full m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">
                {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-muted-foreground mb-2">
              {format(new Date(selectedEvent.date), "PPP")}
            </p>
            <p className="text-foreground mb-4">{selectedEvent.description}</p>
            <p className="text-muted-foreground mb-2">
              Location: {selectedEvent.location}
            </p>
            <p className="text-muted-foreground">
              Attendees: {selectedEvent.attendees}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;

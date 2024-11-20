import React, { useState } from "react";
import EventList from "../components/events/EventList";
import CalendarView from "../components/events/CalendarView";

const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");

  // Mock data for events
  const events = [
    {
      id: "1",
      title: "Web Development Workshop",
      description: "Learn the basics of HTML, CSS, and JavaScript",
      date: "2023-06-15T14:00:00Z",
      location: "Online",
      attendees: 50,
    },
    {
      id: "2",
      title: "Data Science Seminar",
      description: "Explore the world of data analysis and machine learning",
      date: "2023-06-20T10:00:00Z",
      location: "Room 101",
      attendees: 30,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="mb-6">
        <button
          className={`mr-4 ${viewMode === "list" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
        <button
          className={`${viewMode === "calendar" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
          onClick={() => setViewMode("calendar")}
        >
          Calendar View
        </button>
      </div>
      {viewMode === "list" ? (
        <EventList events={events} />
      ) : (
        <CalendarView events={events} />
      )}
    </div>
  );
};

export default Events;

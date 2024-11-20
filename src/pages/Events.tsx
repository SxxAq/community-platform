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
      date: "2024-11-25T14:00:00Z",
      location: "Online",
      attendees: 50,
    },
    {
      id: "2",
      title: "Data Science Seminar",
      description: "Explore the world of data analysis and machine learning",
      date: "2024-11-22T10:00:00Z",
      location: "Room 101",
      attendees: 30,
    },
    {
      id: "3",
      title: "Artificial Intelligence Seminar",
      description: "Explore the world of AI and machine learning",
      date: "2024-11-23T10:00:00Z",
      location: "Room 101",
      attendees: 30,
    },
    {
      id: "4",
      title: "Cybersecurity Fundamentals",
      description: "Learn how to protect systems and data from cyber threats",
      date: "2024-11-18T16:00:00Z",
      location: "Online",
      attendees: 45,
    },
    {
      id: "5",
      title: "Mobile App Development Bootcamp",
      description:
        "Hands-on session on building mobile apps using React Native",
      date: "2024-11-27T09:00:00Z",
      location: "Lab 202",
      attendees: 25,
    },
    {
      id: "6",
      title: "Blockchain for Beginners",
      description:
        "An introduction to blockchain technology and its applications",
      date: "2024-11-20T11:00:00Z",
      location: "Conference Hall",
      attendees: 40,
    },
    {
      id: "7",
      title: "UX/UI Design Principles",
      description:
        "Learn the essentials of user experience and interface design",
      date: "2024-11-28T13:00:00Z",
      location: "Room 303",
      attendees: 35,
    },
    {
      id: "8",
      title: "Introduction to Cloud Computing",
      description:
        "Understanding the basics of cloud services and architecture",
      date: "2024-11-24T15:00:00Z",
      location: "Online",
      attendees: 60,
    },
    {
      id: "9",
      title: "Agile Methodologies Workshop",
      description: "Learn agile practices for efficient project management",
      date: "2024-11-26T10:30:00Z",
      location: "Room 102",
      attendees: 20,
    },
    {
      id: "10",
      title: "Machine Learning Hackathon",
      description:
        "Team up and solve real-world problems using machine learning",
      date: "2024-11-29T18:00:00Z",
      location: "Tech Hub",
      attendees: 75,
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

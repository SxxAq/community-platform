import React from "react";
import EventCard from "./EventCard";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const handleRSVP = (eventId: string) => {
    console.log(`RSVP for event ${eventId}`);
    // Implement RSVP logic here
  };

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          location={event.location}
          attendees={event.attendees}
          onRSVP={handleRSVP}
        />
      ))}
    </div>
  );
};

export default EventList;

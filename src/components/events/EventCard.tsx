import React from "react";
import { format } from "date-fns";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
  onRSVP: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  location,
  attendees,
  onRSVP,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-700">
            <strong>Date:</strong> {format(new Date(date), "PPP")}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {location}
          </p>
        </div>
        <p className="text-gray-700">
          <strong>Attendees:</strong> {attendees}
        </p>
      </div>
      <button
        onClick={() => onRSVP(id)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        RSVP
      </button>
    </div>
  );
};

export default EventCard;

import React from "react";
import { format } from "date-fns";
import { MapPin, Users, Calendar } from "lucide-react";

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
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="space-y-3 w-full sm:w-auto">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="mr-2 h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="truncate">{format(new Date(date), "PPP")}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="mr-2 h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Users className="mr-2 h-5 w-5 text-purple-600 flex-shrink-0" />
            <span>{attendees} attendees</span>
          </div>
        </div>
        <button
          onClick={() => onRSVP(id)}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors duration-300"
        >
          RSVP
        </button>
      </div>
    </div>
  );
};

export default EventCard;

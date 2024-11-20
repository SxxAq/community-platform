import { useState, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
}

export const useEvent = (eventId: string) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API call
        const response = await fetch(`/api/events/${eventId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError("An error occurred while fetching the event");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const updateEvent = async (updatedEvent: Partial<Event>) => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      const response = await fetch(`/api/events/${eventId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEvent),
      });
      if (!response.ok) {
        throw new Error("Failed to update event");
      }
      const data = await response.json();
      setEvent(data);
    } catch (err) {
      setError("An error occurred while updating the event");
    } finally {
      setLoading(false);
    }
  };

  return { event, loading, error, updateEvent };
};

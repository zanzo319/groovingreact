import { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';

type Event = {
  _id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  time: string;
  attendees: string;
  image: { asset: { url: string } };
};

export function Past() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    sanity
      .fetch(`*[_type == "event" && date < now()] | order(date desc)`)
      .then(setEvents);
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-8 text-center">
        Past Events
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {events.map((event) => (
          <div key={event._id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={event.image?.asset?.url}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bebas text-secondary mb-2">{event.title}</h3>
              <p className="font-rajdhani text-sm">
                {new Date(event.date).toLocaleDateString()} – {event.venue}, {event.location}
              </p>
              <p className="text-xs text-gray-600 mt-1">Time: {event.time} | {event.attendees}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
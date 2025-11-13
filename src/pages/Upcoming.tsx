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

export function Upcoming() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    sanity
      .fetch(`*[_type == "event"] | order(date desc){
        _id,
        title,
        date,
        venue,
        location,
        time,
        attendees,
        image {
          asset -> {
            url
          }
        }
      }`)
      .then((data) => {
        console.log('EVENTI CON URL:', data);
        setEvents(data);
      });
  }, []);

  return (
    <section className="upcoming-section">
      <h2 className="upcoming-title">Upcoming Events</h2>
      <div className="upcoming-wrapper">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <img
              src={event.image.asset.url}
              alt={event.title}
              className="event-poster"
            />
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-details">
                {new Date(event.date).toLocaleDateString()} – {event.venue}, {event.location}
              </p>
              <p className="event-meta">
                Time: {event.time} | {event.attendees}
              </p>
              <button className="event-button">Buy Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
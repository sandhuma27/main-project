import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const dummyEvents = [
  {
    id: "1",
    title: "Birthday Celebration",
    date: "2025-09-03",
    description: "A fun birthday party with friends and family.",
  },
  {
    id: "2",
    title: "Wellness Workshop",
    date: "2025-09-10",
    description: "Learn mindfulness and healthy habits.",
  },
  {
    id: "3",
    title: "Meditation Session",
    date: "2025-09-15",
    description: "Guided meditation for relaxation and focus.",
  },
];

function EventDetail({ onLogout }) {
  const { id } = useParams();
  const event = dummyEvents.find((e) => e.id === id);

  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div style={{ padding: "2rem" }}>
        {event ? (
          <>
            <h2>{event.title}</h2>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>{event.description}</p>
          </>
        ) : (
          <p>Event not found.</p>
        )}
      </div>
    </div>
  );
}

export default EventDetail;

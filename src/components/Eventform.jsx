import { useState } from "react";
import Navbar from "./Navbar";

function EventForm({ onLogout }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Event:", { title, date, description });
    setSubmitted(true);
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div style={{ padding: "2rem" }}>
        <h2>Add New Event</h2>
        {submitted && (
          <p style={{ color: "green" }}>Event added successfully!</p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
          }}
        >
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ ...inputStyle, height: "100px" }}
          />
          <button type="submit" style={buttonStyle}>
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  marginBottom: "1rem",
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white",
  cursor: "pointer",
};

export default EventForm;

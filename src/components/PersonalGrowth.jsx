import React, { useState, useEffect } from "react";
import { load, save } from "../utils";

const personalGrowthEvents = [
  { id: "study", title: "Set study time (1hr+)", score: 0, date: "" },
  {
    id: "communication",
    title: "Practice communication skills",
    score: 0,
    date: "",
  },
  { id: "exam", title: "Exam preparation session", score: 0, date: "" },
  { id: "interview", title: "Interview practice", score: 0, date: "" },
  { id: "appointment", title: "Important Appointment", score: 0, date: "" },
  { id: "interviewDate", title: "Interview Date", score: 0, date: "" },
  { id: "importantEvent", title: "Important Event", score: 0, date: "" },
];

export default function PersonalGrowth() {
  const [growth, setGrowth] = useState(() =>
    load("eventnest_growth", personalGrowthEvents)
  );

  useEffect(() => {
    save("eventnest_growth", growth);
  }, [growth]);

  function toggle(id) {
    setGrowth((g) =>
      g.map((x) => (x.id === id ? { ...x, score: x.score ? 0 : 1 } : x))
    );
  }

  function setDate(id, date) {
    setGrowth((g) => g.map((x) => (x.id === id ? { ...x, date } : x)));
  }

  function getDateStatus(dateStr) {
    if (!dateStr) return "";
    const today = new Date();
    const date = new Date(dateStr);
    const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    if (diff > 0) return `${diff} day(s) left`;
    if (diff === 0) return "Today!";
    return `${Math.abs(diff)} day(s) ago`;
  }

  return (
    <div id="personal-growth">
      <h2
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#ff6f00",
          letterSpacing: 1,
          margin: "38px 0 18px 0",
          textAlign: "center",
          textShadow: "0 2px 8px #ffe082",
        }}
      >
        Personal Growth
      </h2>
      <div
        style={{
          color: "#ff6f00",
          fontSize: 16,
          textAlign: "center",
          marginBottom: 18,
          fontWeight: 600,
          textShadow: "0 1px 6px #ffe082",
        }}
      >
        Track your study, communication, and career skills
      </div>
      <div
        style={{
          marginTop: 8,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {growth.map((g) => (
          <div
            key={g.id}
            style={{
              background: "#fff3e0",
              borderRadius: 18,
              boxShadow: "0 2px 12px #ffe082",
              padding: "22px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 8,
              border: g.score ? "2px solid #43a047" : "2px solid #ffb300",
              transition: "border 0.2s",
            }}
          >
            <span style={{ fontSize: 38, marginBottom: 10 }}>
              {g.id === "study" && "📚"}
              {g.id === "communication" && "💬"}
              {g.id === "exam" && "📝"}
              {g.id === "interview" && "🎤"}
              {g.id === "appointment" && "📅"}
              {g.id === "interviewDate" && "🗓️"}
              {g.id === "importantEvent" && "⭐"}
            </span>
            <div
              style={{
                fontWeight: 800,
                fontSize: 19,
                color: "#ff6f00",
                textShadow: "0 1px 6px #ffe082",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              {g.title}
            </div>
            <div
              style={{
                color: g.score ? "#00e676" : "#ff1744",
                fontWeight: 700,
                fontSize: 16,
                textShadow: g.score ? "0 1px 6px #b9f6ca" : "0 1px 6px #ffcdd2",
                marginBottom: 12,
              }}
            >
              {g.score ? "Done" : "Pending"}
            </div>
            <input
              type="date"
              value={g.date || ""}
              onChange={(e) => setDate(g.id, e.target.value)}
              style={{
                marginBottom: 8,
                padding: "6px 12px",
                borderRadius: 6,
                border: "1px solid #ffb300",
                fontSize: 15,
              }}
            />
            <div
              style={{
                color: "#1976d2",
                fontWeight: 600,
                fontSize: 15,
                marginBottom: 10,
              }}
            >
              {getDateStatus(g.date)}
            </div>
            <button
              onClick={() => toggle(g.id)}
              style={{
                background: g.score
                  ? "linear-gradient(90deg,#43a047,#81c784)"
                  : "linear-gradient(90deg,#ff6f00,#ffe082)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 22px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 1px 4px #ffe082",
                transition: "background 0.2s",
              }}
            >
              {g.score ? "Undo" : "Mark"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

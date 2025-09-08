// Encouragement messages
const encouragements = [
  "Great job! Every healthy choice counts!",
  "Keep going, your future self will thank you!",
  "Small steps every day lead to big results.",
  "You’re building a healthier, happier you!",
  "Stay positive and keep moving forward!",
  "Your wellness journey is worth it!",
  "Consistency is the key to success!",
  "Celebrate your progress, not perfection!",
];
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { load, save } from "../utils";
import Calendarview from "./Calendarview";

const defaultHabits = [
  { id: "sleep", title: "Sleep 7+ hrs", score: 0 },
  { id: "exercise", title: "Exercise", score: 0 },
  { id: "water", title: "Drink 2L water", score: 0 },
  { id: "nutrition", title: "Eat Nutritious Food", score: 0 },
  { id: "fruits", title: "Fruits Intake", score: 0 },
  { id: "yoga", title: "Yoga", score: 0 },
  { id: "meditate", title: "Meditate", score: 0 },
];

export default function Healthtracker() {
  const [habits, setHabits] = useState(() =>
    load("eventnest_habits", defaultHabits)
  );
  const [encourage, setEncourage] = useState("");

  useEffect(() => {
    save("eventnest_habits", habits);
  }, [habits]);

  useEffect(() => {
    // Pick a random encouragement message each day
    const today = new Date().toISOString().slice(0, 10);
    const idx =
      today
        .split("-")
        .join("")
        .split("")
        .reduce((a, b) => a + Number(b), 0) % encouragements.length;
    setEncourage(encouragements[idx]);
    // Show alert on mount
    alert(encouragements[idx]);
  }, []);

  function toggle(id) {
    setHabits((h) =>
      h.map((x) => (x.id === id ? { ...x, score: x.score ? 0 : 1 } : x))
    );
  }

  function resetHabits() {
    setHabits(defaultHabits);
    save("eventnest_habits", defaultHabits);
  }

  const done = habits.filter((h) => h.score).length;
  const pct = Math.round((done / habits.length) * 100);

  // Chart data for habits
  const chartData = {
    labels: habits.map((h) => h.title),
    datasets: [
      {
        label: "Completed",
        data: habits.map((h) => h.score),
        backgroundColor: habits.map((h) => (h.score ? "#43a047" : "#b0bec5")),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Your Habit Progress" },
    },
    scales: {
      y: { min: 0, max: 1, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
        borderRadius: 28,
        boxShadow: "0 4px 32px #b3c6e0",
        padding: 36,
        border: "2px solid #1976d2",
      }}
    >
      <h2
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: "#0d47a1",
          letterSpacing: 1,
          marginBottom: 18,
          textAlign: "center",
          textShadow: "0 2px 8px #90caf9",
        }}
      >
        Wellness Tracker
      </h2>
      <div
        style={{
          color: "#1565c0",
          fontSize: 17,
          textAlign: "center",
          marginBottom: 18,
          fontWeight: 600,
          textShadow: "0 1px 6px #b3e5fc",
        }}
      >
        Track daily habits and watch your progress
      </div>
      <div
        style={{
          color: "#43a047",
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        {encourage}
      </div>

      <div
        style={{
          width: "100%",
          overflowX: "auto",
          margin: "18px auto 18px auto",
        }}
      >
        <div
          style={{
            width: 420,
            minWidth: 420,
            maxWidth: 420,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 1px 8px #bbdefb",
            padding: 12,
            margin: "0 auto",
          }}
        >
          <Bar
            data={chartData}
            options={chartOptions}
            height={220}
            width={400}
          />
        </div>
      </div>

      <div
        style={{
          background: "#e3f2fd",
          borderRadius: 10,
          height: 18,
          margin: "0 0 24px 0",
          overflow: "hidden",
          boxShadow: "0 1px 4px #e0e0e0",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background:
              pct === 100
                ? "linear-gradient(90deg,#43a047,#81c784)"
                : "linear-gradient(90deg,#1976d2,#64b5f6)",
            borderRadius: 10,
            transition: "width 0.5s",
          }}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <button
          onClick={resetHabits}
          style={{
            background: "linear-gradient(90deg,#1976d2,#64b5f6)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 22px",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 1px 4px #e0e0e0",
            marginBottom: 18,
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        >
          Reset Habits (Show All Default)
        </button>
        {habits.map((h) => (
          <div
            key={h.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid #f0f0f0",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22 }}>
                {h.id === "sleep" && "🛌"}
                {h.id === "exercise" && "🏃‍♂️"}
                {h.id === "water" && "💧"}
                {h.id === "nutrition" && "🥗"}
                {h.id === "fruits" && "🍎"}
                {h.id === "yoga" && "🧘‍♀️"}
                {h.id === "meditate" && "🧘‍♂️"}
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#1976d2",
                    textShadow: "0 1px 6px #bbdefb",
                  }}
                >
                  {h.title}
                </div>
                <div
                  style={{
                    color: h.score ? "#00e676" : "#ff1744",
                    fontWeight: 700,
                    fontSize: 15,
                    textShadow: h.score
                      ? "0 1px 6px #b9f6ca"
                      : "0 1px 6px #ffcdd2",
                  }}
                >
                  {h.score ? "Done" : "Pending"}
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle(h.id)}
              style={{
                background: h.score
                  ? "linear-gradient(90deg,#43a047,#81c784)"
                  : "linear-gradient(90deg,#1976d2,#64b5f6)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 22px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 1px 4px #e0e0e0",
                transition: "background 0.2s",
              }}
            >
              {h.score ? "Undo" : "Mark"}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Calendarview />
      </div>

      <div
        style={{
          marginTop: 36,
          background: "linear-gradient(90deg,#e3f2fd,#fce4ec)",
          borderRadius: 18,
          boxShadow: "0 2px 12px #b3c6e0",
          padding: 24,
          textAlign: "center",
          border: "1.5px solid #1976d2",
          maxWidth: 420,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3
          style={{
            color: "#1976d2",
            fontWeight: 800,
            fontSize: 22,
            marginBottom: 10,
            letterSpacing: 1,
          }}
        >
          Your Performance Review
        </h3>
        <div style={{ fontSize: 17, color: "#1565c0", marginBottom: 8 }}>
          Total Habits: <span style={{ fontWeight: 700 }}>{habits.length}</span>
        </div>
        <div style={{ fontSize: 17, color: "#43a047", marginBottom: 8 }}>
          Completed: <span style={{ fontWeight: 700 }}>{done}</span>
        </div>
        <div
          style={{
            fontSize: 17,
            color: pct === 100 ? "#43a047" : "#1976d2",
            fontWeight: 700,
          }}
        >
          Completion: {pct}%
        </div>
        {pct === 100 && (
          <div
            style={{
              color: "#43a047",
              fontWeight: 800,
              marginTop: 10,
              fontSize: 18,
            }}
          >
            🌟 Excellent! You completed all your habits today!
          </div>
        )}
      </div>
    </div>
  );
}

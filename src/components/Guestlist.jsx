import React, { useState, useEffect } from "react";

const Guestlist = () => {
  const [guests, setGuests] = useState(() => {
    const saved = localStorage.getItem("guests");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  const addGuest = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please enter both name and email.");
      return;
    }
    const newGuest = {
      id: Date.now(),
      name,
      email,
      rsvp: "Pending",
    };
    setGuests([...guests, newGuest]);
    setName("");
    setEmail("");
    setError("");
  };

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const toggleRSVP = (id) => {
    setGuests(
      guests.map((guest) => {
        let nextStatus;
        if (guest.rsvp === "Pending") nextStatus = "Yes";
        else if (guest.rsvp === "Yes") nextStatus = "No";
        else nextStatus = "Pending";
        return guest.id === id ? { ...guest, rsvp: nextStatus } : guest;
      })
    );
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 0%, #f9f9f9 100%)",
        padding: "48px 0",
      }}
    >
      <div
        style={{
          background: "#fff",
          boxShadow: "0 4px 32px #b3c6e0",
          borderRadius: 22,
          maxWidth: 700,
          margin: "0 auto",
          padding: 40,
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 22,
            color: "#0d47a1",
            letterSpacing: 1,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span role="img" aria-label="guests">
            👥
          </span>{" "}
          Guest List
        </h2>

        {/* Add Guest Form */}
        <form
          onSubmit={addGuest}
          style={{
            display: "flex",
            gap: 14,
            marginBottom: 32,
            flexWrap: "wrap",
            alignItems: "center",
            background: "#f5faff",
            borderRadius: 12,
            padding: 18,
            boxShadow: "0 1px 8px #e3eafc",
          }}
        >
          <input
            type="text"
            placeholder="Guest Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              flex: 1,
              minWidth: 120,
              border: "1.5px solid #90caf9",
              borderRadius: 8,
              padding: "12px 16px",
              fontSize: 17,
              background: "#fafdff",
            }}
          />
          <input
            type="email"
            placeholder="Guest Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              minWidth: 180,
              border: "1.5px solid #90caf9",
              borderRadius: 8,
              padding: "12px 16px",
              fontSize: 17,
              background: "#fafdff",
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              boxShadow: "0 2px 8px #b3c6e0",
              transition: "background 0.2s",
            }}
          >
            <span role="img" aria-label="add">
              ➕
            </span>{" "}
            Add
          </button>
        </form>
        {error && (
          <p
            style={{
              color: "#d32f2f",
              fontSize: 15,
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}

        {/* Guest List Table */}
        {guests.length > 0 ? (
          <div
            style={{
              overflowX: "auto",
              borderRadius: 12,
              border: "1.5px solid #e3e3e3",
              background: "#fafdff",
              boxShadow: "0 1px 8px #e3eafc",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 17,
              }}
            >
              <thead>
                <tr
                  style={{
                    background:
                      "linear-gradient(90deg, #e3f2fd 60%, #bbdefb 100%)",
                    color: "#0d47a1",
                  }}
                >
                  <th
                    style={{ padding: 14, fontWeight: 800, letterSpacing: 0.5 }}
                  >
                    Name
                  </th>
                  <th
                    style={{ padding: 14, fontWeight: 800, letterSpacing: 0.5 }}
                  >
                    Email
                  </th>
                  <th
                    style={{ padding: 14, fontWeight: 800, letterSpacing: 0.5 }}
                  >
                    RSVP
                  </th>
                  <th
                    style={{ padding: 14, fontWeight: 800, letterSpacing: 0.5 }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <tr
                    key={guest.id}
                    style={{
                      borderTop: "1.5px solid #e3e3e3",
                      background: "#fff",
                      transition: "background 0.2s",
                    }}
                  >
                    <td
                      style={{
                        padding: 14,
                        color: "#ff6f00",
                        fontWeight: 700,
                        textShadow: "0 1px 6px #fffde7",
                      }}
                    >
                      {guest.name}
                    </td>
                    <td
                      style={{
                        padding: 14,
                        color: "#1976d2",
                        fontWeight: 700,
                        textShadow: "0 1px 6px #bbdefb",
                      }}
                    >
                      {guest.email}
                    </td>
                    <td style={{ padding: 14 }}>
                      <button
                        onClick={() => toggleRSVP(guest.id)}
                        style={{
                          padding: "7px 22px",
                          borderRadius: 18,
                          border: "none",
                          fontWeight: 700,
                          fontSize: 16,
                          background:
                            guest.rsvp === "Yes"
                              ? "linear-gradient(90deg, #43a047 60%, #81c784 100%)"
                              : guest.rsvp === "No"
                              ? "linear-gradient(90deg, #e53935 60%, #ff8a65 100%)"
                              : "linear-gradient(90deg, #fbc02d 60%, #fff176 100%)",
                          color:
                            guest.rsvp === "No"
                              ? "#fff"
                              : guest.rsvp === "Yes"
                              ? "#fff"
                              : "#222",
                          cursor: "pointer",
                          boxShadow: "0 1px 4px #e0e0e0",
                          transition: "background 0.2s",
                        }}
                      >
                        {guest.rsvp === "Yes" && (
                          <span role="img" aria-label="yes">
                            ✅
                          </span>
                        )}
                        {guest.rsvp === "No" && (
                          <span role="img" aria-label="no">
                            ❌
                          </span>
                        )}
                        {guest.rsvp === "Pending" && (
                          <span role="img" aria-label="pending">
                            ⏳
                          </span>
                        )}{" "}
                        {guest.rsvp}
                      </button>
                    </td>
                    <td style={{ padding: 14 }}>
                      <button
                        onClick={() => removeGuest(guest.id)}
                        style={{
                          color: "#d32f2f",
                          background: "none",
                          border: "none",
                          fontWeight: 700,
                          cursor: "pointer",
                          textDecoration: "underline",
                          fontSize: 16,
                        }}
                      >
                        <span role="img" aria-label="remove">
                          🗑️
                        </span>{" "}
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p
            style={{
              color: "#888",
              fontSize: 18,
              marginTop: 22,
              textAlign: "center",
            }}
          >
            No guests added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Guestlist;

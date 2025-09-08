import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      onLogin();
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 22,
          boxShadow: "0 6px 32px #90caf9",
          padding: "48px 36px",
          maxWidth: 370,
          width: "95vw",
          textAlign: "center",
          border: "2.5px solid #1976d2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>🦜</div>
        <h2
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#1976d2",
            letterSpacing: 1,
            marginBottom: 18,
            textShadow: "0 2px 8px #90caf9",
          }}
        >
          EventNest Login
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "12px 16px",
              fontSize: 17,
              borderRadius: 8,
              border: "1.5px solid #90caf9",
              marginBottom: 0,
              background: "#f5faff",
              color: "#1976d2",
              fontWeight: 600,
              outline: "none",
              boxShadow: "0 1px 6px #e3eafc",
              transition: "border 0.2s",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px 16px",
              fontSize: 17,
              borderRadius: 8,
              border: "1.5px solid #90caf9",
              marginBottom: 0,
              background: "#f5faff",
              color: "#1976d2",
              fontWeight: 600,
              outline: "none",
              boxShadow: "0 1px 6px #e3eafc",
              transition: "border 0.2s",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 0",
              fontSize: 18,
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(90deg,#1976d2,#00bcd4)",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              marginTop: 8,
              boxShadow: "0 1px 6px #bbdefb",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg,#00bcd4,#1976d2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg,#1976d2,#00bcd4)")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

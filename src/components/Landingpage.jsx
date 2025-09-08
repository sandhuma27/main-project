import Navbar from "./Navbar";

function Landingpage({ onLogout }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
        padding: 0,
      }}
    >
      <Navbar onLogout={onLogout} />
      <div
        style={{
          maxWidth: 800,
          margin: "60px auto",
          background: "linear-gradient(135deg, #f7fafc 0%, #e3f2fd 100%)",
          borderRadius: 32,
          boxShadow: "0 6px 40px #b3c6e0",
          padding: "48px 24px",
          textAlign: "center",
          border: "2.5px solid #7c3aed",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#7c3aed",
            letterSpacing: 1,
            marginBottom: 16,
            textShadow: "0 2px 8px #b39ddb",
          }}
        >
          Welcome to{" "}
          <span style={{ color: "#06b6d4", textShadow: "0 2px 8px #b2f5ea" }}>
            EventNest
          </span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#374151",
            marginBottom: 28,
            fontWeight: 500,
            textShadow: "0 1px 4px #e0e7ef",
          }}
        >
          Your personal event and wellness tracker
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            margin: "32px 0",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ede9fe 60%, #c7d2fe 100%)",
              borderRadius: 18,
              padding: "24px 18px",
              minWidth: 200,
              boxShadow: "0 2px 12px #c7d2fe",
              fontSize: 17,
              color: "#7c3aed",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            🎉 Effortlessly manage your events
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #e0f2fe 60%, #bae6fd 100%)",
              borderRadius: 18,
              padding: "24px 18px",
              minWidth: 200,
              boxShadow: "0 2px 12px #bae6fd",
              fontSize: 17,
              color: "#06b6d4",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            💪 Track your healthy habits
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #fce7f3 60%, #fbcfe8 100%)",
              borderRadius: 18,
              padding: "24px 18px",
              minWidth: 200,
              boxShadow: "0 2px 12px #fbcfe8",
              fontSize: 17,
              color: "#d946ef",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            🧘‍♂️ Stay motivated and organized
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <span
            style={{
              fontSize: 18,
              color: "#059669",
              fontWeight: 700,
              textShadow: "0 1px 4px #bbf7d0",
            }}
          >
            Start planning, tracking, and thriving with EventNest!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

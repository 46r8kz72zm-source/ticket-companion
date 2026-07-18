import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";

function LobbyPage() {
  const location = useLocation();

  const roomCode = location.state?.roomCode ?? "------";
  const playerName = location.state?.playerName ?? "Unknown";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 340,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h1>Lobby</h1>

        <h2>Room</h2>

        <p
          style={{
            fontSize: "2rem",
            letterSpacing: "0.2em",
            fontWeight: "bold",
          }}
        >
          {roomCode}
        </p>

        <h2>Players</h2>

        <div
          style={{
            border: "1px solid #475569",
            borderRadius: 8,
            padding: 16,
            textAlign: "left",
            background: "#1e293b",
          }}
        >
          <p>👑 {playerName} (Host)</p>
        </div>

        <Button>Start Game</Button>
      </div>
    </main>
  );
}

export default LobbyPage;
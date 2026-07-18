import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

function LobbyPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const roomCode = location.state?.roomCode ?? "------";
  const playerName = location.state?.playerName ?? "Unknown";

  function copyRoomCode() {
    navigator.clipboard.writeText(roomCode);
    alert("Room code copied!");
  }

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
          width: 360,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h1 style={{ color: "white" }}>🚂 Lobby</h1>

        <h2 style={{ color: "white" }}>Room Code</h2>

        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: ".2em",
            textAlign: "center",
          }}
        >
          {roomCode}
        </p>

        <Button
          variant="secondary"
          onClick={copyRoomCode}
        >
          Copy Room Code
        </Button>

        <h2 style={{ color: "white" }}>Players</h2>

        <div
          style={{
            border: "1px solid #475569",
            borderRadius: 8,
            padding: 16,
            background: "#1e293b",
          }}
        >
          <p>👑 {playerName} (Host)</p>

          <hr
            style={{
              margin: "16px 0",
              borderColor: "#475569",
            }}
          />

          <p style={{ opacity: 0.7 }}>
            ⏳ Waiting for players...
          </p>
        </div>

        <Button onClick={() => navigate("/game")}>
          Start Game
        </Button>
      </div>
    </main>
  );
}

export default LobbyPage;
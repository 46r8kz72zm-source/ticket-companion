import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { generateRoomCode } from "../utils/generateRoomCode";

function CreateGamePage() {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  function handleCreateGame() {
    if (!playerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    navigate("/lobby", {
      state: {
        roomCode: generateRoomCode(),
        playerName,
      },
    });
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
        <h1 style={{ color: "white" }}>Create Game</h1>

        <label>Your Name</label>

        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #475569",
            background: "#1e293b",
            color: "white",
            fontSize: "1rem",
          }}
        />

        <Button onClick={handleCreateGame}>
          Create Game
        </Button>
      </div>
    </main>
  );
}

export default CreateGamePage;
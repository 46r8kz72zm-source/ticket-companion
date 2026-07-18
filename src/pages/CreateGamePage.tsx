import { useState } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { generateRoomCode } from "../utils/generateRoomCode";

function CreateGamePage() {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

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
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h1>Create Game</h1>

        <label>Your Name</label>

        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Player"
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #475569",
            background: "#1e293b",
            color: "white",
            fontSize: "1rem",
          }}
        />

        <Button
  onClick={() => {
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
  }}
>
  Create Game
</Button>
      </div>
    </main>
  );
}

export default CreateGamePage;
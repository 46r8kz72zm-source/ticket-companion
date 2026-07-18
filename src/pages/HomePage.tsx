import Button from "../components/common/Button";

function HomePage() {
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
      <div style={{ width: 320, textAlign: "center" }}>
        <h1>🚂 Ticket Companion</h1>

        <p>
          Play Ticket to Ride remotely using your own physical boards.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 40,
          }}
        >
          <Button>Create Game</Button>

          <Button variant="secondary">
            Join Game
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
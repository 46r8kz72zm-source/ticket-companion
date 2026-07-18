import Button from "../components/common/Button";
import PageLayout from "../components/layout/PageLayout";

function GamePage() {
  return (
    <PageLayout>
      <div
        style={{
          width: 360,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h1>🚂 Ticket Companion</h1>

        <h2>Room</h2>
        <p>DB7C67</p>

        <hr />

        <h2>Face Up Cards</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "2rem",
          }}
        >
          <span>🟥</span>
          <span>🟦</span>
          <span>🟩</span>
          <span>⬛</span>
          <span>🚂</span>
        </div>

        <hr />

        <h2>Your Hand</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            fontSize: "2rem",
          }}
        >
          <span>🟥</span>
          <span>🟥</span>
          <span>🟨</span>
          <span>⬛</span>
          <span>🚂</span>
        </div>

        <Button>Draw Card</Button>

        <Button variant="secondary">
          View Tickets
        </Button>
      </div>
    </PageLayout>
  );
}

export default GamePage;
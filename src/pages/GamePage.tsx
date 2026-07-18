import FaceUpCards from "../components/game/FaceUpCards/FaceUpCards";
import TrainHand from "../components/game/TrainHand/TrainHand";
import Button from "../components/common/Button";
import PageLayout from "../components/layout/PageLayout";

function GamePage() {
  return (
    <PageLayout>
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          🚂 Ticket Companion
        </h1>

        <section>
          <h2 style={{ color: "white" }}>Face Up Cards</h2>
          <FaceUpCards />
        </section>

        <section>
          <h2 style={{ color: "white" }}>Your Hand</h2>
          <TrainHand />
        </section>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <Button>
            Draw Card
          </Button>

          <Button variant="secondary">
            View Tickets
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

export default GamePage;
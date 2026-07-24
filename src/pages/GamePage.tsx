import { useState } from "react";
import FaceUpCards from "../components/game/FaceUpCards/FaceUpCards";
import TrainHand from "../components/game/TrainHand/TrainHand";
import Button from "../components/common/Button";
import PageLayout from "../components/layout/PageLayout";
import { gameState } from "../data/gameState";
import type { GameState } from "../core/models/GameState";
import { createDeck } from "../core/deck/createDeck";

function GamePage() {
  const [game] = useState<GameState>(gameState);



const deck = createDeck();

console.log(deck.length);

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

          <FaceUpCards cards={game.faceUpCards} />
        </section>

        <section>
          <h2 style={{ color: "white" }}>Your Hand</h2>

         <TrainHand cards={game.hand} />
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
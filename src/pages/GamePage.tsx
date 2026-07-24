import { useState } from "react";

import FaceUpCards from "../components/game/FaceUpCards/FaceUpCards";
import TrainHand from "../components/game/TrainHand/TrainHand";
import Button from "../components/common/Button";
import PageLayout from "../components/layout/PageLayout";

import type { GameState } from "../core/models/GameState";

import { createGame } from "../core/game/createGame";
import { drawBlindCard } from "../core/deck/drawBlindCard";

function GamePage() {
  const [game, setGame] = useState<GameState>(() =>
    createGame("AB12CD")
  );

  function handleDrawCard() {
    setGame((currentGame) => drawBlindCard(currentGame));
  }

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
        <h1
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          🚂 Ticket Companion
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Cards Remaining: {game.deck.length}
        </p>

        <section>
          <h2 style={{ color: "white" }}>
            Face Up Cards
          </h2>

          <FaceUpCards cards={game.faceUpCards} />
        </section>

        <section>
          <h2 style={{ color: "white" }}>
            Your Hand
          </h2>

          <TrainHand cards={game.hand} />
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Button onClick={handleDrawCard}>
            Draw Blind Card
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
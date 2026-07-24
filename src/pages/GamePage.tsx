import { useState } from "react";

import PageLayout from "../components/layout/PageLayout";
import FaceUpCards from "../components/game/FaceUpCards/FaceUpCards";
import TrainHand from "../components/game/TrainHand/TrainHand";
import Button from "../components/common/Button";

import {
  createGame,
  drawBlindCard,
  drawFaceUpCard,
  endTurn,
} from "../core";

import type { GameState } from "../core";

function GamePage() {
  const [game, setGame] = useState<GameState>(() =>
    createGame("AB12CD")
  );

  function handleDrawBlindCard() {
    setGame((currentGame) => drawBlindCard(currentGame));
  }

  function handleFaceUpCardClick(cardIndex: number) {
    setGame((currentGame) =>
      drawFaceUpCard(currentGame, cardIndex)
    );
  }

  function handleEndTurn() {
    setGame((currentGame) => endTurn(currentGame));
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

        <div
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <p>
            Cards Remaining: {game.deck.length}
          </p>

          <p>
            Train Cards Drawn: {game.cardsDrawnThisTurn} / 2
          </p>

          {!game.canDrawTrainCards && (
            <p
              style={{
                color: "#facc15",
                fontWeight: "bold",
              }}
            >
              Turn complete.
            </p>
          )}
        </div>

        <section>
          <h2 style={{ color: "white" }}>
            Face Up Cards
          </h2>

          <FaceUpCards
            cards={game.faceUpCards}
            onCardClick={handleFaceUpCardClick}
          />
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
          <Button onClick={handleDrawBlindCard}>
            Draw Blind Card
          </Button>

          <Button onClick={handleEndTurn}>
            End Turn
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
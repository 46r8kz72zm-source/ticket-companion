import type { GameState } from "../models/GameState";

export function drawFaceUpCard(
  game: GameState,
  cardIndex: number
): GameState {
  if (!game.canDrawTrainCards) {
    return game;
  }

  if (
    cardIndex < 0 ||
    cardIndex >= game.faceUpCards.length ||
    game.deck.length === 0
  ) {
    return game;
  }

  const selectedCard = game.faceUpCards[cardIndex];
  const replacementCard = game.deck[0];

  const faceUpCards = [...game.faceUpCards];
  faceUpCards[cardIndex] = replacementCard;

  let cardsDrawnThisTurn = game.cardsDrawnThisTurn + 1;

  // Official Ticket to Ride rule:
  // If your FIRST draw is a face-up locomotive,
  // your turn immediately ends.
  if (
    selectedCard.color === "locomotive" &&
    game.cardsDrawnThisTurn === 0
  ) {
    cardsDrawnThisTurn = 2;
  }

  return {
    ...game,

    hand: [...game.hand, selectedCard],

    faceUpCards,

    deck: game.deck.slice(1),

    cardsDrawnThisTurn,

    canDrawTrainCards: cardsDrawnThisTurn < 2,
  };
}
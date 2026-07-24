import type { GameState } from "../models/GameState";

export function drawBlindCard(game: GameState): GameState {
  if (!game.canDrawTrainCards) {
    return game;
  }

  if (game.deck.length === 0) {
    return game;
  }

  const card = game.deck[0];
  const cardsDrawnThisTurn = game.cardsDrawnThisTurn + 1;

  return {
    ...game,

    deck: game.deck.slice(1),

    hand: [...game.hand, card],

    cardsDrawnThisTurn,

    canDrawTrainCards: cardsDrawnThisTurn < 2,
  };
}
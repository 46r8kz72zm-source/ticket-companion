import type { GameState } from "../models/GameState";

export function endTurn(game: GameState): GameState {
  return {
    ...game,

    cardsDrawnThisTurn: 0,

    canDrawTrainCards: true,
  };
}
import type { GameState } from "../models/GameState";

export function canEndTurn(
  game: GameState
): boolean {
  return game.cardsDrawnThisTurn > 0;
}
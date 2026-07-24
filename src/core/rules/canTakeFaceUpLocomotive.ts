import type { GameState } from "../models/GameState";

export function canTakeFaceUpLocomotive(
  game: GameState
): boolean {
  return game.cardsDrawnThisTurn === 0;
}
import type { GameState } from "../models/GameState";

export function canDrawTrainCard(game: GameState): boolean {
  return game.canDrawTrainCards;
}
import type { TrainCard } from "./TrainCard";

export interface GameState {
  roomCode: string;

  faceUpCards: TrainCard[];

  hand: TrainCard[];
}
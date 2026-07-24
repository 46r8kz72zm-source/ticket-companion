import type { TrainCard } from "./TrainCard";

export interface GameState {
  roomCode: string;

  deck: TrainCard[];

  faceUpCards: TrainCard[];

  hand: TrainCard[];
}
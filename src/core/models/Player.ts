import type { TrainCard } from "./TrainCard";

export interface Player {
  id: string;
  name: string;

  hand: TrainCard[];

  destinationTickets: string[];

  trainsRemaining: number;
}
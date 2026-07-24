export type TrainCardColor =
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "black"
  | "white"
  | "orange"
  | "pink"
  | "locomotive";

export interface TrainCard {
  id: string;
  color: TrainCardColor;
}
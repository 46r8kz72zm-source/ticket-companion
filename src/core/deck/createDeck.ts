import type { TrainCard, TrainCardColor } from "../models/TrainCard";

const NORMAL_CARD_COUNT = 12;
const LOCOMOTIVE_COUNT = 14;

const COLORS: TrainCardColor[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "white",
  "orange",
  "pink",
];

export function createDeck(): TrainCard[] {
  const deck: TrainCard[] = [];

  let id = 1;

  for (const color of COLORS) {
    for (let i = 0; i < NORMAL_CARD_COUNT; i++) {
      deck.push({
        id: String(id++),
        color,
      });
    }
  }

  for (let i = 0; i < LOCOMOTIVE_COUNT; i++) {
    deck.push({
      id: String(id++),
      color: "locomotive",
    });
  }

  return deck;
}
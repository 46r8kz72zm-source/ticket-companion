import type { GameState } from "../models/GameState";

import { createDeck } from "../deck/createDeck";
import { shuffleDeck } from "../deck/shuffleDeck";

export function createGame(roomCode: string): GameState {
  const shuffledDeck = shuffleDeck(createDeck());

  const faceUpCards = shuffledDeck.slice(0, 5);
  const deck = shuffledDeck.slice(5);

  return {
    roomCode,

    deck,

    faceUpCards,

    hand: [],

    cardsDrawnThisTurn: 0,

    canDrawTrainCards: true,
  };
}
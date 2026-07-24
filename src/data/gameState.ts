import type { GameState } from "../core/models/GameState";

export const gameState: GameState = {
  roomCode: "AB12CD",

  faceUpCards: [
    { id: "1", color: "red" },
    { id: "2", color: "blue" },
    { id: "3", color: "green" },
    { id: "4", color: "yellow" },
    { id: "5", color: "locomotive" },
  ],

  hand: [
    { id: "6", color: "red" },
    { id: "7", color: "red" },
    { id: "8", color: "black" },
    { id: "9", color: "green" },
    { id: "10", color: "locomotive" },
    { id: "11", color: "orange" },
  ],
};
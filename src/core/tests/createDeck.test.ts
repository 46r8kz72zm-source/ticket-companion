import { describe, expect, it } from "vitest";

import { createDeck } from "../deck/createDeck";

describe("createDeck", () => {
  it("creates exactly 110 cards", () => {
    const deck = createDeck();

    expect(deck).toHaveLength(110);
  });

  it("creates 14 locomotives", () => {
    const deck = createDeck();

    const locomotives = deck.filter(
      (card) => card.color === "locomotive"
    );

    expect(locomotives).toHaveLength(14);
  });

  it("creates 12 red cards", () => {
    const deck = createDeck();

    const redCards = deck.filter(
      (card) => card.color === "red"
    );

    expect(redCards).toHaveLength(12);
  });

  it("creates 12 blue cards", () => {
    const deck = createDeck();

    const blueCards = deck.filter(
      (card) => card.color === "blue"
    );

    expect(blueCards).toHaveLength(12);
  });
});
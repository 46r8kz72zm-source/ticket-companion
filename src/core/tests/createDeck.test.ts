import { describe, expect, it } from "vitest";

import { createDeck } from "../deck/createDeck";

describe("createDeck", () => {
  it("creates exactly 110 cards", () => {
    const deck = createDeck();

    expect(deck).toHaveLength(110);
  });
});
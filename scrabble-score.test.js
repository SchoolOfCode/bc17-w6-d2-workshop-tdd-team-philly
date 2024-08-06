import { calculateScrabbleScore } from "./scrabble-score";

test("Testing points are correctly assigned", () => {
    expect(calculateScrabbleScore("A")).toBe(1)
});
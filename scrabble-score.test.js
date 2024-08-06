import { calculateScrabbleScore } from "./scrabble-score.js";

import {test, expect} from "vitest"

test("Testing points are correctly assigned", () => {
    expect(calculateScrabbleScore("A")).toBe(1)
});

test("Testing that Q = 10", () =>{
    expect(calculateScrabbleScore("Q")).toBe(10)
}
)


test("Testing that cat = 5 points", () => {
    expect(calculateScrabbleScore())
})
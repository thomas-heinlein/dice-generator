import isParsableCharacter from "../CharacterParsableChecker";
import DefaultDnDCharacter from "../templates/DefaultDnDCharacter";
import DefaultMinimalCharacter from "../templates/DefaultMinimalCharacter";

it("returns false for empty object", () => {
  expect(isParsableCharacter({})).toBe(false);
});

it("returns true for empty array", () => {
  expect(isParsableCharacter([])).toBe(true);
});

it("returns true for default dnd character", () => {
  expect(isParsableCharacter(DefaultDnDCharacter)).toBe(true);
});

it("returns true for minimal character", () => {
  expect(isParsableCharacter(DefaultMinimalCharacter)).toBe(true);
});

it("returns false for misspelled title", () => {
  expect(
    isParsableCharacter([
      {
        ttle: "General",
        items: [
          {
            description: "Hit Points",
            value: 0,
          },
        ],
      },
    ]),
  ).toBe(false);
});

it("returns false for misspelled items", () => {
  expect(
    isParsableCharacter([
      {
        title: "General",
        itms: [
          {
            description: "Hit Points",
            value: 0,
          },
        ],
      },
    ]),
  ).toBe(false);
});

it("returns false for misspelled value", () => {
  expect(
    isParsableCharacter([
      {
        title: "General",
        items: [
          {
            description: "Hit Points",
            vale: 0,
          },
        ],
      },
    ]),
  ).toBe(false);
});

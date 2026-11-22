// CLASS 8: Import every playable chapter in one place.
// Adding Chapter 4 means creating chapter4.js and adding one import and one array entry here.
import chapter1 from "./chapter1";
import chapter2 from "./chapter2";
import chapter3 from "./chapter3";

// The array index is the chapter index: 0 = Chapter 1, 1 = Chapter 2, and so on.
export const gameChapters = [chapter1, chapter2, chapter3];

// CLASS 8: The city starts every new game with these meter values.
export const initialMeters = [
  { name: "Environment", value: 62 },
  { name: "Economy", value: 55 },
  { name: "Heritage", value: 58 },
  { name: "Public", value: 48 },
];

export default gameChapters;

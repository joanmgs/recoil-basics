import { atom } from "recoil";

export const numberOfClicks = atom({
  key: "numberOfClicks",
  default: 0,
});

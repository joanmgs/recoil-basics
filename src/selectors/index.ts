import { selector } from "recoil";
import { numberOfClicks } from "../atoms";

export const clicksOperated = selector({
  key: "ClicksOperated",
  get: ({ get }) => {
    const clicks = get(numberOfClicks);
    const duplicated = clicks * 2;
    const sumByTwo = clicks + 2;

    return {
      duplicated,
      sumByTwo,
    };
  },
});

export const randomName = selector({
  key: "randomName",
  get: async () => {
    const rawResponse = await fetch(`https://randomuser.me/api/`);
    const response = await rawResponse.json();

    if (response.error) {
      throw response.error;
    }

    const {
      name: { first, last },
    } = response.results[0];

    return `${first} ${last}`;
  },
});

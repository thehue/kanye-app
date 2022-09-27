import { Data } from "../features/kanye/kanyeSlice";

const getKanyeQuote = (): Promise<Data> => {
  const url = "https://api.kanye.rest/kanye/kanyeQuote";
  return fetch(url)
    .then((result) => result.json())
    .catch((error: Error) => {
      throw error;
    });
};

export { getKanyeQuote };

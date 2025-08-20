import { useState } from "react";
import type { Gif } from "../interface/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClick = async (term: string) => {
    const gifs = await getGifsByQuery(term);

    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 4));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };
  return {
    // Properties
    gifs,
    previousTerms,

    // methods / actions
    handleTermClick,
    handleSearch,
  };
};

export default useGifs;

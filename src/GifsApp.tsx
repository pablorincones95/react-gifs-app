import { useState } from "react";
import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interface/gif.interface";

export default function GifsApp() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClick = (term: string) => {
    console.log("Term clicked:", term);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 4));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search bar */}
      <SearchBar placeHolder="Buscar Gifs" onQuery={handleSearch} />

      {/* Trending searches */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClick}
      />

      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
}

import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import useGifs from "./gifs/hook/useGifs";

export default function GifsApp() {
  const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();

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

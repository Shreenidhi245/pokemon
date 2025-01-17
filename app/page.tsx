"use client";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import SearchForm from "@/components/SearchForm";
import { useGlobalContext } from "@/context/globalContext";
import { useState, useEffect } from "react";

export default function Home() {
  const { pokemonListDetails, loading, fetchPokemonData } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [paginatedPokemon, setPaginatedPokemon] = useState([]);

  useEffect(() => {
    // Fetch Pokémon data for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSet = pokemonListDetails.slice(startIndex, endIndex);
    setPaginatedPokemon(currentSet);
  }, [currentPage, pokemonListDetails]);

  const handleNext = () => {
    if (currentPage * itemsPerPage < pokemonListDetails.length) {
      setCurrentPage((prev) => prev + 1);
    } else {
      // Load more Pokémon data from the API
      fetchPokemonData();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main>
      <Header />

      <section className="mt-10 flex items-center justify-center">
        <SearchForm />
      </section>

      <section>
        <Filters />
      </section>

      <section className="min-h-[91vh]">
        <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!loading &&
            paginatedPokemon.map((pokemon: any, index: number) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </div>
      </section>

      <div className="mt-4 mb-10 flex items-center justify-between px-10">
        <button
          onClick={handlePrevious}
          className="py-2 px-6 bg-gray-300 rounded-full shadow-md font-medium
          hover:bg-green-400 text-gray-700 transition-all duration-300 ease-in-out disabled:opacity-50"
          disabled={currentPage === 1 || loading}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-6 bg-gray-300 rounded-full shadow-md font-medium
          hover:bg-green-400 text-gray-700 transition-all duration-300 ease-in-out disabled:opacity-50"
          disabled={loading}
        >
          Next
        </button>
      </div>
    </main>
  );
}

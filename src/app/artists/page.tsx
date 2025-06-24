"use client";
import { useEffect, useState } from "react";
import ArtistCard, { Artist } from "../../components/artist/ArtistCard";
import Filter, {
  FilterOptions,
  FilterValues,
} from "../../components/home/Filter";

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filters, setFilters] = useState<FilterValues>({
    category: "",
    location: "",
    priceRange: "",
  });

  // Load artist data from static JSON
  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then(setArtists);
  }, []);

  // Extract unique filter options from data
  const filterOptions: FilterOptions = {
    categories: Array.from(new Set(artists.map((a) => a.category))).sort(),
    locations: Array.from(new Set(artists.map((a) => a.location))).sort(),
    priceRanges: Array.from(new Set(artists.map((a) => a.priceRange))).sort(),
  };

  // Filter logic
  const filtered = artists.filter(
    (a) =>
      (!filters.category || a.category === filters.category) &&
      (!filters.location || a.location === filters.location) &&
      (!filters.priceRange || a.priceRange === filters.priceRange)
  );

  return (
    <main className="px-4 md:px-12 py-5 md:py-12 min-h-screen bg-white dark:bg-[#231942] text-[#231942] dark:text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Artists</h1>
      <Filter options={filterOptions} values={filters} onChange={setFilters} />
      {filtered.length === 0 ? (
        <div className="text-gray-500 dark:text-gray-400 text-center mt-20 text-2xl">
          No artists found for selected filters!
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
    </main>
  );
}

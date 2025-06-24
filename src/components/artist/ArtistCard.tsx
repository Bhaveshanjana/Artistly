import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
  bio: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="flex flex-col h-full bg-white dark:bg-[#3b2f63] border-gray-200 dark:border-gray-700">
      <div className="relative w-auto h-44 mx-2">
        <Image
          src={artist.image}
          alt={artist.location}
          height={200}
          width={200}
          className="object-cover h-56 w-full rounded-sm "
        />
      </div>
      <CardContent className="flex flex-col flex-1 p-4 mt-4">
        <h3 className="text-lg font-semibold mb-1 text-[#231942] dark:text-white">
          {artist.name}
        </h3>
        <div className="text-xs text-purple-600 font-medium mb-1">
          {artist.category}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {artist.location}
        </div>
        <div className="text-sm text-[#231942] dark:text-white mb-2 font-semibold">
          {artist.priceRange}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {artist.bio}
        </p>
        <Button
          size="sm"
          className="mt-auto bg-purple-600 hover:bg-purple-700 text-white cursor-pointer transition-colors duration-300"
        >
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  );
}

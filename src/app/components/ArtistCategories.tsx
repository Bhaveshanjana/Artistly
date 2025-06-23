import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Disc3,
  Mic,
  PersonStanding,
  Presentation,
} from "lucide-react";

const ArtistCategories = () => {
  const artistCategories = [
    {
      name: "Singers & Musicians",
      icon: (
        <Mic className="h-12 w-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
      ),
      image:
        "https://images.unsplash.com/photo-1595422656857-ced3a4a0ce25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2VyfGVufDB8fDB8fHww",
      description:
        "From solo vocalists to full bands, find the perfect sound for your event.",
    },
    {
      name: "Dancers & Performers",
      icon: (
        <PersonStanding className="h-12 w-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
      ),
      image:
        "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhbmNlfGVufDB8fDB8fHww",
      description:
        "Captivating dancers and performance artists to energize any occasion.",
    },
    {
      name: "Speakers & Hosts",
      icon: (
        <Presentation className="h-12 w-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
      ),
      image:
        "https://images.unsplash.com/photo-1668606143662-610cd0ae4345?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Engaging keynote speakers, emcees, and hosts for conferences and corporate events.",
    },
    {
      name: "DJs & Entertainers",
      icon: (
        <Disc3 className="h-12 w-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
      ),
      image:
        "https://plus.unsplash.com/premium_photo-1708589336786-a880e7ff6861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGpzfGVufDB8fDB8fHww",
      description:
        "Professional DJs and entertainers to set the mood and get the party started.",
    },
  ];
  return (
    <div>
      <section id="categories" className="w-full py-16 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Diverse Talent Categories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find the perfect match for any event or occasion.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artistCategories.map((category) => (
              <Card
                key={category.name}
                className="group relative overflow-hidden rounded-lg shadow-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#4641596e] hover:border-purple-500 transition-all duration-300"
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="mx-3 h-48 object-cover rounded-sm transition-transform duration-300 group-hover:scale-105"
                />
                <CardContent className="p-6 text-center">
                  {category.icon}
                  <h3 className="mt-4 text-xl font-semibold text-[#231942] dark:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA to Explore Artists */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Ready to Discover More?
            </h3>
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 text-lg"
            >
              <Link href={"/artist"}>
                Browse All Artists <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistCategories;

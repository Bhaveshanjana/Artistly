"use client";

import { BadgeCheck, CalendarCheck, SearchCheck, Users } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      icon: <SearchCheck className="h-10 w-10 text-purple-500" />,
      title: "Effortless Discovery",
      description:
        "Quickly find the perfect artists for your events with advanced search and filtering options.",
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-purple-500" />,
      title: "Seamless Booking",
      description:
        "Streamline your booking process with integrated communication tools and secure agreements.",
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-purple-500" />,
      title: "Verified Professionals",
      description:
        "Connect with trusted event planners and verified artists, ensuring quality and reliability.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Expand Your Network",
      description:
        "Grow your connections within the event and entertainment industry.",
    },
  ];
  return (
    <div>
      <section id="features" className="w-full py-16 md:py-10 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Artistly?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the advantages of connecting through our dedicated
              platform.
            </p>
          </div>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 "
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className=" border-gray-200 dark:border-gray-700 hover:shadow-xl shadow-gray-300 shadow-lg hover:scale-105 hover:shadow-purple-500/40  text-center bg-white dark:bg-[#4641596e] dark:shadow-lg dark:shadow-fuchsia-900/50 dark:hover:shadow-2xl transition-all duration-500"
              >
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="mt-4 text-xl font-semibold text-[#231942] dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Feature;

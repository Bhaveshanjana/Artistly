"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <div>
      <section
        id="join"
        className="w-full py-6 md:py-16 bg-gradient-to-t from-background via-card to-purple-900/30"
      >
        {/* Spring Motion */}
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.3,
          }}
          className="container mx-auto px-4 md:px-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Join the Artistly Community
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            Whether you&apos;re an event planner seeking unique talent or an
            artist manager ready to shine, Artistly is your stage.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-xl"
            >
              <Link href="#">Sign Up for Free</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Connect, collaborate, and create unforgettable events.
          </p>
        </motion.div>
      </section>
      {/* Spring Motion */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          delay: 0.3,
        }}
        className="mt-16 md:my-2 text-center"
      >
        <h3 className="text-2xl font-semibold mb-6 text-[#231942] dark:text-white">
          Ready to Discover More?
        </h3>
        <Button
          asChild
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 text-lg mb-7"
        >
          <Link href="#">
            Browse All Artists <ArrowRight className="ml-2 h-5 w-5 " />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Cta;

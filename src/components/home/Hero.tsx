"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "motion/react";

const Hero = () => {

  // Custome Motion
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: delay * 0.2,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div>
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-white dark:from-[#231942] via-white dark:via-[#3b2f63] to-purple-900/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          {/* motion */}
          <motion.div
            initial="initial"
            animate="animate"
            custom={2}
            variants={fadeIn}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl  text-[#231942] dark:text-white">
              <span className="block">Connect. Create. Captivate.</span>
              <span className="block text-purple-500 mt-2">
                Your Event Talent, Simplified.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 md:text-xl">
              Artistly is the premier platform where event planners discover
              exceptional artists, and artist managers showcase their talent to
              the world.
            </p>
          </motion.div>

          {/* Motion */}
          <motion.div
            custom={5}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-60 mx-auto"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="shadow-md shadow-black/70 dark:shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300  hover:text-gray-200 text-gray-50 bg-purple-700 px-8 py-3 text-lg border-none"
            >
              <Link href="#categories">Find Talent</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-md shadow-blue-300 dark:shadow-lg dark:shadow-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300  hover:text-purple-400 text-gray-50 bg-gray-800 px-8 py-3 text-lg border-none"
            >
              <Link href="/artists">
                Showcase Artists <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

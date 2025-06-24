"use client";

import { Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-4 bg-white dark:bg-[#4641596e] border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="block md:hidden">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-7 w-7 text-purple-500" />
              <span className="text-xl font-bold text-[#231942] dark:text-white">
                TalentLink
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connecting talent with opportunity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Link href="#" className="flex items-center gap-2 mb-4">
                <Sparkles className="h-7 w-7 text-purple-500" />
                <span className="text-xl md:text-3xl font-bold text-[#231942] dark:text-white">
                  Artistly
                </span>
              </Link>
              <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
                Connecting Artistly with opportunity.
              </p>
            </motion.div>

            {/* Platform */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-4 text-[#231942] dark:text-white">
                Platform
              </h3>
              <ul className="space-y-2 text-sm ">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600  transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#categories"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    Artist Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-4 text-[#231942] dark:text-white">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Icons and rights sections */}
          <div className="mt-7 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-3">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Artistly. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-purple-600 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface FilterOptions {
  categories: string[];
  locations: string[];
  priceRanges: string[];
}

export interface FilterValues {
  category: string;
  location: string;
  priceRange: string;
}

export default function Filter({
  options,
  values,
  onChange,
}: {
  options: FilterOptions;
  values: FilterValues;
  onChange: (values: FilterValues) => void;
}) {
  // Helper to render dropdown
  const renderDropdown = (
    label: string,
    items: string[],
    value: string,
    key: keyof FilterValues
  ) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[140px] justify-between cursor-pointer border border-gray-700"
        >
          {value || label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-48 border-none shadow-2xl bg-white/80 dark:bg-gray-600"
      >
        <div className="flex flex-col">
          <button
            className={`text-center px-3 py-2 ${
              !value ? "font-bold text-purple-600 dark:text-purple-400" : ""
            }`}
            onClick={() => onChange({ ...values, [key]: "" })}
          >
            All {label}
          </button>
          {items.map((item) => (
            <button
              key={item}
              className={`text-left px-3 py-2 hover:bg-purple-100 dark:hover:bg-purple-900 rounded cursor-pointer ${
                value === item
                  ? "font-bold text-purple-600 dark:text-purple-400"
                  : ""
              }`}
              onClick={() => onChange({ ...values, [key]: item })}
            >
              {item}
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="grid grid-cols-2 md:flex gap-4 mb-6 ">
      {renderDropdown(
        "Category",
        options.categories,
        values.category,
        "category"
      )}
      {renderDropdown(
        "Location",
        options.locations,
        values.location,
        "location"
      )}
      {renderDropdown(
        "Price Range",
        options.priceRanges,
        values.priceRange,
        "priceRange"
      )}
    </div>
  );
}

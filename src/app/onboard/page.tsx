"use client";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";

const categories = [
  "Singers & Musicians",
  "Dancers & Performers",
  "Speakers & Hosts",
  "DJs & Entertainers",
];
const languages = [
  "English",
  "Spanish",
  "Hindi",
  "French",
  "German",
  "Mandarin",
];
const feeRanges = [
  "$400 - $1200",
  "$500 - $1500",
  "$700 - $1800",
  "$800 - $2000",
  "$900 - $2500",
  "$1000 - $2500",
  "$1500 - $4000",
];

interface OnboardingFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Bio must be at least 10 characters"),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, "Select at least one category")
    .required("Category is required"),
  languages: yup
    .array()
    .of(yup.string().required())
    .min(1, "Select at least one language")
    .required("Languages are required"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function OnboardPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
    },
  });

  const onSubmit = (data: OnboardingFormData) => {
    console.log("Onboarding form submitted:", data);
    router.push("/");
  };

  return (
    <main className="py-12 bg-white dark:bg-[#231942] text-[#231942] dark:text-gray-300">
      <h1 className="text-3xl font-bold mb-6 max-w-[345px] md:max-w-2xl mx-auto">
        Artist Onboarding
      </h1>
      <Card className="bg-gray-50 dark:bg-[#4641596e] border-gray-200 dark:border-gray-700 max-w-2xl mx-4 md:mx-auto shadow-xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1" htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                {...register("name")}
                className="border-gray-500"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block font-medium mb-1" htmlFor="bio">
                Bio<span className="text-red-500">*</span>
              </label>
              <Textarea
                id="bio"
                rows={3}
                {...register("bio")}
                className="border-gray-500"
              />
              {errors.bio && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.bio.message as string}
                </p>
              )}
            </div>

            {/* Category Multi-select Section*/}
            <div>
              <label className="block font-medium mb-1">
                Category<span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full flex justify-between border-gray-500"
                      >
                        {field.value.length > 0
                          ? field.value.join(", ")
                          : "Select categories"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 border-gray-400 dark:bg-cyan-600 bg-gray-100 "
                    >
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          className="flex items-center w-full px-3 py-2 hover:bg-purple-300 dark:hover:bg-purple-900 rounded cursor-pointer"
                          onClick={() => {
                            if (field.value.includes(cat)) {
                              field.onChange(
                                field.value.filter((c: string) => c !== cat)
                              );
                            } else {
                              field.onChange([...field.value, cat]);
                            }
                          }}
                        >
                          <span className="mr-2">
                            {field.value.includes(cat) ? (
                              <Check className="h-4 w-4 text-purple-600" />
                            ) : (
                              <span className="inline-block w-4" />
                            )}
                          </span>
                          {cat}
                        </button>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              />
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.category.message as string}
                </p>
              )}
            </div>

            {/* Languages Multi-select Section */}
            <div>
              <label className="block font-medium mb-1">
                Languages Spoken<span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="languages"
                render={({ field }) => (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full flex justify-between"
                      >
                        {field.value.length > 0
                          ? field.value.join(", ")
                          : "Select languages"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 border-gray-400 dark:bg-cyan-600 bg-gray-100"
                    >
                      {languages.map((lang) => (
                        <button
                          type="button"
                          key={lang}
                          className="flex items-center w-full px-3 py-2 hover:bg-purple-300 dark:hover:bg-purple-900 rounded cursor-pointer"
                          onClick={() => {
                            if (field.value.includes(lang)) {
                              field.onChange(
                                field.value.filter((l: string) => l !== lang)
                              );
                            } else {
                              field.onChange([...field.value, lang]);
                            }
                          }}
                        >
                          <span className="mr-2">
                            {field.value.includes(lang) ? (
                              <Check className="h-4 w-4 text-purple-600" />
                            ) : (
                              <span className="inline-block w-4" />
                            )}
                          </span>
                          {lang}
                        </button>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              />
              {errors.languages && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.languages.message as string}
                </p>
              )}
            </div>

            {/* Fee Range Dropdown Section*/}
            <div>
              <label className="block font-medium mb-1">
                Fee Range<span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="feeRange"
                render={({ field }) => (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full flex justify-between"
                      >
                        {field.value || "Select fee range"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 border-gray-400 dark:bg-cyan-600 bg-gray-100"
                    >
                      {feeRanges.map((fee) => (
                        <button
                          type="button"
                          key={fee}
                          className="w-full text-left px-3 py-2 hover:bg-purple-300 dark:hover:bg-purple-900 rounded cursor-pointer"
                          onClick={() => field.onChange(fee)}
                        >
                          {fee}
                        </button>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              />
              {errors.feeRange && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.feeRange.message as string}
                </p>
              )}
            </div>

            {/* Location Section */}
            <div>
              <label className="block font-medium mb-1" htmlFor="location">
                Location<span className="text-red-500">*</span>
              </label>
              <Input id="location" {...register("location")} className="" />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg transition-colors duration-200 cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

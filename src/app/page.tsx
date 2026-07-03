"use client";

import { FilterBar } from "@/components/organisms/FilterBar";
import { HeaderBar } from "@/components/organisms/HeaderBar";
import { HeroSection } from "@/components/template/HeroSection";
import { ProductList } from "@/components/template/ProductList";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeaderBar searchValue={search} onSearchChange={setSearch} />
      <HeroSection />
      <FilterBar />
      <ProductList searchValue={search} filteredCategory={filteredCategory} />
    </div>
  );
}

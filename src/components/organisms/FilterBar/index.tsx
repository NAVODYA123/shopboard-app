import { CategoryFilter } from "@/components/molecules/CategoryFilter";
import { getProductCategories } from "@/services/productService";
import { Category } from "@/types/categoryType";
import { Box, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";

export const FilterBar = () => {
  const [category, setCategory] = useState<Category | null>(null);

  const fetcher = () => getProductCategories();

  const { data, error, isLoading } = useSWR<Category[]>(
    "product-categories",
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const selectedSlug = event.target.value as string;
    const selectedCategory =
      data?.find((cat) => cat.slug === selectedSlug) || null;
    setCategory(selectedCategory);
  };

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",
        alignItems: "center",
        padding: "0px 24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box>
        <CategoryFilter
          categories={data as Category[]}
          handleChange={handleCategoryChange}
          category={category as Category}
        />
      </Box>
    </Box>
  );
};

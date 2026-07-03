import { CategoryFilter } from "@/components/molecules/CategoryFilter";
import { getProductCategories } from "@/services/productService";
import { Category } from "@/types/categoryType";
import { Box, Divider, SelectChangeEvent, Typography } from "@mui/material";
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
        justifyContent: "center",
        height: "97px",
        alignItems: "center",
        padding: "0px 24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: "542.21px",
          height: "57.33px",
          borderTop: "0.67px solid #E4E4E7CC",
          borderRadius: "9999px",
          opacity: 1,

          boxShadow:
            "0px 8px 10px -6px #0000000D, 0px 20px 25px -5px #0000000D",

          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <CategoryFilter
          categories={data as Category[]}
          handleChange={handleCategoryChange}
          category={category as Category}
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <CategoryFilter
          categories={data as Category[]}
          handleChange={handleCategoryChange}
          category={category as Category}
        />
      </Box>
    </Box>
  );
};

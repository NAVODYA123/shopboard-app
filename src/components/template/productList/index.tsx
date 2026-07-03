"use client";

import { getProductList } from "@/services/productService";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { ProductCard } from "../ProductCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { PaginationBar } from "@/components/molecules/Pagination";

type ProductKey = ["products", number, number];

type ProductsListProps = {
  searchValue: string;
};

export const ProductList = ({ searchValue = "" }: ProductsListProps) => {
  const fetcher = ([_, limit, skip]: ProductKey) => getProductList(limit, skip);

  const [page, setPage] = useState(1);

  const limit = 20;
  const skip = (page - 1) * limit;

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const { data, error, isLoading } = useSWR<ProductsResponse>(
    ["products", limit, skip],
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  const keyword = searchValue?.toLowerCase() ?? "";

  const filteredData = data?.products?.filter((prod) => {
    if (!keyword) return true;

    const brand = prod.brand?.toLowerCase() ?? "";
    const title = prod.title?.toLowerCase() ?? "";

    return title.includes(keyword) || brand.includes(keyword);
  });

  if (error) return <div>Error loading products</div>;
  if (isLoading) return <LoadingSpinner />;
  return (
    <Box>
      <Grid container spacing={2}>
        {filteredData?.map((product, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
      <PaginationBar page={page} handleChange={handlePaginationChange} />
    </Box>
  );
};

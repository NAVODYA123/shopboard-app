"use client";

import { getProductList } from "@/services/productService";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { ProductCard } from "../productCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

type ProductKey = ["products", number, number];

export const ProductList = () => {
  //   const [productList, setProductList] = useState<Products | undefined>(
  //     undefined,
  //   );

  const fetcher = ([_, limit, skip]: ProductKey) => getProductList(limit, skip);

  const [page, setPage] = useState(1);

  const limit = 20;
  const skip = (page - 1) * limit;

  //   useEffect(() => {
  //     const productListFetched = async ) => {
  //       const res: Products = await getProductList();
  //       setProductList(res);
  //       console.log("Product List Fetched:", res);
  //       //   return res;
  //     };
  //     productListFetched();
  //   }, [productList]);

  const { data, error, isLoading } = useSWR<ProductsResponse>(
    ["products", limit, skip],
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  console.log("Product List Data:", data);
  //   setProductList(data);

  if (error) return <div>Error loading products</div>;
  if (isLoading) return <div>Loading products...</div>;
  return (
    <Box>
      <h2>Product List</h2>
      <Grid container spacing={2}>
        {data?.products?.map((product, index) => (
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
    </Box>
  );
};

import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { Review } from "@/components/molecules/Reveiw";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];
  brand: string;
  reviews: reviews[];
  sku: string;
};
export const ProductCard = ({
  id,
  title,
  name,
  description,
  category,
  price,
  discountPercentage,
  rating,
  stock,
  images,
  brand,
  reviews,
  sku,
}: ProductCardProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          border: "1px solid #ccc",
          padding: "16px",
          backgroundColor: "#F4F4F54D",
          width: "100%",
        }}
      >
        <Image src={images?.[0]} alt={title} width={200} height={200} />
        <Typography
          sx={{ color: "#0A0A0A", fontWeight: "700", fontSize: "16px" }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Review rating={rating} />
          <Typography
            sx={{ color: "#71717A", fontWeight: "600", fontSize: "10" }}
          >
            {reviews.length}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            textTransform: "capitalize",
          }}
        >
          <Typography
            sx={{
              color: "#4F46E5CC",
              fontWeight: "800",
              fontSize: "10",
              fontFamily: "var(--font-jakarta)",
            }}
          >
            {category}
          </Typography>

          <Typography
            sx={{
              color: "#71717A",
              fontWeight: "600",
              fontSize: "10 !important",
              fontFamily: "var(--font-jakarta)",
            }}
          >
            {brand}
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#0A0A0A", fontWeight: "800", fontSize: "20px" }}
        >
          ${price.toFixed(2)}
        </Typography>
        <Box>
          <AddToCartButton />
        </Box>
      </Box>
    </Box>
  );
};

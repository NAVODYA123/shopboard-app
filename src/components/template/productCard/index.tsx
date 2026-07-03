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
  image: string;
  brand: string;
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
  image,
  brand,
}: ProductCardProps) => {
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          padding: "16px",
          //   borderRadius: "8px",
          backgroundColor: "#F4F4F54D",
        }}
      >
        <Image src={image} alt={title} width={200} height={200} />
        <Typography
          sx={{ color: "#0A0A0A", fontWeight: "700", fontSize: "16px" }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "#71717A", fontWeight: "600", fontSize: "10" }}
          variant="body1"
        >
          {brand}
        </Typography>
        <Typography
          sx={{ color: "#4F46E5CC", fontWeight: "800", fontSize: "10" }}
          variant="body2"
        >
          {" "}
          {category}
        </Typography>
        <Typography
          sx={{ color: "#0A0A0A", fontWeight: "800", fontSize: "20px" }}
          variant="body2"
        >
          ${price.toFixed(2)}
        </Typography>

        <></>
      </Box>
    </Box>
  );
};

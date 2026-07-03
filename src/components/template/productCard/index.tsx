import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import StockChip from "@/components/atoms/StockChip";
import { Review } from "@/components/molecules/Reveiw";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Reviews } from "@/types/productListType";

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
  reviews: Reviews[];
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
    <Box sx={{ width: "100%", minWidth: "332px", minHeight: "532px" }}>
      <Box
        sx={{
          border: "0.67px solid #E4E4E780",
          padding: "16px",
          backgroundColor: "#F4F4F54D",
          width: "100%",
          borderRadius: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StockChip
            label={`sale -${discountPercentage.toFixed(0)} %`}
            sx={{
              width: 100,
              height: 23,
              backgroundColor: "#4F46E5E5",
              border: "1px solid #4F46E5E5",
              borderRadius: "9999px",
              boxShadow: "0px 1px 3px 0px #0000001A",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: 800,
              fontStyle: "Plus Jakarta Sans",
              color: "#FFFFFF",
              "& .MuiChip-label": {
                padding: 0,
              },
              textTransform: "uppercase",
            }}
          />
          <Box>
            <Image
              src={"assets/FavIcon.svg"}
              alt={title}
              width={32}
              height={32}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={images?.[0]} alt={title} width={200} height={200} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            textTransform: "capitalize",
            alignItems: "center",
            paddingBottom: "24px",
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
          <FiberManualRecordIcon
            sx={{ color: "#71717A", width: "4px", height: "4px" }}
          />

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
            justifyContent: "space-between",
            paddingBottom: "24px",
          }}
        >
          <Typography
            sx={{
              color: "#0A0A0A",
              fontWeight: "800",
              fontSize: "20px",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            ${price.toFixed(2)}
          </Typography>
          <StockChip
            label="in stock"
            sx={{
              width: 61,
              height: 21,
              backgroundColor: "#ECFDF5",
              border: "1px solid #A4F4CF",
              borderRadius: "9999px",
              boxShadow: "0px 0px 0px 1px #A4F4CF",
              padding: "2px 8px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#065F46",
              "& .MuiChip-label": {
                padding: 0,
              },
              textTransform: "capitalize",
            }}
          />
        </Box>

        <Box
          sx={{ paddingX: "20px", paddingBottom: "20px", paddingTop: "12px" }}
        >
          <AddToCartButton />
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Box
      sx={{
        height: "36px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Image src="/logo.svg" alt="Logo" width={36} height={36} />
      <Typography
        sx={{
          color: "#000000",
          fontWeight: "800",
          fontSize: "10",
          fontFamily: "var(--font-jakarta)",
        }}
      >
        ShopBoard
      </Typography>
    </Box>
  );
};

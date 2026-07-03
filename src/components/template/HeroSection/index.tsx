"use client";

import Box from "@mui/material/Box";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <Box>
      <Image
        src="/HeroSection.png"
        alt="Hero Section"
        width={1440}
        height={400}
      />
    </Box>
  );
};

import { Box, TextField } from "@mui/material";
import { useState } from "react";

type SearchBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const SearchBar = ({ searchValue, onSearchChange }: SearchBarProps) => {
  return (
    <Box>
      <TextField
        id="outlined-search"
        value={searchValue}
        variant="outlined"
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products, brands, categories…"
        sx={{
          width: "512px",
          height: "41px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
          },
          "& .MuiOutlinedInput-input": {
            padding: "0 14px",
            height: "41px",
            boxSizing: "border-box",
          },
        }}
      />
    </Box>
  );
};

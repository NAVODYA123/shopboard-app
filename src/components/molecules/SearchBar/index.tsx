import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
          width: {
            xs: "100%",
            sm: "512px",
          },

          "& .MuiOutlinedInput-root": {
            height: "41px",
            borderRadius: "30px",
            backgroundColor: "#F4F4F599",

            "& fieldset": {
              border: "none",
            },

            "&:hover fieldset": {
              border: "none",
            },

            "&.Mui-focused fieldset": {
              border: "none",
            },
          },

          "& .MuiOutlinedInput-input": {
            padding: "0 14px",
            height: "41px",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

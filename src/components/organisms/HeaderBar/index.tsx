import { HeaderLogo } from "@/components/molecules/HeaderLogo";
import { SearchBar } from "@/components/molecules/SearchBar";
import { Box } from "@mui/material";

type HeaderBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const HeaderBar = ({ searchValue, onSearchChange }: HeaderBarProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: {
          xs: "auto",
          sm: "64px",
        },
        gap: {
          xs: 2,
          sm: 0,
        },
        padding: "0px 24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box>
        <HeaderLogo />
      </Box>

      <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />

      <Box></Box>
    </Box>
  );
};

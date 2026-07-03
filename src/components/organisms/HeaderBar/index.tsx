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
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",
        alignItems: "center",
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

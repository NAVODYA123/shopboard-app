import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function StockChip() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Chip Filled"
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
        }}
      />
    </Stack>
  );
}

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { SxProps, Theme } from "@mui/material/styles";

type StockChipProps = {
  label?: string;
  sx?: SxProps<Theme>;
};

export default function StockChip({ label = "In Stock", sx }: StockChipProps) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} sx={sx} />
    </Stack>
  );
}

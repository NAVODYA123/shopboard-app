import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationBarProps = {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationBar = ({ page, handleChange }: PaginationBarProps) => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
};

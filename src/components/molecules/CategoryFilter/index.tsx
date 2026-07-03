import { Category } from "@/types/categoryType";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type CategoryFilterProps = {
  categories: Category[];
  handleChange: (event: SelectChangeEvent) => void;
  category: Category;
};
export const CategoryFilter = ({
  categories,
  handleChange,
  category,
}: CategoryFilterProps) => {
  return (
    <Box>
      <FormControl fullWidth>
        <Select
          sx={{ width: "200px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category?.slug ?? ""}
          onChange={handleChange}
        >
          {categories?.map((cat) => {
            return (
              <MenuItem key={cat.slug} value={cat.slug}>
                {cat.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

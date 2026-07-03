'use client";';
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";

type ReviewProps = {
  rating: number;
};

export const Review = ({ rating }: ReviewProps) => {
  return (
    <Box>
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={rating}
        precision={0.5}
      />
    </Box>
  );
};

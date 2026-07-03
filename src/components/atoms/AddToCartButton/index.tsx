import { alpha, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddToCartButton = () => {
  return (
    <Button
      startIcon={<AddIcon />}
      sx={{
        height: "48px",
        width: "290px",
        borderRadius: "28px",
        backgroundColor: alpha("#4F46E5", 0.05),
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#4F46E5",
      }}
      variant="contained"
    >
      Add to Cart
    </Button>
  );
};

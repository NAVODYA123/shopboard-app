export type Product = {
  id: number;
  title: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: 24;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

export type dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Reviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

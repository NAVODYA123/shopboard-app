// Product service for handling product-related operations

const BASE_URL = "https://dummyjson.com/products";

//get product list
export const getProductList = async (limit: number, skip: number) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return data;
};

//Get product item by id
export const getProductItem = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

//get Product categories
export const getProductCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
  return data;
};

// get Product by category
export const getProductbyCategory = async (slug: string) => {
  const response = await fetch(`${BASE_URL}/category/${slug}`);
  const data = await response.json();
  return data;
};

export async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchProductById(id: any) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product with ID: ${id}`);
    }
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(error);
    return null;
  }
}

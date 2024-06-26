import React, { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/printify/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error loading products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.images[0].src}
              alt={product.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <button className="bg-primary text-white py-2 px-4 rounded mt-4">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

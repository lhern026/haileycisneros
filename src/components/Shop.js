import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/printify/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-20 max-w-full">
      <h2 className="text-5xl font-bold mb-12 text-center text-primary">
        Shop
      </h2>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative h-[400px] w-full overflow-hidden bg-neutral-200 rounded-lg shadow-lg group"
            >
              <img
                src={product.images[0].src}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-2xl font-bold">{product.title}</p>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-secondary text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

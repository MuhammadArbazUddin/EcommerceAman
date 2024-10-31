import React from "react";
import { ProductCard } from "../components";

const products = [
  {
    name: "C-500 Antioxidant Protect Dietary Supplement",
    brand: "Lucky Supermarket",
    price: "14.99",
    originalPrice: "28.99",
    rating: "4.8",
    reviewCount: "17k",
    image:
      "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
  },
  {
    name: "Omega-3 Fish Oil",
    brand: "Health Plus",
    price: "19.99",
    originalPrice: "34.99",
    rating: "4.5",
    reviewCount: "12k",
    image: "https://example.com/product-image2.png",
  },
  {
    name: "Multivitamin Gummies",
    brand: "Wellness Co.",
    price: "9.99",
    originalPrice: "15.99",
    rating: "4.7",
    reviewCount: "8k",
    image: "https://example.com/product-image3.png",
  },
  {
    name: "Vitamin D3",
    brand: "Nature's Best",
    price: "12.99",
    originalPrice: "22.99",
    rating: "4.9",
    reviewCount: "20k",
    image: "https://example.com/product-image4.png",
  },
  {
    name: "Vitamin D3",
    brand: "Nature's Best",
    price: "12.99",
    originalPrice: "22.99",
    rating: "4.9",
    reviewCount: "20k",
    image: "https://example.com/product-image4.png",
  },
  {
    name: "Vitamin D3",
    brand: "Nature's Best",
    price: "12.99",
    originalPrice: "22.99",
    rating: "4.9",
    reviewCount: "20k",
    image: "https://example.com/product-image4.png",
  },
  {
    name: "Vitamin D3",
    brand: "Nature's Best",
    price: "12.99",
    originalPrice: "22.99",
    rating: "4.9",
    reviewCount: "20k",
    image: "https://example.com/product-image4.png",
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 my-12">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import productCart1 from "../../../../public/Product/procuct 1.png";
import productCart2 from "../../../../public/Product/procuct 2.png";
import productCart3 from "../../../../public/Product/procuct 3.png";
import productCart4 from "../../../../public/Product/procuct 4.png";
import { ProductDetailModal } from "../../products/Product Detail Modal/productDetailmodal";

const products = [
  {
    images: [productCart1, productCart1, productCart1],
    productHeading: "English Book 1",
    autherName: "Santo",
    description:
      "A beautifully designed book that brings calm and creativity to your daily routine.",
    price: 120,
    features: [
      "Premium quality paper that prevents bleed-through",
      "Thoughtfully designed layouts for better experience",
      "Perfect for mindfulness and relaxation",
      "Durable binding for long-lasting use",
    ],
  },
  {
    images: [productCart2, productCart2, productCart2],
    productHeading: "English Book 2",
    autherName: "Maria",
    description:
      "Discover peace and mindfulness through thoughtfully crafted pages and designs.",
    price: 150,
    features: [
      "High-quality materials for premium feel",
      "Carefully curated content for relaxation",
      "Portable design for on-the-go use",
      "Eco-friendly and sustainable production",
    ],
  },
  {
    images: [productCart3, productCart3, productCart3],
    productHeading: "English Book 3",
    autherName: "John",
    description:
      "Experience the joy of offline breaks with premium quality materials and layouts.",
    price: 180,
    features: [
      "Expertly crafted for maximum engagement",
      "Stress-relief through creative activities",
      "Beautiful aesthetics and design",
      "Suitable for all skill levels",
    ],
  },
  {
    images: [productCart4, productCart4, productCart4],
    productHeading: "English Book 4",
    autherName: "Alex",
    description:
      "Transform your downtime into moments of relaxation with this premium collection.",
    price: 200,
    features: [
      "Luxury materials for ultimate comfort",
      "Innovative design for better usability",
      "Promotes mental wellness and calm",
      "Makes a perfect gift for loved ones",
    ],
  },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id ? parseInt(params.id as string) : -1;
  const product =
    productId >= 0 && productId < products.length ? products[productId] : null;

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/Our%20Mission%20Page/Main%20Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800"
            style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
          >
            Product Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="bg-[#FF8000] text-white px-6 py-3 rounded-full hover:bg-[#FF8000]/90 transition-colors font-medium"
            style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return <ProductDetailModal product={product} productId={productId} />;
  
}

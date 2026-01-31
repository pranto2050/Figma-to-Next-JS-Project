"use client";

import { useState, useCallback } from "react";
import { Package, Plus, User, Building2 } from "lucide-react";
import type { AdminProduct } from "./types";
import { AddProductModal } from "./AddProductModal";

function generateId(): string {
  return `prod_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddProduct = useCallback(
    (data: Omit<AdminProduct, "id" | "createdAt">) => {
      const newProduct: AdminProduct = {
        ...data,
        id: generateId(),
        createdAt: Date.now(),
      };
      setProducts((prev) => [newProduct, ...prev]);
    },
    []
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-[#000000] truncate">Products</h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[#000000]/70">
            Manage products. Connect to backend later.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF8000] px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-white hover:bg-[#FF8000]/90 transition shadow-lg shadow-[#FF8000]/20 shrink-0"
        >
          <Plus className="h-5 w-5 shrink-0" />
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border border-[#FF8000]/30 bg-white/80 p-8 sm:p-12 text-center">
          <Package className="mx-auto h-12 w-12 text-[#FF8000]" />
          <p className="mt-4 text-[#000000]/70">No products yet.</p>
          <p className="mt-1 text-sm text-[#000000]/50">
            Click &quot;Add Product&quot; to add your first product.
          </p>
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-[#FF8000]/50 bg-[#FFEAD8]/80 px-4 py-2.5 text-sm font-medium text-[#FF8000] hover:bg-[#FF8000]/10 transition"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-[#FF8000]/30 bg-white/80 overflow-hidden shadow-lg shadow-black/5 transition hover:border-[#FF8000]/50 hover:shadow-[#FF8000]/10"
            >
              <div className="aspect-video bg-[#FFEAD8]/50 relative overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="h-12 w-12 text-[#FF8000]/40" />
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-sm sm:text-base text-[#000000] line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#000000]/70">
                  {product.authorOrManufacturerType === "author" ? (
                    <User className="h-4 w-4 shrink-0 text-[#FF8000]" />
                  ) : (
                    <Building2 className="h-4 w-4 shrink-0 text-[#FF8000]" />
                  )}
                  <span className="truncate">
                    {product.authorOrManufacturerName || "—"}
                  </span>
                </div>
                {product.description && (
                  <p className="text-sm text-[#000000]/60 line-clamp-2">{product.description}</p>
                )}
                {product.features && product.features.length > 0 && (
                  <ul className="text-xs text-[#000000]/70 space-y-1">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FF8000] shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-[#000000]/50">+{product.features.length - 3} more</li>
                    )}
                  </ul>
                )}
                <p className="text-base sm:text-lg font-semibold text-[#FF8000]">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { X, Upload, Link as LinkIcon, Package, User, Building2, Plus, Trash2 } from "lucide-react";
import type { AdminProduct, ProductAuthorOrManufacturerType } from "./types";
import { cn } from "@/lib/utils";

type ImageSource = "upload" | "url";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Omit<AdminProduct, "id" | "createdAt">) => void;
}

const emptyForm = {
  imageSource: "url" as ImageSource,
  imageUrl: "",
  imageFile: null as File | null,
  name: "",
  description: "",
  authorOrManufacturerType: "author" as ProductAuthorOrManufacturerType,
  authorOrManufacturerName: "",
  features: [] as string[],
  price: "",
};

export function AddProductModal({ isOpen, onClose, onAdd }: AddProductModalProps) {
  const [form, setForm] = useState(emptyForm);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function resetForm() {
    if (previewUrl && form.imageSource === "upload") {
      URL.revokeObjectURL(previewUrl);
    }
    setForm(emptyForm);
    setPreviewUrl(null);
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  function handleImageSourceChange(source: ImageSource) {
    if (previewUrl && form.imageSource === "upload") {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    setForm((prev) => ({
      ...prev,
      imageSource: source,
      imageUrl: source === "url" ? prev.imageUrl : "",
      imageFile: null,
    }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setForm((prev) => ({ ...prev, imageFile: file }));
  }

  function handleImageUrlChange(url: string) {
    setForm((prev) => ({ ...prev, imageUrl: url }));
    if (form.imageSource === "url") setPreviewUrl(url || null);
  }

  function getDisplayImageUrl(): string | null {
    if (form.imageSource === "upload" && previewUrl) return previewUrl;
    if (form.imageSource === "url" && form.imageUrl.trim()) return form.imageUrl.trim();
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const imageDisplayUrl = getDisplayImageUrl();
    if (!imageDisplayUrl) {
      return;
    }
    const priceNum = parseFloat(form.price.replace(/,/g, "."));
    if (Number.isNaN(priceNum) || priceNum < 0) {
      return;
    }
    if (!form.name.trim()) return;

    const features = form.features.map((f) => f.trim()).filter(Boolean);
    onAdd({
      imageUrl: imageDisplayUrl,
      name: form.name.trim(),
      description: form.description.trim(),
      authorOrManufacturerType: form.authorOrManufacturerType,
      authorOrManufacturerName: form.authorOrManufacturerName.trim(),
      features,
      price: priceNum,
    });
    handleClose();
  }

  if (!isOpen) return null;

  const displayImage = getDisplayImageUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-h-[95vh] sm:max-h-[90vh] max-w-lg overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[#FF8000]/40 border-b-0 sm:border-b bg-[#FFEAD8] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#FF8000]/30 bg-[#FFEAD8] px-4 sm:px-6 py-3 sm:py-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#000000] truncate">Add Product</h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-[#000000]/60 hover:bg-[#FF8000]/20 hover:text-[#000000] transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Image: Upload or URL */}
          <div>
            <label className="block text-sm font-medium text-[#000000] mb-2">Product Image</label>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
              <button
                type="button"
                onClick={() => handleImageSourceChange("upload")}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium transition",
                  form.imageSource === "upload"
                    ? "border-[#FF8000] bg-[#FF8000]/20 text-[#FF8000]"
                    : "border-[#FF8000]/40 bg-white/80 text-[#000000]/80 hover:border-[#FF8000]/60"
                )}
              >
                <Upload className="h-4 w-4" />
                Upload from computer
              </button>
              <button
                type="button"
                onClick={() => handleImageSourceChange("url")}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium transition",
                  form.imageSource === "url"
                    ? "border-[#FF8000] bg-[#FF8000]/20 text-[#FF8000]"
                    : "border-[#FF8000]/40 bg-white/80 text-[#000000]/80 hover:border-[#FF8000]/60"
                )}
              >
                <LinkIcon className="h-4 w-4" />
                Image URL
              </button>
            </div>

            {form.imageSource === "upload" && (
              <div className="space-y-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-xl border-2 border-dashed border-[#FF8000]/50 bg-white/60 py-6 text-sm text-[#000000]/60 hover:border-[#FF8000] hover:bg-white/80 transition"
                >
                  Click to choose image
                </button>
              </div>
            )}
            {form.imageSource === "url" && (
              <input
                type="url"
                value={form.imageUrl}
                onChange={(e) => handleImageUrlChange(e.target.value)}
                placeholder="https://example.com/product-image.jpg"
                className="w-full rounded-xl border border-[#FF8000]/40 bg-white/80 px-4 py-3 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000]"
              />
            )}
            {displayImage && (
              <div className="mt-3 rounded-xl overflow-hidden border border-[#FF8000]/30 bg-white/80 aspect-video max-h-32 sm:max-h-40">
                <img src={displayImage} alt="Preview" className="w-full h-full object-contain" />
              </div>
            )}
          </div>

          {/* Product name */}
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium text-[#000000] mb-2">
              Product Name
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#000000]/50" />
              <input
                id="product-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Enter product name"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FF8000]/40 bg-white/80 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000]"
              />
            </div>
          </div>

          {/* Author or Manufacturer */}
          <div>
            <label className="block text-sm font-medium text-[#000000] mb-2">
              Author name or Manufacturer company
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-2">
              <button
                type="button"
                onClick={() => setForm((p) => ({ ...p, authorOrManufacturerType: "author" }))}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium transition",
                  form.authorOrManufacturerType === "author"
                    ? "border-[#FF8000] bg-[#FF8000]/20 text-[#FF8000]"
                    : "border-[#FF8000]/40 bg-white/80 text-[#000000]/80 hover:border-[#FF8000]/60"
                )}
              >
                <User className="h-4 w-4" />
                Author name
              </button>
              <button
                type="button"
                onClick={() => setForm((p) => ({ ...p, authorOrManufacturerType: "manufacturer" }))}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium transition",
                  form.authorOrManufacturerType === "manufacturer"
                    ? "border-[#FF8000] bg-[#FF8000]/20 text-[#FF8000]"
                    : "border-[#FF8000]/40 bg-white/80 text-[#000000]/80 hover:border-[#FF8000]/60"
                )}
              >
                <Building2 className="h-4 w-4" />
                Manufacturer company
              </button>
            </div>
            <input
              type="text"
              value={form.authorOrManufacturerName}
              onChange={(e) => setForm((p) => ({ ...p, authorOrManufacturerName: e.target.value }))}
              placeholder={
                form.authorOrManufacturerType === "author"
                  ? "Enter author name"
                  : "Enter manufacturer company name"
              }
              className="w-full rounded-xl border border-[#FF8000]/40 bg-white/80 px-4 py-3 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000]"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="product-desc" className="block text-sm font-medium text-[#000000] mb-2">
              Product Description
            </label>
            <textarea
              id="product-desc"
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              placeholder="Enter product description"
              rows={4}
              className="w-full rounded-xl border border-[#FF8000]/40 bg-white/80 px-4 py-3 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000] resize-y"
            />
          </div>

          {/* Product features */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-[#000000]">
                Product Features
              </label>
              <button
                type="button"
                onClick={() => setForm((p) => ({ ...p, features: [...p.features, ""] }))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#FF8000] bg-[#FF8000]/10 px-3 py-2 text-sm font-medium text-[#FF8000] hover:bg-[#FF8000]/20 transition"
              >
                <Plus className="h-4 w-4" />
                Add feature
              </button>
            </div>
            <p className="text-xs text-[#000000]/50 mb-2">
              Different products can have different features. Click &quot;Add feature&quot; for each new one.
            </p>
            <div className="space-y-2">
              {form.features.length === 0 ? (
                <p className="text-sm text-[#000000]/50 py-2">No features added yet.</p>
              ) : (
                form.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const next = [...form.features];
                        next[index] = e.target.value;
                        setForm((p) => ({ ...p, features: next }));
                      }}
                      placeholder={`Feature ${index + 1}`}
                      className="flex-1 rounded-xl border border-[#FF8000]/40 bg-white/80 px-4 py-2.5 text-sm text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          features: p.features.filter((_, i) => i !== index),
                        }))
                      }
                      className="shrink-0 rounded-lg border border-[#FF8000]/40 bg-white/80 p-2.5 text-[#000000]/60 hover:bg-red-500/10 hover:text-red-600 hover:border-red-500/30 transition"
                      aria-label="Remove feature"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="product-price" className="block text-sm font-medium text-[#000000] mb-2">
              Product Price
            </label>
            <input
              id="product-price"
              type="text"
              inputMode="decimal"
              value={form.price}
              onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
              placeholder="0.00"
              required
              className="w-full rounded-xl border border-[#FF8000]/40 bg-white/80 px-4 py-3 text-[#000000] placeholder-[#000000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:border-[#FF8000]"
            />
          </div>

          <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-xl border border-[#FF8000]/40 bg-white/80 py-2.5 sm:py-3 text-sm font-medium text-[#000000]/80 hover:bg-[#FF8000]/10 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!displayImage || !form.name.trim() || form.price === ""}
              className="flex-1 rounded-xl bg-[#FF8000] py-2.5 sm:py-3 text-sm font-medium text-white hover:bg-[#FF8000]/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

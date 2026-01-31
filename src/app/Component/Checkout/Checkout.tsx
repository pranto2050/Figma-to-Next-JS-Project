"use client";

import Header from "../HeaderSection/Header";
import { FooterSection } from "../FooterSection/FooterSection";
import { useCart } from "../../context/CartContext";
import { getCheckoutProduct } from "../../data/checkoutProducts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  CreditCard,
  X,
  PartyPopper,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Checkout() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalAnimated, setModalAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    zip: "",
  });

  const cartWithProducts = items
    .map((item) => {
      const product = getCheckoutProduct(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean) as Array<{
    productId: number;
    quantity: number;
    product: { id: number; name: string; author: string; price: number; image: string };
  }>;

  const subtotal = cartWithProducts.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCompleteCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartWithProducts.length === 0) return;
    setIsSubmitting(true);
    // Simulate order processing
    await new Promise((r) => setTimeout(r, 1200));
    setCheckoutSuccess(true);
    clearCart();
    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setCheckoutSuccess(false);
  };

  // Prevent body scroll when success modal is open + trigger entrance animation
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = "hidden";
      setModalAnimated(false);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setModalAnimated(true));
      });
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeSuccessModal();
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        cancelAnimationFrame(frame);
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }
    document.body.style.overflow = "";
    setModalAnimated(false);
    return undefined;
  }, [showSuccessModal]);

  const isEmpty = cartWithProducts.length === 0 && !checkoutSuccess;

  return (
    <div
      className="text-black min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url('/Vanish/vanish%20main%20background.png')`,
      }}
    >
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#FF8000] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Secure Payment
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Checkout
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-black/80">
              Review your order and complete your purchase. Your items are waiting for you.
            </p>
          </div>
        </section>

        {/* Checkout Successful – pop-up modal */}
        {showSuccessModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            aria-describedby="success-modal-desc"
          >
            {/* Backdrop – click to close */}
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${modalAnimated ? "opacity-100" : "opacity-0"}`}
              onClick={closeSuccessModal}
              aria-hidden="true"
            />
            {/* Modal card */}
            <div
              className={`relative w-full max-w-md sm:max-w-lg rounded-2xl sm:rounded-3xl border-2 border-[#FF8000] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 ${modalAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative top bar */}
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-[#FF8000] via-[#ff9f3d] to-[#FF8000]" />
              <div className="p-6 sm:p-8 md:p-10">
                {/* Close button */}
                <button
                  type="button"
                  onClick={closeSuccessModal}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/5 hover:bg-black/10 text-black/70 hover:text-black flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8000] focus:ring-offset-2"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 sm:w-5 sm:h-5" />
                </button>

                {/* Success icon with subtle animation */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF8000]/15 flex items-center justify-center ring-4 ring-[#FF8000]/20">
                      <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-[#FF8000]" strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#22c55e]/90 flex items-center justify-center shadow-lg">
                      <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </div>

                <h2
                  id="success-modal-title"
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-2"
                >
                  Checkout Successful
                </h2>
                <p
                  id="success-modal-desc"
                  className="text-sm sm:text-base text-center text-black/75 mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed"
                >
                  Thank you for your order. We&apos;ll send a confirmation to your email shortly.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      closeSuccessModal();
                      router.push("/products");
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF8000] text-white font-semibold hover:bg-[#e67300] active:scale-[0.98] transition-all text-sm sm:text-base shadow-lg shadow-[#FF8000]/25"
                  >
                    <ShoppingBag className="w-4 h-4 flex-shrink-0" />
                    Continue Shopping
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      closeSuccessModal();
                      router.push("/");
                    }}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-[#FF8000] text-[#FF8000] font-semibold hover:bg-[#FF8000]/10 active:scale-[0.98] transition-all text-sm sm:text-base"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty cart state */}
        {isEmpty && !checkoutSuccess && (
          <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">
            <div className="max-w-md mx-auto">
              <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#FF8000]/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF8000]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Your cart is empty
                </h2>
                <p className="text-sm text-black/80 mb-6">
                  Add products from our store and they&apos;ll appear here.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF8000] text-white font-semibold hover:bg-[#e67300] transition-colors text-sm sm:text-base"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Main checkout: cart + form left, order summary right */}
        {!isEmpty && !checkoutSuccess && (
          <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
            <form onSubmit={handleCompleteCheckout}>
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
                {/* Left: Cart items + shipping form */}
                <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
                  {/* Cart items */}
                  <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF8000]/20 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8000]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl font-semibold">Your Items</h2>
                        <p className="text-xs sm:text-sm mt-0.5">
                          {cartWithProducts.length} item{cartWithProducts.length !== 1 ? "s" : ""} in cart
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {cartWithProducts.map(({ productId, product, quantity }) => (
                        <li
                          key={productId}
                          className="flex flex-col min-[400px]:flex-row gap-3 p-3 sm:p-4 rounded-xl bg-white/40 border border-[#FF8000]/30"
                        >
                          <div className="relative w-full min-[400px]:w-20 sm:w-24 h-28 min-[400px]:h-20 sm:h-24 rounded-lg overflow-hidden bg-black/5 flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="96px 96px"
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-semibold text-sm sm:text-base truncate">
                                {product.name}
                              </h3>
                              <p className="text-xs text-black/70">By {product.author}</p>
                              <p className="text-sm sm:text-base font-semibold text-[#FF8000] mt-1">
                                ${product.price}
                              </p>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-2">
                              <div className="flex items-center rounded-full border border-[#FF8000]/50 bg-white/60">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(productId, Math.max(1, quantity - 1))
                                  }
                                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-l-full hover:bg-[#FF8000]/10 transition-colors text-[#FF8000]"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 sm:w-10 text-center text-sm font-medium">
                                  {quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(productId, quantity + 1)}
                                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-r-full hover:bg-[#FF8000]/10 transition-colors text-[#FF8000]"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(productId)}
                                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-red-500/20 text-black/70 hover:text-red-600 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shipping / contact form */}
                  <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF8000]/20 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8000]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl font-semibold">Shipping & Contact</h2>
                        <p className="text-xs sm:text-sm mt-0.5">
                          We&apos;ll use this to confirm your order.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="checkout-name"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="checkout-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkout-email"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="checkout-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkout-mobile"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="checkout-mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="+31 6 12345678"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="checkout-zip"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          ZIP / Postcode
                        </label>
                        <input
                          type="text"
                          id="checkout-zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          placeholder="1234 AB"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="checkout-address"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          Address *
                        </label>
                        <input
                          type="text"
                          id="checkout-address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street, number"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="checkout-city"
                          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="checkout-city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Amsterdam"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-black/10 placeholder-black/40 focus:border-[#FF8000] focus:ring-1 focus:ring-[#FF8000] outline-none transition-colors text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Order summary + Complete Checkout */}
                <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0">
                  <div className="rounded-xl sm:rounded-2xl border border-[#FF8000] bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6 sticky top-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-5">
                      Order Summary
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-black/80">Subtotal</span>
                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-black/80">Shipping</span>
                        <span className="font-medium">
                          {shipping > 0 ? `$${shipping.toFixed(2)}` : "—"}
                        </span>
                      </div>
                      <div className="h-px bg-[#FF8000]/30 my-2" />
                      <div className="flex justify-between text-base sm:text-lg font-bold">
                        <span>Total</span>
                        <span className="text-[#FF8000]">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-5 sm:mt-6 py-3 sm:py-3.5 rounded-xl bg-[#FF8000] text-white font-semibold hover:bg-[#e67300] transition-colors disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing…
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                          Complete Checkout
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}

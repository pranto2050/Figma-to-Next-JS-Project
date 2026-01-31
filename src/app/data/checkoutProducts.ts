/** Minimal product info for checkout display. productId matches product/[id] and ProductCartSection. */
export const CHECKOUT_PRODUCTS = [
  {
    id: 0,
    name: "English Book 1",
    author: "Santo",
    price: 120,
    image: "/Product/procuct 1.png",
  },
  {
    id: 1,
    name: "English Book 2",
    author: "Maria",
    price: 150,
    image: "/Product/procuct 2.png",
  },
  {
    id: 2,
    name: "English Book 3",
    author: "John",
    price: 180,
    image: "/Product/procuct 3.png",
  },
  {
    id: 3,
    name: "English Book 4",
    author: "Alex",
    price: 200,
    image: "/Product/procuct 4.png",
  },
] as const;

export function getCheckoutProduct(id: number) {
  return CHECKOUT_PRODUCTS.find((p) => p.id === id) ?? null;
}

/**
 * Product type for admin. Replace with API types when connecting to backend.
 */
export type ProductAuthorOrManufacturerType = "author" | "manufacturer";

export interface AdminProduct {
  id: string;
  /** Image as URL (from upload we store object URL or from URL field) */
  imageUrl: string;
  name: string;
  description: string;
  /** Either author name or manufacturer company name */
  authorOrManufacturerType: ProductAuthorOrManufacturerType;
  authorOrManufacturerName: string;
  /** Product features – each product can have different features */
  features: string[];
  price: number;
  createdAt: number;
}

export type ProductCategory = 
  | 'sarees'
  | 'customization-saree'
  | 'customization-dress'
  | 'daily-wear'
  | 'offers-under-199';

export type SareeSubCategory = 
  | 'traditional'
  | 'trending'
  | 'daily-wear'
  | 'party-wear'
  | 'instagram-trending'
  | 'latest';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subCategory?: SareeSubCategory | string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  stockQuantity: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isInstagramTrend?: boolean;
  isOfferUnder199?: boolean;
  isCustomizable?: boolean;
  fabric?: string;
  work?: string;
  careInstructions?: string;
  dispatchDays?: number;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  category: ProductCategory;
}

export interface WishlistItem {
  id: string;
  productId: string;
  product: Product;
  addedAt: string;
}

export type OrderStatus = 
  | 'Order Placed'
  | 'Order Confirmed'
  | 'Processing'
  | 'Shipped'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Cancelled';

export type PaymentMethod = 'upi' | 'gpay' | 'phonepe' | 'paytm' | 'cod' | 'card';
export type PaymentStatus = 'pending' | 'verified' | 'failed' | 'refunded';

export interface CustomerAddress {
  fullName: string;
  phone: string;
  alternatePhone?: string;
  email?: string;
  streetAddress: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

export interface Order {
  id: string; // e.g. LB-2026-8941
  customer: CustomerAddress;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentReference?: string; // UPI UTR or Txn ID
  orderStatus: OrderStatus;
  statusHistory: {
    status: OrderStatus;
    timestamp: string;
    note?: string;
  }[];
  trackingNumber?: string;
  courierPartner?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomizationRequest {
  id: string;
  requestType: 'saree' | 'dress';
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  preferences: {
    fabric?: string;
    preferredColor?: string;
    borderStyle?: string;
    blouseDesign?: string;
    measurements?: string;
    occasion?: string;
    targetDate?: string;
    budgetRange?: string;
  };
  referenceImages: string[];
  specialInstructions: string;
  status: 'Pending' | 'Reviewing' | 'Price Quoted' | 'In Progress' | 'Completed' | 'Declined';
  quotePrice?: number;
  createdAt: string;
}

export interface CustomerUser {
  id: string;
  phone: string;
  name?: string;
  email?: string;
  addresses: CustomerAddress[];
  createdAt: string;
}

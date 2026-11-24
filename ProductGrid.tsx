import { Product } from '@/types/ecommerce';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = 'No boutique products found in this category.',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-[#FFFFFF] rounded-2xl border border-[#C69D56]/20 max-w-lg mx-auto">
        <p className="font-serif-luxury text-lg text-[#480E1E] font-medium">{emptyMessage}</p>
        <p className="text-xs text-[#480E1E]/60 mt-1">
          Explore our trending sarees or contact us on WhatsApp for custom requests.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useStore } from "@/context/store-context";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { ProductInfo } from "@/components/products/product-info";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { RelatedProducts } from "@/components/products/related-products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useStore();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const handleQuantityChange = (action: 'increment' | 'decrement') => {
    if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'increment') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      quantity
    });
    toast.success(`Added ${quantity} ${product.name} (${selectedSize}) to cart`);
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: product.name }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="container py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button (Mobile) */}
          <Button variant="ghost" asChild className="mb-4 md:hidden">
            <Link to="/shop" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-mura-gray rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            {/* Product Info */}
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              quantity={quantity}
              onSizeSelect={setSelectedSize}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
            />
          </div>
          
          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

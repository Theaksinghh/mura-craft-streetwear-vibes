
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useStore } from "@/context/store-context";
import { ProductCard } from "@/components/products/product-card";
import { ShoppingCart, ArrowLeft, ChevronRight } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useStore();
  
  // Scroll to top when product changes
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </div>
          
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
            <div>
              <div className="sticky top-20">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-bold mb-4">₹{product.price}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium mb-2">Size</h3>
                    <div className="flex gap-2">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <Button 
                          key={size} 
                          variant="outline" 
                          className="h-10 w-10"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Quantity</h3>
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-10 w-10 rounded-r-none"
                      >
                        -
                      </Button>
                      <div className="h-10 px-4 flex items-center justify-center border-y">
                        1
                      </div>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-10 w-10 rounded-l-none"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Add to Cart */}
                <Button 
                  onClick={() => addToCart(product)} 
                  size="lg" 
                  className="w-full mb-4"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                {/* Product Details */}
                <div className="space-y-4 mt-8">
                  <div>
                    <h3 className="font-semibold">Product Details</h3>
                    <Separator className="my-2" />
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>100% premium cotton for maximum comfort</li>
                      <li>Oversized fit for a trendy, relaxed look</li>
                      <li>Vibrant, long-lasting prints that won't fade</li>
                      <li>Pre-shrunk fabric to maintain size after washing</li>
                      <li>Designed in India for the style-conscious youth</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Shipping & Returns</h3>
                    <Separator className="my-2" />
                    <p className="text-sm text-muted-foreground">
                      Free shipping on all orders above ₹999. Easy 15-day returns on all unworn items.
                      See our <Link to="/return-policy" className="text-primary hover:underline">return policy</Link> for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.id} product={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

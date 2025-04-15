
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product, useStore } from "@/context/store-context";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  showAddToCart?: boolean;
}

export function ProductCard({ product, className, showAddToCart = true }: ProductCardProps) {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}>
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {product.category === "sale" && (
            <div className="absolute top-2 right-2 bg-mura-pink text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </div>
          )}
          {product.category === "new" && (
            <div className="absolute top-2 right-2 bg-mura-blue text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-2 font-bold">₹{product.price}</div>
        </CardContent>
        {showAddToCart && (
          <CardFooter className="p-4 pt-0">
            <Button 
              onClick={handleAddToCart}
              className="w-full group-hover:bg-primary transition-colors"
              variant="outline"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        )}
      </Link>
    </Card>
  );
}

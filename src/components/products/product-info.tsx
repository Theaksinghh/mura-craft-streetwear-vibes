
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/context/store-context";
import { toast } from "sonner";

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  quantity: number;
  onSizeSelect: (size: string) => void;
  onQuantityChange: (action: 'increment' | 'decrement') => void;
  onAddToCart: () => void;
}

export function ProductInfo({
  product,
  selectedSize,
  quantity,
  onSizeSelect,
  onQuantityChange,
  onAddToCart,
}: ProductInfoProps) {
  return (
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
                  variant={selectedSize === size ? "default" : "outline"} 
                  className="h-10 w-10"
                  onClick={() => onSizeSelect(size)}
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
                onClick={() => onQuantityChange('decrement')}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <div className="h-10 px-4 flex items-center justify-center border-y">
                {quantity}
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-l-none"
                onClick={() => onQuantityChange('increment')}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onAddToCart} 
          size="lg" 
          className="w-full mb-4"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        
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
              See our <a href="/return-policy" className="text-primary hover:underline">return policy</a> for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

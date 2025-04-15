
import { Link } from "react-router-dom";
import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/store-context";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function CartDropdown() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useStore();

  const closeCart = () => {
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <Card className="w-full max-w-md h-full overflow-auto shadow-xl animate-slide-in-right z-10">
        {/* Header */}
        <div className="p-4 border-b sticky top-0 bg-background z-10 flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            <h2 className="font-semibold text-lg">Your Cart</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex-1">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-4">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={closeCart} asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.product.id} className="py-4">
                  <div className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium">
                        <h3>{item.product.name}</h3>
                        <p className="ml-4">₹{item.product.price}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center mt-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="mx-3 text-sm">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="ml-auto"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-background sticky bottom-0">
            <div className="flex justify-between py-2">
              <span className="font-medium">Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">Shipping</span>
              <span>₹0</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <Button className="w-full mt-4" size="lg" asChild>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

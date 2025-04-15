
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/store-context";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal
  } = useStore();

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <Card className="p-8 text-center">
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. 
              Browse our collection of trendy oversized t-shirts.
            </p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <div className="p-4 border-b">
                <h2 className="font-semibold">Cart Items</h2>
              </div>
              <ul className="divide-y">
                {cartItems.map((item) => (
                  <li key={item.product.id} className="p-4">
                    <div className="flex gap-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
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
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                          {item.product.description}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center mt-4">
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
              <div className="p-4 border-t">
                <Link to="/shop" className="text-sm text-primary hover:underline">
                  ← Continue shopping
                </Link>
              </div>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card className="sticky top-20">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Order Summary</h2>
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Shipping</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between py-2 font-bold">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
                <Button className="w-full mt-4" size="lg" asChild>
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

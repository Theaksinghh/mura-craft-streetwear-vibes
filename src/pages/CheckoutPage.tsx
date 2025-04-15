
import { useState } from "react";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/context/store-context";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useStore();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const handlePlaceOrder = () => {
    // In a real app, this would handle payment processing
    // and backend order creation
    setIsOrderPlaced(true);
    clearCart();
  };
  
  if (isOrderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow container py-12">
          <Card className="max-w-md mx-auto text-center p-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl mb-2">Order Confirmed!</CardTitle>
            <CardDescription className="mb-6">
              Thank you for your purchase. Your order has been placed successfully.
            </CardDescription>
            <p className="mb-6 text-muted-foreground">
              We've sent a confirmation email with your order details.
              Your order number is <span className="font-semibold">#MRC-{Math.floor(Math.random() * 10000)}</span>
            </p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </Card>
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
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/cart" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          {cartItems.length === 0 ? (
            <Card className="text-center p-8">
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">
                  You don't have any items in your cart to checkout.
                </p>
                <Button asChild>
                  <Link to="/shop">Browse Products</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="md:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      We'll use this information to send you order updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                      </div>
                      <Input type="email" placeholder="Email Address" />
                      <Input type="tel" placeholder="Phone Number" />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                    <CardDescription>
                      Where should we send your order?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input placeholder="Address" />
                      <Input placeholder="Apartment, suite, etc. (optional)" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input placeholder="City" />
                        <Input placeholder="State" />
                        <Input placeholder="PIN Code" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                      All transactions are secure and encrypted
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <Input placeholder="Card Number" />
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="MM/YY" />
                          <Input placeholder="CVV" />
                        </div>
                        <Input placeholder="Name on Card" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div>
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Cart Items */}
                      <div className="max-h-64 overflow-auto space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.product.id} className="flex gap-3">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="flex flex-1 flex-col">
                              <div className="flex justify-between text-sm font-medium">
                                <h3 className="line-clamp-1">{item.product.name}</h3>
                                <p className="ml-4">₹{item.product.price}</p>
                              </div>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Separator />
                      
                      {/* Price Summary */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>₹{cartTotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>₹0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>₹0</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>₹{cartTotal}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="lg" 
                        className="w-full mt-4"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground">
                        By placing your order, you agree to our{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

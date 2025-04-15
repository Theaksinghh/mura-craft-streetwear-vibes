import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Product type definition
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

// Cart item type definition
export type CartItem = {
  product: Product;
  quantity: number;
};

// Store context type definition
type StoreContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

// Create the context
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Context provider component
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Update cart count and total whenever cart items change
  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    setCartCount(count);
    setCartTotal(total);
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex !== -1) {
        // If product already exists in cart, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Otherwise add new item to cart
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  // Update quantity of a product in cart
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      });
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// Hook to use the store context
export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

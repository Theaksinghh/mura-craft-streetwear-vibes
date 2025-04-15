
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/context/store-context";
import { CartDropdown } from "@/components/cart/cart-dropdown";
import { supabase } from "@/integrations/supabase/client";

export function SiteHeader() {
  const { cartCount, isCartOpen, setIsCartOpen } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-extrabold text-xl sm:text-2xl gradient-text">MURACRAFT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" className="font-medium hover:text-primary transition-colors">Shop</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Auth Button */}
            {isAuthenticated ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="ghost">Sign In</Button>
              </Link>
            )}

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart} 
              className="relative"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="container py-4 border-t border-border animate-fade-in">
          <div className="flex items-center">
            <Input placeholder="Search for products..." className="flex-1" />
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="ml-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container border-t py-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            {!isAuthenticated && (
              <Link to="/auth" className="font-medium" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
            )}
          </nav>
        </div>
      )}

      {/* Cart Dropdown */}
      <CartDropdown />
    </header>
  );
}


import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { ProductGrid } from "@/components/products/product-grid";
import { products, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Product } from "@/context/store-context";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState("featured");
  
  const categoryParam = searchParams.get("category");
  
  // Filter products based on category from URL params
  useEffect(() => {
    if (categoryParam) {
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setFilteredProducts([...products]);
    }
  }, [categoryParam]);
  
  // Sort products
  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...filteredProducts];
      
      switch (sortOption) {
        case "price-low-to-high":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-high-to-low":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "name-a-to-z":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-z-to-a":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          // For "featured" or default case, no specific sorting
          break;
      }
      
      setFilteredProducts(sorted);
    };
    
    sortProducts();
  }, [sortOption]);
  
  const filterByCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "bestsellers", name: "Bestsellers" },
    { id: "new", name: "New Arrivals" },
    { id: "sale", name: "Sale" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        {/* Shop Banner */}
        <div className="bg-mura-black text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold">Shop Collection</h1>
            <p className="mt-2 text-gray-300">Browse our trendy oversized t-shirts</p>
          </div>
        </div>
        
        {/* Filters and Sort */}
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={
                    (cat.id === "all" && !categoryParam) || 
                    (cat.id !== "all" && categoryParam === cat.id)
                      ? "default"
                      : "outline"
                  }
                  onClick={() => filterByCategory(cat.id === "all" ? null : cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select
                value={sortOption}
                onValueChange={setSortOption}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                  <SelectItem value="name-a-to-z">Name: A to Z</SelectItem>
                  <SelectItem value="name-z-to-a">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground mb-4">
                Try changing your filters or browse our other categories
              </p>
              <Button onClick={() => filterByCategory(null)}>
                View All Products
              </Button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-muted-foreground">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <ProductGrid products={filteredProducts} />
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

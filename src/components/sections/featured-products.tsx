
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/product-grid";
import { Product } from "@/context/store-context";

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  linkUrl: string;
  linkText: string;
}

export function FeaturedProducts({ title, products, linkUrl, linkText }: FeaturedProductsProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Button variant="link" asChild className="group">
            <Link to={linkUrl} className="flex items-center">
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

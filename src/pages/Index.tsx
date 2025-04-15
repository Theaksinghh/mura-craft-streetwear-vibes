
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { TrendingSection } from "@/components/sections/trending-section";
import { CTASection } from "@/components/sections/cta-section";
import { featuredProducts, newArrivals } from "@/data/products";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts 
          title="Bestsellers" 
          products={featuredProducts} 
          linkUrl="/shop?category=bestsellers" 
          linkText="View All Bestsellers" 
        />
        <TrendingSection />
        <FeaturedProducts 
          title="New Arrivals" 
          products={newArrivals} 
          linkUrl="/shop?category=new" 
          linkText="View All New Arrivals" 
        />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}

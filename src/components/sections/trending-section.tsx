
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Anime Inspired",
    image: "https://images.unsplash.com/photo-1588513612733-7f2a5b5d8b9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFuaW1lfGVufDB8fDB8fHww",
    url: "/shop?category=anime"
  },
  {
    name: "Urban Streetwear",
    image: "https://images.unsplash.com/photo-1531187548312-9e832055f77b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHVyYmFufGVufDB8fDB8fHww",
    url: "/shop?category=urban"
  },
  {
    name: "Retro Vibes",
    image: "https://images.unsplash.com/photo-1577083562589-52e2aedf17c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldHJvfGVufDB8fDB8fHww",
    url: "/shop?category=retro"
  }
];

export function TrendingSection() {
  return (
    <section className="py-16 bg-mura-gray">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Trending Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.url}>
              <Card className="overflow-hidden group h-full">
                <div className="relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

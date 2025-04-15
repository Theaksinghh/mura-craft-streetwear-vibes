
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mura-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-mura-purple/20 to-mura-pink/20 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)"
        }}
      ></div>
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text pulse-glow">OVERSIZED</span> STYLE <br/>
              FOR THE <span className="gradient-text pulse-glow">BOLD</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Express yourself with MuraCraft's collection of trendy oversized tees 
            designed for the fearless generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-mura-pink hover:bg-mura-pink/90" asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

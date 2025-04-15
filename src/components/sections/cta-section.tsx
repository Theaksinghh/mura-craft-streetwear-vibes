
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-mura-blue to-mura-purple text-white py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the MuraCraft Community</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive deals, style tips, and first access to new drops.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button size="lg" className="bg-mura-yellow text-black hover:bg-mura-yellow/90">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

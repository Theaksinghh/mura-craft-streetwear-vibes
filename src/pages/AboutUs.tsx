
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-mura-black text-white py-12 md:py-24">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About MuraCraft</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're revolutionizing streetwear culture with bold designs and quality craftsmanship.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  MuraCraft was born from a simple yet powerful vision: to create expressive, high-quality oversized t-shirts that empower teenagers to showcase their unique identity.
                </p>
                <p className="mb-4">
                  Founded in 2023 by a group of young designers passionate about streetwear culture, we set out to challenge the status quo of fast fashion by creating pieces that are both trendy and built to last.
                </p>
                <p>
                  Our name 'MuraCraft' combines 'Mura' (meaning 'village' in Japanese) and 'Craft', representing our commitment to creating a community-focused brand that values craftsmanship and cultural influences from around the world.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="MuraCraft team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-mura-gray">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 gradient-text">Creativity</h3>
                <p>
                  We believe in pushing boundaries and challenging conventional fashion norms through innovative designs that tell a story.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 gradient-text">Quality</h3>
                <p>
                  Every MuraCraft product is crafted with premium materials and attention to detail, ensuring comfort and durability that surpasses fast fashion alternatives.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 gradient-text">Community</h3>
                <p>
                  We're building more than a brand—we're cultivating a community of like-minded individuals who express themselves through their style choices.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Commitment */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Sustainable fashion" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
                <p className="mb-4">
                  At MuraCraft, we're committed to responsible production practices that minimize our environmental footprint.
                </p>
                <p className="mb-4">
                  We work with ethical manufacturers who provide fair wages and safe working conditions for their employees.
                </p>
                <p>
                  Each purchase you make supports our ongoing initiatives to make the fashion industry more sustainable and inclusive.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

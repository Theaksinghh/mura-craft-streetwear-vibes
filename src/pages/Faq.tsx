
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="bg-mura-black text-white py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-300">
              Find answers to common questions about MuraCraft products and services.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What makes MuraCraft t-shirts unique?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  MuraCraft t-shirts stand out due to their premium materials, oversized streetwear fit, and vibrant, unique designs that appeal to trend-conscious teenagers. Each design is carefully crafted to express individuality and make a bold fashion statement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How do I determine my size?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Our t-shirts are designed to have an oversized fit. We recommend checking our detailed size guide on each product page. Generally, if you prefer a more fitted look, consider sizing down from your usual size.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How should I care for my MuraCraft t-shirt?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  For best results, wash your MuraCraft t-shirt inside out in cold water with similar colors. Tumble dry on low heat or hang to dry. Avoid using bleach and iron on the reverse side if needed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we ship worldwide! International shipping rates and delivery times vary depending on your location. You can view the shipping costs during checkout before completing your purchase.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We offer a 15-day return policy for unworn items with tags still attached. Please visit our Return Policy page for detailed information on how to initiate a return or exchange.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  For domestic orders within India, standard shipping typically takes 3-5 business days. Express shipping options are available for 1-2 day delivery in major cities. International shipping generally takes 7-14 business days depending on the destination.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do you offer discounts or promotions?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes! We regularly offer seasonal promotions and special discounts. Sign up for our newsletter to stay updated on our latest offers and exclusive deals for subscribers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Are your t-shirts sustainable?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We're committed to increasing sustainability in our production. While we're not 100% sustainable yet, we're actively working to improve our practices, including using more eco-friendly materials and ethical manufacturing processes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
              <p className="mb-6 text-muted-foreground">
                Our customer support team is here to help. Reach out to us anytime.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="text-primary hover:underline font-medium">
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

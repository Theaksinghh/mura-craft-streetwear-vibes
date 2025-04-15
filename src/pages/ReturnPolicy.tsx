
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="bg-mura-black text-white py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Return Policy</h1>
            <p className="text-gray-300">Last updated: April 15, 2025</p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="prose prose-lg max-w-none">
            <p>
              We want you to be completely satisfied with your purchase from MuraCraft. If for any reason you're not 
              satisfied, we offer a simple and hassle-free return policy.
            </p>
            
            <h2>1. Return Eligibility</h2>
            <p>You may return your order for a full refund or exchange within 15 days of delivery if:</p>
            <ul>
              <li>The item is unworn, unwashed, and unaltered</li>
              <li>The original tags are still attached</li>
              <li>The item is in its original packaging</li>
              <li>You have the original receipt or proof of purchase</li>
            </ul>
            
            <h2>2. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul>
              <li>Items that have been worn, washed, or altered</li>
              <li>Custom or personalized items</li>
              <li>Items marked as "Final Sale" or "Non-Returnable"</li>
              <li>Gift cards</li>
            </ul>
            
            <h2>3. Return Process</h2>
            <p>To initiate a return:</p>
            <ol>
              <li>Contact our customer service team at returns@muracraft.com or call +91 1234 567 890</li>
              <li>Provide your order number and the items you wish to return</li>
              <li>We will provide you with a return authorization number and shipping instructions</li>
              <li>Pack the items securely in their original packaging, if possible</li>
              <li>Include the return authorization number with your package</li>
              <li>Ship the package to the address provided in the return instructions</li>
            </ol>
            
            <h2>4. Refund Process</h2>
            <p>
              Once we receive your return and verify its condition, we will process your refund within 5-7 business days. 
              The refund will be issued to the original payment method used for the purchase.
            </p>
            <p>Please note:</p>
            <ul>
              <li>Shipping charges are non-refundable unless the return is due to our error</li>
              <li>Return shipping costs are the responsibility of the customer, except in cases of defective items</li>
              <li>It may take an additional 3-5 business days for the refund to appear in your account, depending on your payment provider</li>
            </ul>
            
            <h2>5. Exchanges</h2>
            <p>
              If you would like to exchange an item for a different size or color, please follow the return process and 
              indicate your preference for an exchange. We will process the exchange as soon as we receive your returned item.
            </p>
            <p>
              If the item you want to exchange for is not available, we will issue a refund for the returned item.
            </p>
            
            <h2>6. Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact our customer service team within 48 hours of receiving 
              your order. We will arrange for a return and replacement at no cost to you.
            </p>
            <p>
              Please provide photos of the damaged or defective item to help us process your claim more quickly.
            </p>
            
            <h2>7. Sale Items</h2>
            <p>
              Items purchased on sale or with a discount are eligible for return under the same conditions as regular-priced items, 
              unless specifically marked as "Final Sale" or "Non-Returnable."
            </p>
            
            <h2>8. Questions?</h2>
            <p>
              If you have any questions about our return policy, please contact our customer service team at 
              support@muracraft.com or call +91 1234 567 890.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

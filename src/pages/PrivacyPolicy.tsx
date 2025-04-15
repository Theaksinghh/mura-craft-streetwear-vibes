
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="bg-mura-black text-white py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: April 15, 2025</p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="prose prose-lg max-w-none">
            <p>
              At MuraCraft, we value your privacy and are committed to protecting your personal data. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, postal address, phone number, and payment information 
                when you make a purchase or create an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and 
                referring website.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our website, including IP address, 
                browser type, and operating system.
              </li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>To process and fulfill your orders</li>
              <li>To communicate with you about your order or account</li>
              <li>To provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and products</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2>3. How We Share Your Information</h2>
            <p>
              We may share your information with third parties only in the ways described in this Privacy Policy, including:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as payment processing, 
                shipping, and marketing.
              </li>
              <li>
                <strong>Business Partners:</strong> Third parties with whom we partner for joint promotional activities or co-branded services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights or the rights of others.
              </li>
            </ul>
            
            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and to better 
              understand how you use our website. You can set your browser to refuse cookies, but this may limit your ability to use 
              some features of our website.
            </p>
            
            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
            </ul>
            
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at 
              privacy@muracraft.com.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

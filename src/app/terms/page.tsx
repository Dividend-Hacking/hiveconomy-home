import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Hiveconomy logo" width={48} height={48} className="h-12 w-12 object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">Hiveconomy</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/#products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link href="/#about" className="text-gray-600 hover:text-gray-900">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using Hiveconomy&apos;s website, applications, tools, or services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms apply to all users of our Services, including our dividend tracking applications, stock screening tools, personal finance software, educational content, financial coaching services, and any related SaaS products.
              </p>
            </section>

            <section className="mb-8 bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <h2 className="text-2xl font-bold text-red-900 mb-4">2. IMPORTANT DISCLAIMERS</h2>
              
              <h3 className="text-xl font-semibold text-red-900 mb-3">2.1 No Financial or Investment Advice</h3>
              <p className="text-red-800 mb-4">
                <strong>WE DO NOT PROVIDE FINANCIAL, INVESTMENT, TAX, OR LEGAL ADVICE.</strong> All content, tools, resources, and information provided through our Services are for <strong>EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY</strong>. Nothing on our platform should be considered as personalized financial advice or a recommendation to buy, sell, or hold any investment.
              </p>

              <h3 className="text-xl font-semibold text-red-900 mb-3">2.2 Educational Use Only</h3>
              <p className="text-red-800 mb-4">
                Our dividend tracking tools, stock screeners, personal finance applications, educational content, and any coaching services are designed to help you learn about personal finance and investing concepts. They are <strong>NOT</strong> intended to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-red-800">
                <li>Replace professional financial advice</li>
                <li>Guarantee investment returns or financial outcomes</li>
                <li>Provide specific investment recommendations</li>
                <li>Offer tax, legal, or accounting advice</li>
                <li>Act as a registered investment advisor</li>
              </ul>

              <h3 className="text-xl font-semibold text-red-900 mb-3">2.3 Your Responsibility</h3>
              <p className="text-red-800 mb-4">
                <strong>ALL INVESTMENT AND FINANCIAL DECISIONS ARE YOUR OWN RESPONSIBILITY.</strong> You should consult with qualified financial, tax, and legal professionals before making any investment decisions. Past performance does not guarantee future results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Services</h2>
              <p className="text-gray-700 mb-4">Hiveconomy provides various educational tools and resources including:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Dividend Tracking Applications:</strong> Software tools to help you track and analyze dividend-paying investments for educational purposes</li>
                <li><strong>Stock Screening Tools:</strong> SaaS applications to filter and analyze stocks based on various criteria</li>
                <li><strong>Personal Finance Apps:</strong> Budgeting, expense tracking, and financial planning tools</li>
                <li><strong>Educational Content:</strong> Articles, guides, videos, and resources about personal finance and investing</li>
                <li><strong>Financial Coaching Services:</strong> Educational coaching focused on financial literacy and planning concepts</li>
                <li><strong>Premium Features:</strong> Advanced analytics, reporting, and personalized educational content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information and to keep your account information updated.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Account Security</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Prohibited Activities</h3>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Share or resell our proprietary tools or content without permission</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to access our Services without permission</li>
                <li>Provide false or misleading information</li>
                <li>Interfere with the proper functioning of our Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Paid Services</h3>
              <p className="text-gray-700 mb-4">
                Some of our Services require payment. By subscribing to paid Services, you agree to pay all applicable fees as described at the time of purchase.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Billing and Cancellation</h3>
              <p className="text-gray-700 mb-4">
                Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time, but no refunds will be provided for unused portions of paid periods unless required by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Price Changes</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to change our pricing with reasonable notice to existing subscribers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                All content, software, tools, and materials provided through our Services are owned by Hiveconomy or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">7. LIMITATION OF LIABILITY</h2>
              <p className="text-yellow-800 mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, HIVECONOMY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-yellow-800">
                <li>Investment losses or financial damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Service interruptions or downtime</li>
                <li>Any damages resulting from your use of our educational tools or content</li>
              </ul>
              <p className="text-yellow-800 mb-4">
                <strong>OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT YOU PAID FOR OUR SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers of Warranties</h2>
              <p className="text-gray-700 mb-4">
                Our Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services and Content</h2>
              <p className="text-gray-700 mb-4">
                Our Services may integrate with or display content from third-party services (such as financial data providers). We are not responsible for the accuracy, completeness, or reliability of third-party content or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our Services at any time, with or without cause, with or without notice. You may also terminate your account at any time by contacting us or using the account deletion features in our applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Geographic Restrictions</h2>
              <p className="text-gray-700 mb-4">
                Our Services are intended for users in jurisdictions where such services are legal. You are responsible for ensuring your use of our Services complies with applicable local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless Hiveconomy and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney fees) arising from your use of our Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration or in the courts having jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may modify these Terms at any time by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@hiveconomy.com</p>
                <p className="text-gray-700"><strong>Website:</strong> <Link href="/" className="text-blue-600 hover:text-blue-800">hiveconomy.com</Link></p>
              </div>
            </section>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Remember:</strong> Hiveconomy provides educational tools and resources only. Always consult with qualified financial professionals before making investment decisions. Your financial future is your responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 Hiveconomy. All rights reserved. | 
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 ml-2">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
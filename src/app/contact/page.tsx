import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-cream)] py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brand-charcoal)] mb-6">
                Let’s Create Better Gifting Together.
              </h1>
              <p className="text-lg text-[var(--color-brand-charcoal)]/80 mb-10">
                Whether you're a user looking for help, or a brand wanting to partner with us, we'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-brand-charcoal)] mb-2">Are You a Brand?</h2>
                  <p className="text-[var(--color-brand-charcoal)]/70 mb-4">
                    Have a product people would love to gift? We collaborate on product discovery, social media campaigns, and gift curation.
                  </p>
                  <a href="mailto:brands@unboxd.com" className="font-bold text-[var(--color-brand-orange)] hover:underline">
                    Partner With UNBOXD &rarr;
                  </a>
                </div>
                
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-brand-charcoal)] mb-2">General Enquiries</h2>
                  <a href="mailto:hello@unboxd.com" className="font-bold text-[var(--color-brand-teal)] hover:underline">
                    hello@unboxd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--color-brand-taupe)]/20">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[var(--color-brand-charcoal)] mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-[var(--color-brand-taupe)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-teal)] bg-[var(--color-brand-cream)]/30" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[var(--color-brand-charcoal)] mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-[var(--color-brand-taupe)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-teal)] bg-[var(--color-brand-cream)]/30" placeholder="Your email address" />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-bold text-[var(--color-brand-charcoal)] mb-2">Reason for contacting</label>
                  <select id="reason" className="w-full px-4 py-3 rounded-xl border border-[var(--color-brand-taupe)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-teal)] bg-[var(--color-brand-cream)]/30">
                    <option>General Enquiry</option>
                    <option>Brand Collaboration</option>
                    <option>Creator Collaboration</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[var(--color-brand-charcoal)] mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-[var(--color-brand-taupe)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-teal)] bg-[var(--color-brand-cream)]/30" placeholder="How can we help?"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

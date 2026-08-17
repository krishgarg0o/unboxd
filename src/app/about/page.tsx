import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-cream)] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-brand-charcoal)] mb-8 text-center">
            Why UNBOXD Exists
          </h1>
          
          <div className="prose prose-lg prose-p:text-[var(--color-brand-charcoal)]/80 prose-h2:font-serif prose-h2:text-3xl prose-h2:font-bold prose-h2:text-[var(--color-brand-charcoal)] mx-auto">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-center">
              People don't struggle because they don't want to gift. <br/>
              They struggle because they don't know what to gift.
            </p>

            <p>
              UNBOXD exists to make that decision easier. We believe that gifting shouldn't feel like a chore, an obligation, or a frantic last-minute scramble through endless ecommerce pages.
            </p>

            <blockquote className="border-l-4 border-[var(--color-brand-orange)] pl-6 py-2 my-10 italic font-serif text-2xl">
              We believe the best gifts aren’t necessarily the biggest or most expensive. They’re the ones that show you paid attention.
            </blockquote>

            <h2 className="mt-12 mb-6">Our Core Philosophy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8">
              <div className="p-4 bg-white rounded-xl border border-[var(--color-brand-taupe)]/20 shadow-sm">
                <span className="font-bold text-[var(--color-brand-teal)] block mb-1">Thoughtful</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[var(--color-brand-taupe)]/20 shadow-sm">
                <span className="font-bold text-[var(--color-brand-teal)] block mb-1">Personal</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[var(--color-brand-taupe)]/20 shadow-sm">
                <span className="font-bold text-[var(--color-brand-teal)] block mb-1">Affordable</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[var(--color-brand-taupe)]/20 shadow-sm">
                <span className="font-bold text-[var(--color-brand-teal)] block mb-1">Relevant</span>
              </div>
            </div>

            <p>
              Don't just gift something. Gift something that makes sense for them. Less scrolling. Less guessing. Better gifting.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

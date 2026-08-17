import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { gifts } from "@/lib/data/gifts";
import { GiftCard } from "@/components/ui/GiftCard";

export default function GiftIdeasPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-cream)] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brand-charcoal)] mb-4">
              Explore Gift Ideas
            </h1>
            <p className="text-lg text-[var(--color-brand-charcoal)]/80 max-w-2xl mx-auto">
              Browse our curated collection of thoughtful gifts for every personality, relationship, and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gifts.map(gift => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

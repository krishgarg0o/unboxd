import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { gifts } from "@/lib/data/gifts";
import { GiftCard } from "@/components/ui/GiftCard";

export default function GiftIdeasPage() {
  const sisterGifts = gifts.filter(g => g.relationships.includes("Sister"));
  const brotherGifts = gifts.filter(g => g.relationships.includes("Brother"));
  const partnerGifts = gifts.filter(g => g.relationships.includes("Partner"));
  const bestFriendGifts = gifts.filter(g => g.relationships.includes("Best Friend"));

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
          
          <div className="space-y-16">
            <section id="sister" className="scroll-mt-24">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-charcoal)] mb-6 border-b border-[var(--color-brand-taupe)]/20 pb-4">
                Gifts for Sister
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sisterGifts.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </section>

            <section id="brother" className="scroll-mt-24">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-charcoal)] mb-6 border-b border-[var(--color-brand-taupe)]/20 pb-4">
                Gifts for Brother
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brotherGifts.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </section>

            <section id="partner" className="scroll-mt-24">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-charcoal)] mb-6 border-b border-[var(--color-brand-taupe)]/20 pb-4">
                Gifts for Partner
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerGifts.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </section>

            <section id="best-friend" className="scroll-mt-24">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-charcoal)] mb-6 border-b border-[var(--color-brand-taupe)]/20 pb-4">
                Gifts for Best Friend
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestFriendGifts.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </section>
            
            <section id="all-gifts" className="scroll-mt-24">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-charcoal)] mb-6 border-b border-[var(--color-brand-taupe)]/20 pb-4">
                All Gifts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {gifts.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

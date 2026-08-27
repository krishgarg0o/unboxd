import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GiftFinder } from "@/components/features/GiftFinder";
import { Button } from "@/components/ui/Button";
import { gifts } from "@/lib/data/gifts";
import { GiftCard } from "@/components/ui/GiftCard";

export default function Home() {
  const trendingGifts = gifts.slice(0, 4);
  const under500Gifts = gifts.filter(g => g.price < 500).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero-bg.jpeg" 
              alt="Premium Gifting Background"
              fill
              className="object-cover object-right md:object-[80%_center]"
              priority
            />
            {/* Soft gradient to ensure text readability without hiding the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent w-full md:w-4/5"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col items-start text-left pt-20 pb-16">
            <p className="text-[var(--color-brand-charcoal)] font-semibold text-xl md:text-2xl mb-8">
              Making thoughtful gifting effortless.
            </p>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[110px] font-bold text-[var(--color-brand-charcoal)] leading-tight tracking-tight mb-12">
              Gift better.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto mb-8">
              <Link href="#gift-finder" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-[var(--color-brand-teal)] text-white hover:bg-[var(--color-brand-teal)]/90 text-base md:text-lg h-14 px-8 font-semibold border-0 shadow-lg transition-transform hover:scale-105">
                  Find My Perfect Gift
                </Button>
              </Link>
              <Link href="/gift-ideas" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-white text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-cream)] text-base md:text-lg h-14 px-8 font-semibold border-0 shadow-lg transition-transform hover:scale-105">
                  Explore Gift Ideas
                </Button>
              </Link>
            </div>
            
            <Link href="#how-it-works">
               <Button variant="outline" className="rounded-full border-2 border-[var(--color-brand-charcoal)]/20 bg-transparent text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-charcoal)]/5 hover:border-[var(--color-brand-charcoal)]/40 text-base md:text-lg h-14 px-8 font-semibold transition-all">
                 Or Read How It Works &gt;
               </Button>
            </Link>
          </div>
        </section>

        {/* Quick Category Section */}
        <section className="py-16 bg-[var(--color-brand-cream)]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-brand-charcoal)]">
                Who Are You Gifting?
              </h2>
            </div>
            
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 gap-4 hide-scrollbar">
              {[
                { relation: 'Sister', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
                { relation: 'Brother', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
                { relation: 'Partner', img: '/partner.jpeg' },
                { relation: 'Best Friend', img: '/best-friend.jpeg' }
              ].map(({ relation, img }) => (
                <Link href={`/gift-ideas#${relation.toLowerCase().replace(' ', '-')}`} key={relation} className="min-w-[200px] md:min-w-0 flex-shrink-0 group block">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-[var(--color-brand-beige)]">
                    <Image 
                      src={img}
                      alt={`Gifts for ${relation}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-serif text-2xl font-bold mb-1">{relation}</h3>
                      <span className="text-white/90 text-sm font-medium flex items-center gap-1 group-hover:text-[var(--color-brand-orange)] transition-colors">
                        Find Gifts &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How UNBOXD Works */}
        <section id="how-it-works" className="py-20 bg-[var(--color-brand-cream)]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-brand-charcoal)] mb-16">
              Your Perfect Gift, In 3 Simple Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-6xl font-serif text-[var(--color-brand-teal)]/20 font-black mb-4">01</span>
                <h3 className="font-bold text-xl mb-3">Tell Us About Them</h3>
                <p className="text-[var(--color-brand-charcoal)]/70">Choose who you’re gifting and tell us what they’re like.</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl font-serif text-[var(--color-brand-teal)]/20 font-black mb-4">02</span>
                <h3 className="font-bold text-xl mb-3">We Find The Match</h3>
                <p className="text-[var(--color-brand-charcoal)]/70">UNBOXD finds gift ideas based on their personality, interests, relationship and your budget.</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl font-serif text-[var(--color-brand-teal)]/20 font-black mb-4">03</span>
                <h3 className="font-bold text-xl mb-3">Pick The One That Feels Right</h3>
                <p className="text-[var(--color-brand-charcoal)]/70">Explore the recommendations and choose the gift that feels most like them.</p>
              </div>
            </div>
            
            <div className="mt-16">
              <Link href="#gift-finder">
                <Button variant="outline" size="lg" className="rounded-full border-2 border-[var(--color-brand-teal)] text-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)] hover:text-white">
                  Take the Gift Quiz &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gift Finder */}
        <section className="py-12 bg-[var(--color-brand-cream)] border-y border-[var(--color-brand-taupe)]/20">
          <GiftFinder />
        </section>

        {/* Gifts Under ₹500 */}
        <section className="py-20 bg-[var(--color-brand-cream)]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-brand-charcoal)] mb-3">
                  Thoughtful Doesn’t Have to Be Expensive.
                </h2>
                <p className="text-[var(--color-brand-charcoal)]/70 max-w-2xl text-lg">
                  Gift ideas under ₹500 that don’t feel like you spent five minutes choosing them.
                </p>
              </div>
              <Link href="/gift-ideas#under-500">
                <Button variant="ghost" className="font-bold text-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)]/10">
                  View All Under ₹500 &rarr;
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {under500Gifts.map(gift => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Right Now */}
        <section className="py-20 bg-[var(--color-brand-cream)]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-brand-charcoal)] mb-10">
              People Are Gifting These Right Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingGifts.map(gift => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--color-brand-teal)] py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Still Don’t Know What To Gift?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
              Tell us about them. We’ll help you find something they’ll actually love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#gift-finder">
                <Button size="lg" className="rounded-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white border-0">
                  Find Their Perfect Gift &rarr;
                </Button>
              </Link>
              <Link href="/gift-ideas">
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-[var(--color-brand-teal)]">
                  Explore Gift Ideas
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const guides = [
  {
    id: "g1",
    title: "10 Thoughtful Gifts for Your Girlfriend Under ₹500",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    category: "Budget Gifting"
  },
  {
    id: "g2",
    title: "What to Gift Someone Who Has Everything",
    image: "https://images.unsplash.com/photo-1607344645866-eea33a4e2e27?q=80&w=600&auto=format&fit=crop",
    category: "Expert Advice"
  },
  {
    id: "g3",
    title: "7 Gifts That Feel Personal Without Being Expensive",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop",
    category: "Thoughtful Picks"
  }
];

export default function GiftGuidesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-[var(--color-brand-teal)] uppercase mb-4 block">Editorial</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--color-brand-charcoal)] mb-6">
              The UNBOXD Gift Guide
            </h1>
            <p className="text-lg text-[var(--color-brand-charcoal)]/80">
              Curated ideas, gifting etiquette, and inspiration for when you’re completely stuck.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map(guide => (
              <article key={guide.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-brand-beige)] mb-6">
                  <Image 
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold tracking-wider text-[var(--color-brand-orange)] uppercase mb-2 block">
                  {guide.category}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-teal)] transition-colors leading-snug">
                  {guide.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const occasions = [
  { name: "Birthday", image: "/birthday.jpg" },
  { name: "Anniversary", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop" },
  { name: "Valentine’s Day", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop" },
  { name: "Friendship Day", image: "/friendship-day.jpg" },
  { name: "Graduation", image: "/graduation.jpg" },
  { name: "Just Because", image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=600&auto=format&fit=crop" },
];

export default function OccasionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-cream)] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brand-charcoal)] mb-4">
              Shop by Occasion
            </h1>
            <p className="text-lg text-[var(--color-brand-charcoal)]/80 max-w-2xl mx-auto">
              Find the perfect gift for every milestone, celebration, and "just because" moment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map(occasion => (
              <Link href={`/gift-ideas?occasion=${occasion.name}`} key={occasion.name} className="group block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-brand-beige)]">
                  <Image 
                    src={occasion.image}
                    alt={`${occasion.name} Gifts`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white font-serif text-3xl font-bold">{occasion.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

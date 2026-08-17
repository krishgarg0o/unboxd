"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gift } from "@/lib/data/gifts";
import { GiftCard } from "@/components/ui/GiftCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SavedGiftsPage() {
  const [savedGifts, setSavedGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("unboxd_saved") || "[]");
    setSavedGifts(saved);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-cream)] py-16 min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brand-charcoal)] mb-4">
              Your Saved Gifts
            </h1>
          </div>
          
          {savedGifts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedGifts.map(gift => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-[var(--color-brand-taupe)]/20 shadow-sm max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-[var(--color-brand-charcoal)] mb-4">
                Nothing here yet.
              </h2>
              <p className="text-[var(--color-brand-charcoal)]/70 mb-8">
                Start finding gifts you’ll want to remember.
              </p>
              <Link href="/#gift-finder">
                <Button size="lg" className="rounded-full">
                  Find My Gift &rarr;
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

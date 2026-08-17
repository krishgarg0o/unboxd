"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Gift } from "@/lib/data/gifts";
import { Button } from "./Button";
import { useState, useEffect } from "react";

interface GiftCardProps {
  gift: Gift;
  explanation?: string;
  matchScore?: number;
}

export function GiftCard({ gift, explanation, matchScore }: GiftCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Basic localstorage saved state
    const saved = JSON.parse(localStorage.getItem("unboxd_saved") || "[]");
    setIsSaved(saved.some((g: Gift) => g.id === gift.id));
  }, [gift.id]);

  const toggleSave = () => {
    let saved = JSON.parse(localStorage.getItem("unboxd_saved") || "[]");
    if (isSaved) {
      saved = saved.filter((g: Gift) => g.id !== gift.id);
    } else {
      saved.push(gift);
    }
    localStorage.setItem("unboxd_saved", JSON.stringify(saved));
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[var(--color-brand-taupe)]/20">
      {/* Image Area */}
      <div className="relative aspect-square w-full bg-[var(--color-brand-beige)]/30">
        <Image
          src={gift.image}
          alt={gift.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button
          onClick={toggleSave}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-105 transition-transform"
          aria-label={isSaved ? "Remove from saved" : "Save gift"}
        >
          <Heart className={`w-5 h-5 ${isSaved ? "fill-[var(--color-brand-orange)] text-[var(--color-brand-orange)]" : "text-[var(--color-brand-charcoal)]"}`} />
        </button>
        {matchScore && (
          <div className="absolute top-4 left-4 bg-[var(--color-brand-teal)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {matchScore}% Match ✦
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-serif font-bold text-lg text-[var(--color-brand-charcoal)] leading-tight">
            {gift.name}
          </h3>
          <span className="font-semibold text-[var(--color-brand-teal)] whitespace-nowrap">
            ₹{gift.price}
          </span>
        </div>
        
        <p className="text-sm text-[var(--color-brand-charcoal)]/70 mb-4 line-clamp-2">
          {gift.description}
        </p>

        {explanation && (
          <div className="bg-[var(--color-brand-beige)]/50 rounded-xl p-4 mb-4 mt-auto">
            <h4 className="text-xs font-bold text-[var(--color-brand-teal)] uppercase tracking-wider mb-1">
              Why we picked this for them
            </h4>
            <p className="text-sm text-[var(--color-brand-charcoal)]/80 italic">
              "{explanation}"
            </p>
          </div>
        )}

        <div className="mt-auto pt-4 flex gap-2 w-full">
          <Button className="w-full rounded-xl" asChild>
            <a href={gift.externalUrl} target="_blank" rel="noopener noreferrer">
              Explore Gift &rarr;
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

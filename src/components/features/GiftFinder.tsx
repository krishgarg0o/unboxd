"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GiftCard } from "@/components/ui/GiftCard";
import { getRecommendations, QuizAnswers, Recommendation } from "@/lib/recommendations";

const steps = [
  {
    id: "relationship",
    question: "Who are you gifting?",
    options: ["Sister", "Brother", "Best Friend", "Partner", "Parent", "Colleague", "Someone Special", "Other"],
    multi: false,
  },
  {
    id: "vibe",
    question: "What’s their vibe?",
    options: ["Creative", "Sentimental", "Fashion-forward", "Adventurous", "Cozy", "Fun-loving", "Minimalist", "Ambitious", "Foodie", "Sporty", "Tech lover"],
    multi: true,
  },
  {
    id: "interests",
    question: "What are they into?",
    options: ["Music", "Fashion", "Beauty", "Books", "Travel", "Food", "Art", "Photography", "Gaming", "Fitness", "Coffee", "Sports"],
    multi: true,
  },
  {
    id: "budget",
    question: "What’s your budget?",
    options: ["Under ₹300", "₹300–₹500", "₹500–₹1,000", "₹1,000–₹2,500", "₹2,500–₹5,000", "₹5,000+", "I’m flexible"],
    multi: false,
  },
  {
    id: "giftType",
    question: "What kind of gift are you looking for?",
    options: ["Personalised", "Sentimental", "Useful", "Fun", "Cute", "Romantic", "Luxury", "Handmade", "Experience", "Surprise Hamper"],
    multi: false,
  },
  {
    id: "effort",
    question: "How much effort do you want to put in?",
    options: ["I need it ASAP.", "I’ll put in a little effort.", "I want to make it really special.", "I want them to cry happy tears."],
    multi: false,
  }
];

export function GiftFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    relationship: "",
    vibe: [],
    interests: [],
    budget: "",
    giftType: "",
    effort: "",
  });
  const [results, setResults] = useState<Recommendation[] | null>(null);

  const handleSelect = (option: string) => {
    const stepId = steps[currentStep].id as keyof QuizAnswers;
    const isMulti = steps[currentStep].multi;

    if (isMulti) {
      setAnswers((prev) => {
        const currentArr = prev[stepId] as string[];
        if (currentArr.includes(option)) {
          return { ...prev, [stepId]: currentArr.filter(i => i !== option) };
        } else {
          return { ...prev, [stepId]: [...currentArr, option] };
        }
      });
    } else {
      setAnswers((prev) => ({ ...prev, [stepId]: option }));
      // Automatically go to next step for single select after a short delay
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      generateResults();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const generateResults = () => {
    // Generate results
    const recs = getRecommendations(answers);
    setResults(recs);
  };

  const resetQuiz = () => {
    setAnswers({
      relationship: "",
      vibe: [],
      interests: [],
      budget: "",
      giftType: "",
      effort: "",
    });
    setCurrentStep(0);
    setResults(null);
  };

  const handleShare = async () => {
    const shareText = `UNBOXD says my gift-giving instincts are 94% ✦. I found the perfect gift!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My UNBOXD Gift Match',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      navigator.clipboard.writeText(shareText + " " + window.location.href);
      alert("Result link copied to clipboard!");
    }
  };

  if (results) {
    return (
      <div className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brand-charcoal)] mb-4">
            We Think We’ve Got Them Figured Out. 👀
          </h2>
          <p className="text-lg text-[var(--color-brand-charcoal)]/80 max-w-2xl mx-auto">
            Based on what you told us, they're {answers.vibe.slice(0, 2).join(" and ")} and into {answers.interests.slice(0, 2).join(" and ")}.
          </p>
          <div className="mt-6 flex justify-center items-center gap-3">
            <span className="bg-[var(--color-brand-teal)] text-white px-4 py-2 rounded-full font-bold shadow-sm">
              Your Gift Match ✦
            </span>
            <span className="text-sm italic font-medium text-[var(--color-brand-orange)]">
              Okay, you actually know them.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map((rec) => (
            <GiftCard 
              key={rec.gift.id} 
              gift={rec.gift} 
              explanation={rec.explanation} 
              matchScore={rec.matchScore} 
            />
          ))}
          {results.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-[var(--color-brand-charcoal)]/70">
                We couldn't find a perfect match, but we have some great alternatives!
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={handleShare} className="w-full sm:w-auto" size="lg">
            Share My Gift Match &rarr;
          </Button>
          <Button variant="secondary" onClick={resetQuiz} className="w-full sm:w-auto" size="lg">
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  const step = steps[currentStep];
  const stepId = step.id as keyof QuizAnswers;
  const currentAnswer = answers[stepId];
  const isMulti = step.multi;
  const hasAnswer = isMulti ? (currentAnswer as string[]).length > 0 : !!currentAnswer;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div id="gift-finder" className="w-full max-w-2xl mx-auto py-12 px-4 min-h-[600px] flex flex-col">
      {/* Header & Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={handleBack} 
            className={`p-2 rounded-full hover:bg-[var(--color-brand-taupe)]/20 transition-colors ${currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--color-brand-charcoal)]" />
          </button>
          <span className="text-sm font-bold tracking-widest text-[var(--color-brand-teal)] uppercase">
            Step {currentStep + 1} of {steps.length}
          </span>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        <div className="h-2 w-full bg-[var(--color-brand-taupe)]/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[var(--color-brand-orange)]"
            initial={{ width: `${(currentStep / steps.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[var(--color-brand-charcoal)] mb-8">
              {step.question}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {step.options.map((option) => {
                const isSelected = isMulti 
                  ? (currentAnswer as string[]).includes(option)
                  : currentAnswer === option;

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`p-4 rounded-2xl text-sm md:text-base font-medium transition-all duration-200 border-2 ${
                      isSelected 
                        ? "bg-[var(--color-brand-teal)] text-white border-[var(--color-brand-teal)] shadow-md transform scale-[1.02]" 
                        : "bg-white text-[var(--color-brand-charcoal)] border-transparent hover:border-[var(--color-brand-taupe)]/50 hover:shadow-sm"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer controls (for multi-select or if user didn't auto-advance) */}
      <div className="mt-8 pt-4 flex justify-end min-h-[60px]">
        {hasAnswer && (isMulti || currentStep === steps.length - 1) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button onClick={handleNext} size="lg" className="rounded-full px-8">
              {currentStep === steps.length - 1 ? "Find My Gift 👀" : "Next \u2192"}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

import { Gift, gifts, PriceRange, EffortLevel } from './data/gifts';

export interface QuizAnswers {
  relationship: string;
  vibe: string[];
  interests: string[];
  budget: PriceRange | "";
  giftType: string;
  effort: EffortLevel | "";
}

export interface Recommendation {
  gift: Gift;
  matchScore: number;
  explanation: string;
}

export function getRecommendations(answers: QuizAnswers): Recommendation[] {
  const scoredGifts = gifts.map((gift) => {
    let score = 0;
    let maxPossibleScore = 0;
    const matchReasons: string[] = [];

    // 1. Relationship
    if (answers.relationship) {
      maxPossibleScore += 20;
      if (gift.relationships.includes(answers.relationship)) {
        score += 20;
      }
    }

    // 2. Personality/Vibe
    if (answers.vibe.length > 0) {
      const matchedVibes = gift.personalities.filter(p => answers.vibe.includes(p));
      maxPossibleScore += (answers.vibe.length * 15);
      score += (matchedVibes.length * 15);
      if (matchedVibes.length > 0) {
        matchReasons.push(`they're ${matchedVibes.join(" and ")}`);
      }
    }

    // 3. Interests
    if (answers.interests.length > 0) {
      const matchedInterests = gift.interests.filter(i => answers.interests.includes(i));
      maxPossibleScore += (answers.interests.length * 15);
      score += (matchedInterests.length * 15);
      if (matchedInterests.length > 0) {
        matchReasons.push(`into ${matchedInterests.join(" and ")}`);
      }
    }

    // 4. Budget
    if (answers.budget) {
      maxPossibleScore += 20;
      if (answers.budget === "I’m flexible" || gift.priceRange === answers.budget) {
        score += 20;
        if (answers.budget !== "I’m flexible") {
          matchReasons.push(`it perfectly fits your budget`);
        }
      }
    }

    // 5. Gift Type
    if (answers.giftType) {
      maxPossibleScore += 15;
      if (gift.giftTypes.includes(answers.giftType)) {
        score += 15;
        matchReasons.push(`you wanted something ${answers.giftType.toLowerCase()}`);
      }
    }

    // 6. Effort Level
    if (answers.effort) {
      maxPossibleScore += 10;
      if (gift.effortLevel.includes(answers.effort as EffortLevel)) {
        score += 10;
      }
    }

    // Calculate percentage score
    // Normalise to avoid weird edge cases, minimum 40% if there is some overlap, just for UX.
    let percentage = maxPossibleScore > 0 ? Math.round((score / maxPossibleScore) * 100) : 0;
    if (percentage > 98) percentage = 98; // Keeps it feeling organic

    // Generate explanation
    let explanation = "This felt like an easy match.";
    if (matchReasons.length > 0) {
      const formattedReasons = matchReasons.join(", ");
      explanation = `You said ${formattedReasons} — so this felt like an easy match.`;
    }

    return {
      gift,
      matchScore: percentage,
      explanation
    };
  });

  // Sort by score descending and return top 3-5
  return scoredGifts
    .filter(g => g.matchScore > 10) // Filter out completely irrelevant ones
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4); // return top 4
}

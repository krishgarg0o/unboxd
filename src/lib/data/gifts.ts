export type PriceRange =
  | "Under ₹300"
  | "₹300–₹500"
  | "₹500–₹1,000"
  | "₹1,000–₹2,500"
  | "₹2,500–₹5,000"
  | "₹5,000+"
  | "I’m flexible";

export type EffortLevel =
  | "I need it ASAP."
  | "I’ll put in a little effort."
  | "I want to make it really special."
  | "I want them to cry happy tears.";

export interface Gift {
  id: string;
  name: string;
  description: string;
  image: string; // Placeholder or actual path
  price: number;
  priceRange: PriceRange;
  relationships: string[]; // e.g., Sister, Brother, Best Friend, Partner, Parent, Colleague, Someone Special
  occasions: string[];
  personalities: string[]; // e.g., Creative, Sentimental, Fashion-forward, Adventurous, Cozy, Fun-loving, Minimalist, Ambitious, Foodie, Sporty, Tech lover
  interests: string[]; // e.g., Music, Fashion, Beauty, Books, Travel, Food, Art, Photography, Gaming, Fitness, Coffee, Sports
  giftTypes: string[]; // e.g., Personalised, Sentimental, Useful, Fun, Cute, Romantic, Luxury, Handmade, Experience, Surprise Hamper
  personalised: boolean;
  effortLevel: EffortLevel[];
  externalUrl?: string;
}

export const gifts: Gift[] = [
  {
    id: "g1",
    name: "Personalised Memory Frame",
    description: "A beautiful wooden frame displaying your favourite memories together.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop", // picture frame
    price: 499,
    priceRange: "₹300–₹500",
    relationships: ["Parent", "Girlfriend", "Boyfriend"],
    occasions: ["Birthday", "Anniversary", "Friendship Day", "Just Because"],
    personalities: ["Sentimental", "Cozy"],
    interests: ["Photography", "Art", "Travel"],
    giftTypes: ["Personalised", "Sentimental", "Cute"],
    personalised: true,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g2",
    name: "Curated Snack & Coffee Box",
    description: "An artisanal selection of gourmet coffees and sweet treats.",
    image: "/curated-box.jpeg", // coffee and snack
    price: 850,
    priceRange: "₹500–₹1,000",
    relationships: ["Brother", "Colleague", "Boyfriend"],
    occasions: ["Birthday", "Graduation", "Just Because"],
    personalities: ["Foodie", "Fun-loving"],
    interests: ["Food", "Coffee"],
    giftTypes: ["Surprise Hamper", "Fun", "Useful"],
    personalised: false,
    effortLevel: ["I need it ASAP.", "I’ll put in a little effort."],
    externalUrl: "#"
  },
  {
    id: "g3",
    name: "Minimalist Leather Passport Holder",
    description: "A sleek, monogrammed passport holder for their next adventure.",
    image: "https://images.unsplash.com/photo-1627993077309-847248107573?q=80&w=600&auto=format&fit=crop", // passport / leather
    price: 1200,
    priceRange: "₹1,000–₹2,500",
    relationships: ["Girlfriend", "Boyfriend"],
    occasions: ["Birthday", "Anniversary", "Graduation"],
    personalities: ["Adventurous", "Minimalist", "Fashion-forward"],
    interests: ["Travel", "Fashion"],
    giftTypes: ["Useful", "Personalised", "Luxury"],
    personalised: true,
    effortLevel: ["I’ll put in a little effort.", "I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g4",
    name: "Hand-poured Soy Candle Set",
    description: "Aesthetic, cozy candles that smell like a warm hug.",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=600&auto=format&fit=crop", // candles
    price: 450,
    priceRange: "₹300–₹500",
    relationships: ["Someone Special", "Colleague", "Mom", "Girlfriend"],
    occasions: ["Birthday", "Diwali", "Just Because", "Housewarming"],
    personalities: ["Cozy", "Sentimental"],
    interests: ["Books", "Beauty", "Art"],
    giftTypes: ["Handmade", "Cute", "Sentimental"],
    personalised: false,
    effortLevel: ["I need it ASAP.", "I’ll put in a little effort."],
    externalUrl: "#"
  },
  {
    id: "g5",
    name: "Smart Temperature Control Mug",
    description: "Keeps their coffee perfectly hot for hours.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop", // mug
    price: 2800,
    priceRange: "₹2,500–₹5,000",
    relationships: ["Parent", "Colleague", "Dad", "Boyfriend"],
    occasions: ["Birthday", "Anniversary", "Father's Day"],
    personalities: ["Tech lover", "Ambitious", "Minimalist"],
    interests: ["Coffee", "Tech"],
    giftTypes: ["Useful", "Luxury"],
    personalised: false,
    effortLevel: ["I need it ASAP."],
    externalUrl: "#"
  },
  {
    id: "g6",
    name: "Custom Spotify Glass Plaque",
    description: "Their favourite song printed on a sleek glass plaque.",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&auto=format&fit=crop", // glass / music
    price: 599,
    priceRange: "₹500–₹1,000",
    relationships: ["Partner", "Someone Special", "Girlfriend", "Boyfriend"],
    occasions: ["Anniversary", "Valentine’s Day", "Birthday"],
    personalities: ["Sentimental", "Creative"],
    interests: ["Music", "Art"],
    giftTypes: ["Personalised", "Romantic", "Cute"],
    personalised: true,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g7",
    name: "Weekend Getaway Experience",
    description: "A fully booked luxury cabin stay for two.",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=600&auto=format&fit=crop", // cabin
    price: 8500,
    priceRange: "₹5,000+",
    relationships: ["Partner", "Parent", "Girlfriend", "Boyfriend", "Couples"],
    occasions: ["Anniversary", "Valentine’s Day"],
    personalities: ["Adventurous", "Sentimental"],
    interests: ["Travel", "Photography"],
    giftTypes: ["Experience", "Luxury", "Romantic"],
    personalised: false,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g8",
    name: "Aesthetic Daily Planner",
    description: "A beautifully bound journal for their goals and thoughts.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop", // planner
    price: 650,
    priceRange: "₹500–₹1,000",
    relationships: ["Sister", "Colleague", "Mom"],
    occasions: ["Birthday", "Graduation", "Just Because", "New Year"],
    personalities: ["Ambitious", "Creative", "Minimalist"],
    interests: ["Books", "Art"],
    giftTypes: ["Useful", "Cute"],
    personalised: false,
    effortLevel: ["I need it ASAP.", "I’ll put in a little effort."],
    externalUrl: "#"
  },
  {
    id: "g9",
    name: "Quirky Desk Plant (Succulent)",
    description: "Low-maintenance green buddy for their workspace.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop", // plant
    price: 250,
    priceRange: "Under ₹300",
    relationships: ["Colleague", "Friend"],
    occasions: ["Just Because", "Birthday"],
    personalities: ["Cozy", "Minimalist"],
    interests: ["Art", "Photography"],
    giftTypes: ["Cute", "Useful"],
    personalised: false,
    effortLevel: ["I need it ASAP."],
    externalUrl: "#"
  },
  {
    id: "g10",
    name: "Vintage Film Camera",
    description: "An authentic, refurbished point-and-shoot film camera.",
    image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=600&auto=format&fit=crop", // camera
    price: 3500,
    priceRange: "₹2,500–₹5,000",
    relationships: ["Partner", "Sister", "Boyfriend", "Girlfriend"],
    occasions: ["Birthday", "Graduation"],
    personalities: ["Creative", "Fashion-forward", "Adventurous"],
    interests: ["Photography", "Fashion", "Art"],
    giftTypes: ["Sentimental", "Experience", "Luxury"],
    personalised: false,
    effortLevel: ["I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g11",
    name: "Hot Wheels Car Bouquet",
    description: "A fun and unique bouquet made entirely of Hot Wheels cars.",
    image: "/hotwheels.jpeg",
    price: 1500,
    priceRange: "₹1,000–₹2,500",
    relationships: ["Brother", "Boyfriend"],
    occasions: ["Birthday", "Graduation", "Just Because"],
    personalities: ["Fun-loving", "Adventurous"],
    interests: ["Gaming", "Sports"],
    giftTypes: ["Fun", "Surprise Hamper", "Creative"],
    personalised: false,
    effortLevel: ["I’ll put in a little effort.", "I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g12",
    name: "Silver & Gold Knot Bracelet",
    description: "A stylish two-tone metal knot bracelet.",
    image: "/bracelet.jpeg",
    price: 3200,
    priceRange: "₹2,500–₹5,000",
    relationships: ["Brother", "Partner", "Boyfriend"],
    occasions: ["Birthday", "Graduation", "Anniversary"],
    personalities: ["Fashion-forward", "Minimalist"],
    interests: ["Fashion"],
    giftTypes: ["Luxury", "Personalised", "Sentimental"],
    personalised: false,
    effortLevel: ["I’ll put in a little effort."],
    externalUrl: "#"
  },
  {
    id: "g13",
    name: "Brother Photo Collage Frame",
    description: "A custom photo collage capturing your best sibling moments.",
    image: "/collage.jpeg",
    price: 899,
    priceRange: "₹500–₹1,000",
    relationships: ["Brother"],
    occasions: ["Birthday", "Friendship Day", "Just Because"],
    personalities: ["Sentimental", "Cozy"],
    interests: ["Photography", "Art"],
    giftTypes: ["Personalised", "Sentimental", "Cute"],
    personalised: true,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g14",
    name: "Memory Shadow Box",
    description: "A beautiful display case to hold your favorite photos, tickets, and little keepsakes.",
    image: "/shadowbox.jpeg",
    price: 1200,
    priceRange: "₹1,000–₹2,500",
    relationships: ["Partner"],
    occasions: ["Birthday", "Anniversary", "Just Because"],
    personalities: ["Sentimental", "Creative"],
    interests: ["Photography", "Art"],
    giftTypes: ["Personalised", "Sentimental", "Handmade"],
    personalised: true,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g15",
    name: "52 Reasons I Love You Cards",
    description: "A deck of playing cards customized with 52 unique reasons why you love them.",
    image: "/52reasons.jpeg",
    price: 499,
    priceRange: "₹300–₹500",
    relationships: ["Partner"],
    occasions: ["Birthday", "Valentine’s Day", "Just Because"],
    personalities: ["Sentimental", "Cozy"],
    interests: ["Art"],
    giftTypes: ["Sentimental", "Handmade", "Cute"],
    personalised: true,
    effortLevel: ["I want to make it really special.", "I want them to cry happy tears."],
    externalUrl: "#"
  },
  {
    id: "g16",
    name: "Custom Photo Puzzle",
    description: "Your favorite picture together turned into a fun puzzle they can put together.",
    image: "/photopuzzle.jpeg",
    price: 799,
    priceRange: "₹500–₹1,000",
    relationships: ["Partner"],
    occasions: ["Birthday", "Friendship Day", "Anniversary"],
    personalities: ["Fun-loving", "Sentimental"],
    interests: ["Gaming", "Photography"],
    giftTypes: ["Fun", "Personalised", "Sentimental"],
    personalised: true,
    effortLevel: ["I’ll put in a little effort.", "I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g17",
    name: "Ferris Wheel Photo Frame",
    description: "A cute, rotating wooden Ferris wheel frame to hold all your favorite memories.",
    image: "/ferriswheel.jpeg",
    price: 999,
    priceRange: "₹500–₹1,000",
    relationships: ["Best Friend"],
    occasions: ["Birthday", "Friendship Day", "Just Because"],
    personalities: ["Sentimental", "Fun-loving"],
    interests: ["Photography", "Art"],
    giftTypes: ["Personalised", "Cute", "Sentimental"],
    personalised: true,
    effortLevel: ["I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g18",
    name: "Custom Printed Pajamas",
    description: "Hilarious matching pajamas printed with custom faces, pets, or inside jokes.",
    image: "/custompjs.jpeg",
    price: 1500,
    priceRange: "₹1,000–₹2,500",
    relationships: ["Best Friend"],
    occasions: ["Birthday", "Friendship Day", "Just Because"],
    personalities: ["Fun-loving", "Cozy"],
    interests: ["Fashion"],
    giftTypes: ["Fun", "Personalised", "Cute"],
    personalised: true,
    effortLevel: ["I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g19",
    name: "Vinyl Record Photo Collage",
    description: "A custom vinyl record painted and collaged with your best photos and memories.",
    image: "/vinylcollage.jpeg",
    price: 600,
    priceRange: "₹500–₹1,000",
    relationships: ["Best Friend"],
    occasions: ["Birthday", "Friendship Day"],
    personalities: ["Creative", "Sentimental"],
    interests: ["Music", "Art", "Photography"],
    giftTypes: ["Handmade", "Sentimental", "Personalised"],
    personalised: true,
    effortLevel: ["I want them to cry happy tears.", "I want to make it really special."],
    externalUrl: "#"
  },
  {
    id: "g20",
    name: "Certified Real One Newspaper Print",
    description: "An iconic Monica & Rachel styled 'Certified Real One' custom newspaper print.",
    image: "/certifiedrealone.jpeg",
    price: 499,
    priceRange: "₹300–₹500",
    relationships: ["Best Friend"],
    occasions: ["Friendship Day", "Birthday", "Just Because"],
    personalities: ["Fun-loving", "Sentimental"],
    interests: ["Art", "Movies/TV"],
    giftTypes: ["Fun", "Cute", "Sentimental"],
    personalised: false,
    effortLevel: ["I’ll put in a little effort."],
    externalUrl: "#"
  }
];

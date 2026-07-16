export type Destination = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "italy",
    name: "Italy",
    description:
      "From cliffside villages on the Amalfi Coast to quiet trattorias in Rome, Italy is where Andare Travel began where we do our deepest work.",
    image: "/images/amalfi-coast-positano.jpg",
    alt: "Aerial view of the Amalfi Coast with the village of Positano nestled into the cliffside above the sea",
    featured: true,
  },
  {
    slug: "france",
    name: "France",
    description:
      "Lavender fields, Parisian side streets, and countryside châteaux most travelers never find on their own.",
    image: "/images/garden-pergola-flowers.jpg",
    alt: "Sunlit garden pergola with pink flowering vines, evocative of the French countryside",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    description:
      "Alpine villages, scenic rail journeys, and lakes so still they mirror the mountains above them.",
    image: "/images/lake-como-twilight.jpg",
    alt: "Twilight silhouette of mountains over a still alpine lake",
  },
  {
    slug: "greece",
    name: "Greece",
    description:
      "Whitewashed villages, ancient ruins, and island evenings built entirely around the sunset.",
    image: "/images/sardinia-sunset-beach.jpg",
    alt: "Vivid orange sunset over a rocky Mediterranean beach and harbor",
  },
  {
    slug: "croatia",
    name: "Croatia",
    description:
      "Dalmatian coastlines, walled cities, and islands best explored slowly, by boat.",
    image: "/images/cinque-terre-coastline.jpg",
    alt: "Rugged Mediterranean coastline with cliffs meeting turquoise water",
  },
  {
    slug: "austria",
    name: "Austria",
    description: "Imperial cities, alpine towns, and a musical tradition still very much alive.",
    image: "/images/lake-como-autumn.jpg",
    alt: "Autumn foliage framing a view of an alpine lake and distant town",
  },
  {
    slug: "spain",
    name: "Spain",
    description:
      "Flamenco courtyards, Andalusian hill towns, and some of Europe's most unforgettable food.",
    image: "/images/garden-wall-flowers.jpg",
    alt: "Stone wall covered in ivy and red flowering plants along a sunlit path",
  },
  {
    slug: "portugal",
    name: "Portugal",
    description: "Tiled facades, Atlantic coastlines, and port wine cellars along the Douro.",
    image: "/images/venice-alley.jpg",
    alt: "Narrow European alleyway lined with weathered, colorful building facades",
  },
  {
    slug: "england",
    name: "England",
    description: "Storybook countryside, historic cities, and a coastline built for long walks.",
    image: "/images/ivy-facade-turin.jpg",
    alt: "Historic brick building facade covered almost entirely in golden autumn ivy",
  },
  {
    slug: "ireland",
    name: "Ireland",
    description: "Emerald cliffs, small-town pubs, and a warmth that meets you at the door.",
    image: "/images/lake-como-twilight.jpg",
    alt: "Dusk light over dark mountain silhouettes above a still lake",
  },
  {
    slug: "germany",
    name: "Germany",
    description: "Fairytale castles, riverside villages, and Christmas markets worth planning a trip around.",
    image: "/images/venice-canal-boat.jpg",
    alt: "Quiet European canal lined with historic buildings and a wooden boat",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    description: "Canal cities, tulip fields, and cycling routes that unfold like a postcard.",
    image: "/images/venice-aerial-cityscape.jpg",
    alt: "Aerial view of a European waterfront city at golden hour with boats in the canal",
  },
];
{
    slug: "belgium",
    name: "Belgium",
    description: "Historic cities, artisan chocolate, and centuries-old architecture around every corner.",
    image: "/images/venice-aerial-cityscape.jpg",
    alt: "Aerial view of a European waterfront city at golden hour with boats in the canal",
  },
];

export type Service = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const services: Service[] = [
  {
    name: "Ready-to-Go Itineraries",
    price: "$50–150",
    description: "Perfect for independent travelers who want a proven route, not a blank page.",
    features: ["Day-by-day itinerary template", "Curated recommendations", "Digital guide, yours to keep"],
  },
  {
    name: "DIY Planning",
    price: "$300–600",
    description: "A custom itinerary and our recommendations — you book everything yourself.",
    features: ["Fully custom itinerary", "Personal recommendations", "One planning consultation"],
  },
  {
    name: "Concierge Planning",
    price: "$800–1,500",
    description: "We design and coordinate every detail while you enjoy the excitement.",
    features: ["End-to-end coordination", "Reservations handled for you", "Direct support while traveling"],
    highlight: true,
  },
  {
    name: "Luxury Concierge",
    price: "Starting at $2,500",
    description: "A completely personalized, white-glove European experience.",
    features: ["Bespoke, one-of-one itinerary", "Private guides & experiences", "24/7 concierge while abroad"],
  },
];

export type TravelStyle = {
  name: string;
  description: string;
  image: string;
  alt: string;
  emphasized?: boolean;
};

export const travelStyles: TravelStyle[] = [
  {
    name: "Honeymooners",
    description: "Romantic, private, and unforgettable — our specialty, and our favorite trips to design.",
    image: "/images/venice-lagoon-sunset.jpg",
    alt: "Golden sunset silhouette over the Venetian lagoon and Santa Maria della Salute",
    emphasized: true,
  },
  {
    name: "Families",
    description: "Journeys paced for every generation, with real moments everyone remembers together.",
    image: "/images/garden-pergola-flowers.jpg",
    alt: "Flowering garden pergola in warm afternoon light",
  },
  {
    name: "Luxury Travelers",
    description: "Exceptional stays, private access, and details handled before you think to ask.",
    image: "/images/milan-duomo.jpg",
    alt: "The Duomo di Milano cathedral glowing at dusk",
  },
  {
    name: "Independent Explorers",
    description: "A trusted framework and local intel, with plenty of room to wander off it.",
    image: "/images/venice-alley.jpg",
    alt: "A sunlit, narrow Venetian alley leading toward a distant canal",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Tell us your dream.", description: "A conversation about how you want to feel, not just where you want to go." },
  { number: "02", title: "We design your journey.", description: "A custom route built around your pace, your budget, and your story." },
  { number: "03", title: "We refine every detail.", description: "Reservations, logistics, and local recommendations, all handled with care." },
  { number: "04", title: "You travel confidently.", description: "You show up. We've already taken care of the rest." },
];

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Andare didn't just plan our honeymoon — they planned the version of Italy we didn't know how to find on our own.",
    name: "Placeholder Client",
    trip: "Amalfi Coast & Rome, Honeymoon",
  },
  {
    quote: "Every recommendation felt personal. It was the first trip where we never once felt like tourists.",
    name: "Placeholder Client",
    trip: "Tuscany & Florence, Anniversary Trip",
  },
  {
    quote: "From the first call to the last dinner reservation, everything was thoughtful, and nothing felt generic.",
    name: "Placeholder Client",
    trip: "Lake Como & Venice, Family Trip",
  },
];

export const stats = [
  { value: "12+", label: "Countries Explored" },
  { value: "250+", label: "Custom Itineraries" },
  { value: "600+", label: "Local Experiences" },
];

export const navLinks = [
  { href: "#experiences", label: "Experiences" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

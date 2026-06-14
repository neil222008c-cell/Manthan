export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  secondaryImage: string;
  description: string;
  colors: string[]; // hex codes or names
  sizes: string[];
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isSale?: boolean;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Architectural Wool Overcoat",
    price: 320,
    originalPrice: 380,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
    description: "Tailored double-breasted overcoat crafted from high-duty recycled wool. Features structuring shoulder pads, deep vent details, and raw seam finishes for a bold structural look.",
    colors: ["#18181b", "#71717a", "#d4d4d8"], // Charcoal, Zinc, Light Gray
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewsCount: 42,
    isNew: true,
  },
  {
    id: "p2",
    name: "Heavy-Gauge Rib Knit Crewneck",
    price: 165,
    category: "knitwear",
    image: "https://images.unsplash.com/photo-1574164904299-3a102b110380?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=687&auto=format&fit=crop",
    description: "Premium knitwear in extra-long staple organic cotton, tightly woven for a cozy and structured boxy silhouette. Heavy ribbed finish at double-thick collar and hem.",
    colors: ["#efeae2", "#18181b", "#78350f"], // Offwhite, Black, Tawny Brown
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviewsCount: 56,
    isPopular: true,
  },
  {
    id: "p3",
    name: "Mono-Leather Combat Boot",
    price: 290,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=687&auto=format&fit=crop",
    description: "Durable military combat boot engineered in vulcanized black full-grain leather. Finished with an chunky, slip-resistant proprietary rubber sole and solid speed-lacing hardware.",
    colors: ["#09090b"], // Jet Black
    sizes: ["8", "9", "10", "11"],
    rating: 4.7,
    reviewsCount: 29,
    isNew: true,
  },
  {
    id: "p4",
    name: "Linen-Blend Chore Jacket",
    price: 185,
    originalPrice: 220,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop",
    description: "A casual utility staple made with unstructured Belgian linen blended with fine cotton. Triple patch pockets, branded horn buttons, and contrast stitch detailing throughout.",
    colors: ["#3f3f46", "#183e2f", "#cca464"], // Zinc, Forest, Mustard
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviewsCount: 18,
    isSale: true,
  },
  {
    id: "p5",
    name: "Curved Denim Wide Pant",
    price: 145,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=687&auto=format&fit=crop",
    description: "Cut in premium raw selvedge denim. These trousers showcase a curved modern leg construction that stacks beautifully over sneakers or boots. Designed to age with personal character.",
    colors: ["#1e3a8a", "#09090b"], // Indigo, Black
    sizes: ["30", "32", "34", "36"],
    rating: 4.9,
    reviewsCount: 38,
    isPopular: true,
  },
  {
    id: "p6",
    name: "Minimalist Calfskin Accordion Tote",
    price: 410,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=687&auto=format&fit=crop",
    description: "An elegant top-handle tote featuring expandible accordion side-panels. Embossed key logos, secret inner pocketing, and hand-painted raw edges, crafted by master leather workers.",
    colors: ["#09090b", "#78350f", "#fafafa"], // Black, Cognac, Chalk White
    sizes: ["OS"],
    rating: 5.0,
    reviewsCount: 15,
    isNew: true,
  },
  {
    id: "p7",
    name: "Architectural Silver Signet Ring",
    price: 110,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=687&auto=format&fit=crop",
    description: "Solid 925 sterling silver signet, designed with sharp geometric chamfers and a sleek matte finish. Individually hand-carved and stamped with the Aurelia signature seal.",
    colors: ["#d4d4d8"], // Silver
    sizes: ["7", "8", "9", "10"],
    rating: 4.8,
    reviewsCount: 22,
  },
  {
    id: "p8",
    name: "Sculptured Rib Knit Turtleneck",
    price: 175,
    category: "knitwear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=687&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=687&auto=format&fit=crop",
    description: "High-neck structured ribbed knitwear. Perfect for layering under deep coats or wearing standalone for an elongated profile. Made of fine merino wool and cashmere blend.",
    colors: ["#27272a", "#f4f4f5", "#7c2d12"], // Dark grey, light silver, terracotta
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewsCount: 64,
    isPopular: true,
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: "t1",
    name: "Elena Rostova",
    role: "Architect & Creative Director",
    quote: "Aurelia is a revelation for design minimalists. The Overcoat has a geometric volume and raw edge craft that I haven't seen outside of expensive Parisian runway houses.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop"
  },
  {
    id: "t2",
    name: "Marcus Sterling",
    role: "Senior UX Designer",
    quote: "The combat boots have held up impeccably over a rigorous year. The silhouette strikes that difficult, pristine balance between rugged durability and highly polished modern aesthetics.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop"
  },
  {
    id: "t3",
    name: "Yoon-Seo Park",
    role: "Visual Journalist",
    quote: "Usually, clothing with architectural silhouettes compromises heavily on comfort. Aurelia's rib knit crewneck feels incredibly soft while maintaining a dramatic boxy drape. Love it.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop"
  }
];

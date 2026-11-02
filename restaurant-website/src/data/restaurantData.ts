import { MenuItem, Testimonial, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Saffron & Sage',
  tagline: 'Artisanal Gastronomy & Fine Wines',
  description: 'Where ancient culinary heritage merges with avant-garde modern gastronomy. Handcrafted seasonal tasting menus prepared over open embers and served in an atmosphere of refined intimacy.',
  address: '42 Belgravia Crescent, Mayfair, London W1K 7AA',
  phone: '+44 20 7946 0921',
  whatsappNumber: '442079460921',
  email: 'reservations@saffronandsage.co.uk',
  hours: {
    lunch: 'Tuesday – Sunday: 12:00 PM – 3:30 PM',
    dinner: 'Tuesday – Saturday: 6:00 PM – 11:30 PM',
    sundayDinner: 'Sunday: 6:00 PM – 10:00 PM',
    closed: 'Monday: Closed for private culinary prep',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://tripadvisor.com',
  }
};

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Pan-Seared Hokkaido Scallops',
    description: 'Golden saffron velouté, imperial oscietra caviar, roasted cauliflower purée, crispy guanciale wafer.',
    price: '£36',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&auto=format&fit=crop&q=80',
    dietary: ['Chef Special', 'Gluten-Free'],
    pairing: '2021 Chablis Grand Cru "Les Clos"',
  },
  {
    id: 'sig-2',
    name: 'Wood-Fired Wagyu A5 Ribeye',
    description: 'Charred bone marrow emulsion, fermented black garlic jus, wild morel mushrooms, smoked fleur de sel.',
    price: '£84',
    category: 'steaks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80',
    dietary: ['Chef Special'],
    pairing: '2018 Barolo Serralunga d\'Alba',
  },
  {
    id: 'sig-3',
    name: 'Wild Turbot with Sage Butter',
    description: 'Line-caught Brittany turbot, crisp sage crust, samphire, white asparagus, champagne emulsion.',
    price: '£52',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&auto=format&fit=crop&q=80',
    dietary: ['Gluten-Free'],
    pairing: '2020 Meursault "Les Narvaux"',
  },
  {
    id: 'sig-4',
    name: 'Valrhona Grand Cru Soufflé',
    description: '70% dark Guanaja chocolate molten heart, Madagascar smoked vanilla bean gelato, 24K gold leaf dusting.',
    price: '£22',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&auto=format&fit=crop&q=80',
    dietary: ['Vegetarian', 'Chef Special'],
    pairing: 'Château d\'Yquem Sauternes 2017',
  }
];

export const MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_DISHES,
  {
    id: 'm-1',
    name: 'Truffled Burrata di Puglia',
    description: 'Heirloom marinated baby tomatoes, 25-year aged Modena balsamic, micro basil, toasted brioche crisp.',
    price: '£24',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?w=800&auto=format&fit=crop&q=80',
    dietary: ['Vegetarian'],
    pairing: 'Franciacorta Brut Rosé',
  },
  {
    id: 'm-2',
    name: 'Yellowfin Tuna Carpaccio',
    description: 'Citrus ponzu glaze, avocado crema, pickled radish, charred jalapeño, toasted sesame tuile.',
    price: '£28',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
    dietary: ['Gluten-Free'],
    pairing: 'Sancerre Blanc 2022',
  },
  {
    id: 'm-3',
    name: 'Handcrafted Duck Tortellini',
    description: 'Slow-braised confit duck leg, parmigiano reggiano foam, dark poultry reduction, autumn truffle shavings.',
    price: '£38',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80',
    dietary: ['Chef Special'],
    pairing: 'Pinot Noir Domaine Dujac',
  },
  {
    id: 'm-4',
    name: 'Chilean Sea Bass Provencal',
    description: 'Pan-roasted Chilean sea bass, saffron fumet broth, baby fennel, kalamata olives, tomato confit.',
    price: '£48',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&auto=format&fit=crop&q=80',
    dietary: ['Gluten-Free'],
    pairing: 'Bandol Rosé Domaine Tempier',
  },
  {
    id: 'm-5',
    name: 'Prime Black Angus Tomahawk (1kg)',
    description: 'Dry-aged for 45 days in Himalayan salt chamber, served with roasted bone marrow and black truffle chimichurri.',
    price: '£120',
    category: 'steaks',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80',
    dietary: ['Chef Special'],
    pairing: 'Cabernet Sauvignon Napa Valley',
  },
  {
    id: 'm-6',
    name: 'Wild Forest Mushroom Risotto',
    description: 'Acquerello carnaroli rice, chanterelles, porcini broth, aged parmesan crisp, cold-pressed sage oil.',
    price: '£32',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=800&auto=format&fit=crop&q=80',
    dietary: ['Vegetarian', 'Gluten-Free'],
    pairing: 'Nebbiolo Langhe',
  },
  {
    id: 'm-7',
    name: 'Pistachio & Raspberry Delice',
    description: 'Sicilian Bronte pistachio mousse, raspberry coulis core, sable breton base, edible gold.',
    price: '£19',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&auto=format&fit=crop&q=80',
    dietary: ['Vegetarian'],
    pairing: 'Recioto della Valpolicella',
  },
  {
    id: 'm-8',
    name: 'The Golden Saffron Old Fashioned',
    description: '12-year bourbon infused with Persian saffron, smoked Demerara syrup, Angostura bitters, flamed orange peel.',
    price: '£22',
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80',
    dietary: ['Vegan'],
    pairing: 'Perfect digestif companion',
  },
  {
    id: 'm-9',
    name: 'Smoked Sage & Blackberry Elixir',
    description: 'Botanical gin, freshly crushed blackberries, charred sage syrup, fresh lemon, velvet egg foam.',
    price: '£20',
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    dietary: ['Vegetarian'],
    pairing: 'Aperitif signature',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Grand Candlelit Dining Room',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'g-2',
    title: 'Artisanal Plating at the Pass',
    category: 'Culinary Art',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'g-3',
    title: 'Sommelier Reserve Wine Cellar',
    category: 'Cellar',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'g-4',
    title: 'Private Garden Veranda',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'g-5',
    title: 'Wood-Fired Ember Preparation',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 'g-6',
    title: 'Craft Cocktail Alchemy',
    category: 'Mixology',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&auto=format&fit=crop&q=80',
  }
];

export const CHEF_INFO = {
  name: 'Chef Laurent Vance',
  title: 'Executive Culinary Director & Co-Owner',
  bio: 'With over twenty years at the helm of Europe\'s most celebrated gastronomic destinations—including 3-star establishments in Paris and Lyon—Chef Laurent brings a culinary philosophy rooted in reverence for raw terroir and precision fire technique.',
  philosophy: '"We do not disguise nature; we elevate its soul. Every dish is a dialogue between smoke, seasonal soil, and timeless memory."',
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&auto=format&fit=crop&q=80',
  accolades: [
    'Michelin Guide Distinction 2024',
    'Best Fine Dining Experience — World Culinary Awards',
    'Sommelier Guild Award of Excellence',
    'Featured on Great British Chefs'
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Eleanor Sterling',
    role: 'Gastronomy Critic',
    publication: 'The Epicurean Review',
    comment: 'Saffron & Sage is a tour de force. The balance between primal wood fire and fragile saffron aromatics is nothing short of transcendent.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    author: 'Lord Marcus Kensington',
    role: 'Private Collector & Patron',
    publication: 'Mayfair Lifestyle Journal',
    comment: 'The Wine Cellar experience orchestrated by their head sommelier is unmatched in London. The Wagyu A5 simply melts into pure bliss.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    author: 'Chef Hélène Rostand',
    role: 'International Restaurateur',
    publication: 'Global Palate',
    comment: 'Service is quiet poetry. The Scallop dish alone warrants a flight to London. Truly world-class dining from the moment you step inside.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
  }
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'steaks' | 'desserts' | 'cocktails';
  image: string;
  dietary?: ('Vegetarian' | 'Gluten-Free' | 'Chef Special' | 'Organic' | 'Vegan')[];
  pairing?: string;
  calories?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  publication?: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'Main Dining Hall' | 'Garden Veranda' | 'Chef\'s Counter' | 'Private Wine Cellar';
  dietaryNotes?: string;
  specialOccasion?: 'None' | 'Birthday' | 'Anniversary' | 'Business Dinner' | 'Romance';
}

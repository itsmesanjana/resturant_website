export type PropertyCategory = 'Villa' | 'Penthouse' | 'Modern Estate' | 'Historic Townhome';
export type ListingType = 'Buy' | 'Rent';

export interface Property {
  id: string;
  title: string;
  tagline: string;
  category: PropertyCategory;
  listingType: ListingType;
  price: number;
  formattedPrice: string;
  location: string;
  city: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  architecturalStyle: string;
  agent: {
    name: string;
    title: string;
    phone: string;
    avatar: string;
  };
}

export interface SearchFilterState {
  searchQuery: string;
  listingType: ListingType | 'All';
  category: string;
  maxPrice: number;
  minBedrooms: number;
}

export interface ViewingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  viewingType: 'In-Person VIP Tour' | 'Live 4K Virtual Walkthrough';
  message: string;
}

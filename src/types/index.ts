// Types pour les utilisateurs
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'USER' | 'AGENT' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

// Types pour les propriétés
export interface Property {
  id: string;
  title: string;
  description: string;
  location: Location;
  price: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: PropertyType;
  status: PropertyStatus;
  exclusive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  address: string;
  city: string;
  district: string;
  latitude: number;
  longitude: number;
}

export type PropertyType = 'HOUSE' | 'APARTMENT' | 'VILLA' | 'COMMERCIAL' | 'LAND';
export type PropertyStatus = 'AVAILABLE' | 'SOLD' | 'RENTED' | 'PENDING';

// Types pour les paiements
export interface PaymentTransaction {
  id: string;
  userId: string;
  propertyId: string;
  amount: number;
  currency: 'BTC' | 'ETH' | 'USDC';
  type: 'DEPOSIT' | 'FULL_PAYMENT';
  status: 'PENDING' | 'CONFIRMED' | 'FAILED';
  txHash: string;
  createdAt: Date;
}

// Types pour les favoris
export interface Favorite {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
}

// Types pour les réservations
export interface Reservation {
  id: string;
  userId: string;
  propertyId: string;
  date: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: Date;
}

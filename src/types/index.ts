export type PageId =
  | 'home'
  | 'catalogo'
  | 'producto'
  | 'pedido'
  | 'galeria'
  | 'proceso'
  | 'contacto';

export type Palette = 'rose' | 'burgundy' | 'minimal' | 'pop';
export type DisplayFont = 'cormorant' | 'italiana' | 'dmserif';
export type Density = 'cozy' | 'spacious';

export interface Variant {
  label: string;
  price: number;
}

export type OccasionId =
  | 'all'
  | 'san-valentin'
  | 'madres'
  | 'cumpleanos'
  | 'aniversario'
  | 'graduacion';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  img: string;
  img2?: string;
  category: string;
  occasions: OccasionId[];
  variants: Variant[];
  colors: string[];
  description: string;
}

export interface Extra {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface Occasion {
  id: OccasionId;
  label: string;
}

export interface Testimonio {
  text: string;
  name: string;
  place: string;
}

export interface ProcesoStep {
  n: string;
  title: string;
  text: string;
}

export interface CartExtra {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface CartItem {
  productId: string;
  name: string;
  variant: string;
  price: number;
  color: string;
  img: string;
  msg: string;
  from: string;
  to: string;
  extras: CartExtra[];
  qty: number;
}

export interface ContactForm {
  nombre: string;
  telefono: string;
  direccion: string;
  colonia: string;
  fecha: string;
  hora: string;
  referencias: string;
  pago: 'transferencia' | 'depósito' | 'efectivo';
}

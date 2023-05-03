export interface Contact {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
}

export interface ContactCreate {
  name: string;
  category: string;
  address: string;
  phone: string;
}

export interface ContactUpdate {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
}

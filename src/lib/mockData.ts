import mockData from '../mock.json';

export interface Artwork {
  id: string;
  title: string;
  creator: string;
  price: string;
  likes: number;
  views: number;
  image: string;
}

export interface Effect {
  id: string;
  name: string;
  icon: string;
}

export const artworks: Artwork[] = mockData.artworks;
export const effects: Effect[] = mockData.effects;
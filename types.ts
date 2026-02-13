
export enum ThemeType {
  DARK_CYBER = 'dark-cyber',
  NEON_GAMING = 'neon-gaming',
  SOFT_PASTEL = 'soft-pastel',
  ROBLOX_POWER = 'roblox-power',
  COMIC = 'comic'
}

export interface Project {
  id: number;
  name: string;
  description: string;
  year: string;
  image: string;
  robloxUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  price: string;
  features: string[];
}

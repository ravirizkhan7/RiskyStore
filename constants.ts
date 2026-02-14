
import { Project, Service, ThemeType } from './types';

export const THEME_SEQUENCE: ThemeType[] = [
  ThemeType.DARK_CYBER,
  ThemeType.NEON_GAMING,
  ThemeType.SOFT_PASTEL,
  ThemeType.ROBLOX_POWER,
  ThemeType.COMIC
];

export const PORTFOLIO_DATA: Project[] = [
  {
      id: 1,
      name: "SKYNUT",
      description: "map gunung di roblox dengan pemandangan yang indah dan menantang untuk dijelajahi.",
      year: "2026",
      image: "https://picsum.photos/seed/roblox1/600/400",
      link: "https://www.roblox.com/share?code=a5d8392d546aaa479af496651b77df30&type=ExperienceDetails&stamp=1770996706839"
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Game Admin Access",
    price: "IDR 50.000",
    features: [
      "Permanent Admin Tag",
      "Exclusive Command Access",
      "Kick/Ban Permissions",
      "Priority Support"
    ]
  },
  {
    id: 2,
    title: "Basic Map Building",
    price: "IDR 250.000",
    features: [
      "Small to Medium Size",
      "Custom Terrain",
      "Standard Assets",
      "3 Revisions Included"
    ]
  },
  {
    id: 3,
    title: "Premium Studio Map",
    price: "IDR 750.000+",
    features: [
      "Large Scale Detailed Map",
      "Custom Meshes & Textures",
      "Lighting Optimization",
      "Unlimited Revisions"
    ]
  }
];

export const WHATSAPP_NUMBER = "6282173242194"; // Ganti dengan nomor asli
export const DANA_NUMBER = "6282173242194"; // Ganti dengan nomor asli
export const ORDER_TEMPLATE = (serviceId: number) => {
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  if (!service) return "Halo, saya tertarik untuk memesan Layanan Roblox. Mohon informasi lebih lanjut.";

  return `Halo, saya tertarik untuk memesan paket "${service.title}" dengan harga ${service.price}. Mohon informasi lebih lanjut.`;
};


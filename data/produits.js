export const produitsElectricite = [
  {
    id: "1",
    nom: "Câbles électriques NYY",
    description:
      "Câbles d'installation haute qualité pour usage industriel et résidentiel. Isolation PVC, résistant aux UV et à l'humidité.",
    categorie: "electricite",
    sousCategorie: "Câbles",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Rouleau de câbles d'alimentation cuivre/industriel
    marque: "Nexans",
    origine: "Europe",
    actif: true,
  },
  {
    id: "2",
    nom: "Disjoncteur différentiel 63A",
    description:
      "Protection optimale contre les surintensités et les courts-circuits. Certifié aux normes IEC 60898.",
    categorie: "electricite",
    sousCategorie: "Protection",
    images: [
      "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Disjoncteurs modulaires sur rail DIN
    marque: "Schneider Electric",
    origine: "France",
    actif: true,
  },
  {
    id: "3",
    nom: "Panneau solaire 400W",
    description:
      "Panneau photovoltaïque haute performance, idéal pour les zones rurales et urbaines de Guinée.",
    categorie: "electricite",
    sousCategorie: "Énergie solaire",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Panneau photovoltaïque monocristallin gros plan
    marque: "Jinko Solar",
    origine: "Asie",
    actif: true,
  },
  {
    id: "4",
    nom: "Groupe électrogène 10 KVA",
    description:
      "Générateur silencieux diesel, autonomie 12h, démarrage automatique. Parfait pour les entreprises et hôtels.",
    categorie: "electricite",
    sousCategorie: "Groupes électrogènes",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Générateur/groupe électrogène industriel lourd
    marque: "Perkins",
    origine: "UK",
    actif: true,
  },
  {
    id: "5",
    nom: "Luminaire LED industriel 150W",
    description:
      "Éclairage haute baie pour entrepôts et ateliers. Durée de vie 50 000h, économie d'énergie 70%.",
    categorie: "electricite",
    sousCategorie: "Éclairage",
    images: [
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Luminaire/projecteur LED à haute efficacité énergétique
    marque: "Philips",
    origine: "Pays-Bas",
    actif: true,
  },
  {
    id: "6",
    nom: "Tableau électrique 24 modules",
    description:
      "Coffret de distribution pré-équipé, porte transparente, bornier de terre inclus.",
    categorie: "electricite",
    sousCategorie: "Tableaux",
    images: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Intérieur de coffret et câblage technique propre
    marque: "Hager",
    origine: "Allemagne",
    actif: true,
  },
];

export const produitsEau = [
  {
    id: "7",
    nom: "Eau Minérale Kouria 0,5L",
    description:
      "Eau minérale naturelle de la source de Kouriah, pure et rafraîchissante. Format individuel idéal pour la mobilité.",
    categorie: "eau",
    sousCategorie: "Petit format",
    images: [
      "https://images.unsplash.com/photo-1608885898957-a599fb18ec36?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Bouteille d'eau pure fraîche sur fond épuré
    origine: "Source Kouriah, Coyah, Guinée",
    actif: true,
  },
  {
    id: "8",
    nom: "Eau Minérale Kouria 1,5L",
    description:
      "Format familial de l'eau minérale Kouria. Richesse naturelle en minéraux essentiels pour votre santé.",
    categorie: "eau",
    sousCategorie: "Format familial",
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Bouteille d'eau minérale à table / fraîcheur naturelle
    origine: "Source Kouriah, Coyah, Guinée",
    actif: true,
  },
  {
    id: "9",
    nom: "Eau Minérale Kouria 5L",
    description:
      "Grand format en bouteille consignée, idéal pour les ménages, restaurants et bureaux. Économique et pratique.",
    categorie: "eau",
    sousCategorie: "Grand format consigné",
    images: [
      "https://images.unsplash.com/photo-1548839134-6fd0ec2585be?auto=format&fit=crop&q=80&w=600&h=600",
    ], // Grande bouteille d'eau / bonbonne pureté cristalline
    origine: "Source Kouriah, Coyah, Guinée",
    actif: true,
  },
];

export const categories = [
  { id: "cables", label: "Câbles", icone: "Zap" },
  { id: "protection", label: "Protection", icone: "Shield" },
  { id: "eclairage", label: "Éclairage", icone: "Lightbulb" },
  { id: "groupes", label: "Groupes électrogènes", icone: "Power" },
  { id: "solaire", label: "Énergie solaire", icone: "Sun" },
  { id: "tableaux", label: "Tableaux électriques", icone: "Grid" },
];

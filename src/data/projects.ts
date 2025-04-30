
export interface Project {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  images: string[];
  year: string;
  client?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    id: "urban-architecture",
    title: "Urban Architecture",
    coverImage: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    description: "A study of modern urban architecture and its geometric forms.",
    images: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    ],
    year: "2024",
    client: "Personal Project",
    location: "New York"
  },
  {
    id: "natural-landscapes",
    title: "Natural Landscapes",
    coverImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    description: "Capturing the raw beauty of untouched natural landscapes.",
    images: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    ],
    year: "2023",
    location: "Various Locations"
  },
  {
    id: "minimalism",
    title: "Minimalism",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Exploring the beauty in simplicity through minimalist composition.",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
    ],
    year: "2023",
    client: "Gallery Exhibition",
    location: "Berlin"
  },
  {
    id: "technology",
    title: "Technology",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "The intersection of technology and visual aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    year: "2022",
    client: "Tech Magazine",
    location: "San Francisco"
  }
];

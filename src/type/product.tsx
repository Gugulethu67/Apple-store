export interface Product {
    id: number; // Changed from string to number
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    colors: string[];
    storage: string[]; // Changed from number[] to string[]
    image: string;
    inStock: boolean;
    releaseDate: string;
    description: string;
    specifications: {
      display: string;
      chip: string;
      camera: string;
      battery: string;
    };
  }

  
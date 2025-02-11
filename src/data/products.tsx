export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "iPhone",
    price: 21430.50, // 1099 USD
    rating: 4.8,
    reviews: 1250,
    colors: ["Space Black", "Natural Titanium", "White Titanium", "Blue Titanium"],
    storage: ["128", "256", "512"],
    image: "/pngimg.com - iphone16_PNG35.png",
    inStock: true,
    releaseDate: "2023-09-22",
    description: "iPhone 15 Pro Max. Titanium design, A17 Pro chip, Action button...",
    specifications: {
        display: "6.7-inch Super Retina XDR display",
        chip: "A17 Pro chip",
        camera: "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
        battery: "Up to 29 hours video playback"
    }
},
{
    id: 2,
    name: "MacBook Pro 16-inch",
    price: 48730.50, // 2499 USD
    category: "MacBook",
    rating: 4.7,
    reviews: 890,
    colors: ["Silver", "Space Gray"],
    storage: ["512", "1024", "2048"],
    image: "/images/pngimg.com - macbook_PNG3.png",
    inStock: true,
    releaseDate: "2023-10-30",
    description: "MacBook Pro 16-inch with M3 Pro and Liquid Retina XDR display.",
    specifications: {
        display: "16.2-inch Liquid Retina XDR",
        chip: "M3 Pro",
        camera: "1080p FaceTime HD",
        battery: "Up to 22 hours video playback"
    }
},
{
    id: 3,
    name: "iPad Air (M2)",
    price: 13630.50, // 699 USD
    category: "iPad",
    rating: 4.6,
    reviews: 540,
    colors: ["Blue", "Starlight", "Space Gray", "Purple"],
    storage: ["64", "256"],
    image: "/images/macbook_air.png",
    inStock: true,
    releaseDate: "2024-03-10",
    description: "iPad Air with M2 chip, advanced performance, and all-day battery life.",
    specifications: {
        display: "10.9-inch Liquid Retina",
        chip: "M2",
        camera: "12MP Wide camera",
        battery: "Up to 10 hours web browsing"
    }
},
{
    id: 4,
    name: "Apple Watch Ultra 2",
    price: 15580.50, // 799 USD
    category: "Apple Watch",
    rating: 4.9,
    reviews: 320,
    colors: ["Titanium"],
    storage: ["32"],
    image: "/images/apple-watch.png",
    inStock: true,
    releaseDate: "2023-09-22",
    description: "Apple Watch Ultra 2 with advanced health and fitness tracking.",
    specifications: {
        display: "49mm Always-On Retina",
        chip: "S9 SiP",
        camera: "None",
        battery: "Up to 36 hours normal use"
    }
},
{
    id: 5,
    name: "iPad Pro 12.9-inch",
    price: 21430.50, // 1099 USD
    category: "iPad",
    rating: 4.8,
    reviews: 900,
    colors: ["Silver", "Space Gray"],
    storage: ["128", "1024", "2048"],
    image: "/images/iPad Pro 12.9-inch.png",
    inStock: true,
    releaseDate: "2022-10-26",
    description: "iPad Pro 12.9-inch with M2 chip, stunning Liquid Retina XDR display...",
    specifications: {
        display: "12.9-inch Liquid Retina XDR display",
        chip: "M2 chip",
        camera: "12MP Wide | 10MP Ultra Wide",
        battery: "Up to 10 hours surfing the web"
    }
},
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: 7780.50, // 399 USD
      category: "Apple Watch",
      rating: 4.7,
      reviews: 850,
      colors: ["Midnight", "Starlight", "Product Red", "Silver"],
      storage: ["32"],
      image: "/images/Apple Watch Series 9.png",
      inStock: true,
      releaseDate: "2023-09-22",
      description: "Apple Watch Series 9. Advanced health features, Always-On Retina display...",
      specifications: {
          display: "Always-On Retina display",
          chip: "S9 chip",
          camera: "No camera",
          battery: "Up to 18 hours"
      }
  },
  {
      id: 7,
      name: "AirPods Pro (2nd generation)",
      price: 4855.50, // 249 USD
      category: "Accessories",
      rating: 4.8,
      reviews: 1120,
      colors: ["White"],
      storage: ["N/A"],
      image: "/images/Airpods-pro.png",
      inStock: true,
      releaseDate: "2023-09-22",
      description: "AirPods Pro (2nd generation) with Active Noise Cancellation, Adaptive Audio, and USB‑C charging case.",
      specifications: {
          display: "LED charging indicators",
          chip: "H2 chip",
          camera: "N/A",
          battery: "Up to 6 hours listening time"
      }
  },
  {
      id: 8,
      name: "Mac mini (M2)",
      price: 11680.50, // 599 USD
      category: "Mac",
      rating: 4.7,
      reviews: 430,
      colors: ["Silver"],
      storage: ["256", "512", "1024"],
      image: "/images/imac.png",
      inStock: true,
      releaseDate: "2023-01-24",
      description: "Mac mini with M2 chip, compact design, and powerful performance.",
      specifications: {
          display: "Supports up to two displays",
          chip: "M2 chip",
          camera: "N/A",
          battery: "N/A"
      }
  },
  {
      id: 9,
      name: "iPhone 15",
      price: 15580.50, // 799 USD
      category: "iPhone",
      rating: 4.7,
      reviews: 980,
      colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
      storage: ["128", "256", "512"],
      image: "/images/iPhone 15.png",
      inStock: true,
      releaseDate: "2023-09-22",
      description: "iPhone 15 with Dynamic Island, 48MP camera, and USB-C.",
      specifications: {
          display: "6.1-inch Super Retina XDR display",
          chip: "A16 Bionic chip",
          camera: "48MP Main | 12MP Ultra Wide",
          battery: "Up to 26 hours video playback"
      }
  },
  {
      id: 10,
      name: "MacBook Air 15-inch",
      price: 25330.50, // 1299 USD
      category: "MacBook",
      rating: 4.8,
      reviews: 675,
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256", "512", "1024"],
      image: "/images/MacBook Pro 14-inch.png",
      inStock: true,
      releaseDate: "2023-06-13",
      description: "MacBook Air 15-inch with M2 chip, spacious display, and all-day battery life.",
      specifications: {
          display: "15.3-inch Liquid Retina display",
          chip: "M2 chip",
          camera: "1080p FaceTime HD camera",
          battery: "Up to 18 hours video playback"
      }
  },
  {
      id: 11,
      name: "iPad mini",
      price: 9730.50, // 499 USD
      category: "iPad",
      rating: 4.6,
      reviews: 720,
      colors: ["Space Gray", "Purple", "Pink", "Starlight"],
      storage: ["64", "256"],
      image: "/images/Ipad mini.png",
      inStock: true,
      releaseDate: "2023-09-14",
      description: "iPad mini with A15 Bionic chip, 8.3-inch display, and Apple Pencil support.",
      specifications: {
          display: "8.3-inch Liquid Retina display",
          chip: "A15 Bionic chip",
          camera: "12MP Wide camera",
          battery: "Up to 10 hours web browsing"
      }
  },
  {
      id: 12,
      name: "AirPods Max",
      price: 10705.50, // 549 USD
      category: "Accessories",
      rating: 4.6,
      reviews: 540,
      colors: ["Space Gray", "Silver", "Green", "Pink", "Sky Blue"],
      storage: ["N/A"],
      image: "/images/AirPods Max.png",
      inStock: true,
      releaseDate: "2020-12-15",
      description: "AirPods Max with high-fidelity audio, Active Noise Cancellation, and premium design.",
      specifications: {
          display: "LED status light",
          chip: "H1 chip",
          camera: "N/A",
          battery: "Up to 20 hours listening time"
      }
  },
  {
      id: 13,
      name: "Mac Studio (M2 Ultra)",
      price: 77980.50, // 3999 USD
      category: "Mac",
      rating: 4.9,
      reviews: 280,
      colors: ["Silver"],
      storage: ["512", "1024", "2048", "4096"],
      image: "/images/Mac Studio (M2 Ultra).png",
      inStock: true,
      releaseDate: "2023-06-05",
      description: "Mac Studio with M2 Ultra chip, extraordinary performance, and extensive connectivity.",
      specifications: {
          display: "Supports up to five displays",
          chip: "M2 Ultra chip",
          camera: "N/A",
          battery: "N/A"
      }
  },
  {
      id: 14,
      name: "iPhone 15 Plus",
      price: 17530.50, // 899 USD
      category: "iPhone",
      rating: 4.7,
      reviews: 850,
      colors: ["Black", "Blue", "Green", "Pink", "Yellow"],
      storage: ["128", "256", "512"],
      image: "/images/iPhone 15 Plus.png",
      inStock: true,
      releaseDate: "2023-09-22",
      description: "iPhone 15 Plus with larger display, powerful camera system, and long battery life.",
      specifications: {
          display: "6.7-inch Super Retina XDR display",
          chip: "A16 Bionic chip",
          camera: "48MP Main | 12MP Ultra Wide",
          battery: "Up to 28 hours video playback"
      }
  },
  {
      id: 15,
      name: "MacBook Air 13-inch",
      price: 19480.50, // 999 USD
      category: "MacBook",
      rating: 4.8,
      reviews: 1200,
      colors: ["Midnight", "Starlight", "Space Gray", "Silver"],
      storage: ["256", "512", "1024"],
      image: "/images/MacBook Air 13-inch.png",
      inStock: true,
      releaseDate: "2023-06-13",
      description: "MacBook Air 13-inch with M2 chip, sleek design, and impressive performance.",
      specifications: {
          display: "13.6-inch Liquid Retina display",
          chip: "M2 chip",
          camera: "1080p FaceTime HD camera",
          battery: "Up to 18 hours video playback"
      }
  },
  {
    id: 16,
    name: "iPad (10th generation)",
    price: 8755.50, // 449 USD
    category: "iPad",
    rating: 4.7,
    reviews: 680,
    colors: ["Blue", "Pink", "Yellow", "Silver"],
    storage: ["64", "256"],
    image: "/images/iPad (10th generation).png",
    inStock: true,
    releaseDate: "2022-10-26",
    description: "iPad with 10.9-inch display, A14 Bionic chip, and USB-C connectivity.",
    specifications: {
        display: "10.9-inch Liquid Retina display",
        chip: "A14 Bionic chip",
        camera: "12MP Wide camera",
        battery: "Up to 10 hours web browsing"
    }
},
{
    id: 17,
    name: "AirPods (3rd generation)",
    price: 3490.50, // 179 USD
    category: "Accessories",
    rating: 4.7,
    reviews: 890,
    colors: ["White"],
    storage: ["N/A"],
    image: "/images/AirPods (3rd generation).png",
    inStock: true,
    releaseDate: "2021-10-26",
    description: "AirPods (3rd generation) with Spatial Audio and enhanced fit.",
    specifications: {
        display: "LED charging indicators",
        chip: "H1 chip",
        camera: "N/A",
        battery: "Up to 6 hours listening time"
    }
},
{
    id: 18,
    name: "Pro Display XDR",
    price: 97480.50, // 4999 USD
    category: "Accessories",
    rating: 4.8,
    reviews: 150,
    colors: ["Silver"],
    storage: ["N/A"],
    image: "/images/Pro Display XDR.png",
    inStock: true,
    releaseDate: "2019-12-10",
    description: "Pro Display XDR with 6K resolution, extreme dynamic range, and precise color.",
    specifications: {
        display: "32-inch Retina 6K display",
        chip: "N/A",
        camera: "N/A",
        battery: "N/A"
    }
},
{
    id: 19,
    name: "iPhone 15 Pro",
    price: 19480.50, // 999 USD
    category: "iPhone",
    rating: 4.8,
    reviews: 1100,
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["128", "256", "512", "1024"],
    image: "/images/iPhone 15 Plus.png",
    inStock: true,
    releaseDate: "2023-09-22",
    description: "iPhone 15 Pro with A17 Pro chip, titanium design, and Pro camera system.",
    specifications: {
        display: "6.1-inch Super Retina XDR display",
        chip: "A17 Pro chip",
        camera: "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
        battery: "Up to 23 hours video playback"
    }
},
{
    id: 20,
    name: "Apple Watch SE",
    price: 4855.50, // 249 USD
    category: "Apple Watch",
    rating: 4.7,
    reviews: 780,
    colors: ["Midnight", "Starlight", "Silver"],
    storage: ["32"],
    image: "/images/Apple Watch SE.png",
    inStock: true,
    releaseDate: "2023-09-22",
    description: "Apple Watch SE with essential features at a great value.",
    specifications: {
        display: "Retina LTPO OLED display",
        chip: "S8 SiP",
        camera: "N/A",
        battery: "Up to 18 hours normal use"
    }
},
{
    id: 21,
    name: "HomePod (2nd generation)",
    price: 5830.50, // 299 USD
    category: "Accessories",
    rating: 4.6,
    reviews: 420,
    colors: ["Midnight", "White"],
    storage: ["N/A"],
    image: "/images/HomePod (2nd generation).png",
    inStock: true,
    releaseDate: "2023-02-03",
    description: "HomePod with rich, deep bass, Spatial Audio, and room-sensing technology.",
    specifications: {
        display: "LED touch surface",
        chip: "S7 chip",
        camera: "N/A",
        battery: "N/A"
    }
},
{
    id: 22,
    name: "MacBook Pro 14-inch",
    price: 38980.50, // 1999 USD
    category: "MacBook",
    rating: 4.8,
    reviews: 760,
    colors: ["Space Gray", "Silver"],
    storage: ["512", "1024", "2048"],
    image: "/images/pngimg.com - macbook_PNG3.png",
    inStock: true,
    releaseDate: "2023-10-30",
    description: "MacBook Pro 14-inch with M3 Pro chip and stunning Liquid Retina XDR display.",
    specifications: {
        display: "14.2-inch Liquid Retina XDR display",
        chip: "M3 Pro chip",
        camera: "1080p FaceTime HD camera",
        battery: "Up to 18 hours video playback"
    }
},
{
    id: 23,
    name: "Magic Keyboard",
    price: 1930.50, // 99 USD
    category: "Accessories",
    rating: 4.5,
    reviews: 890,
    colors: ["White"],
    storage: ["N/A"],
    image: "/images/Magic Keyboard.png",
    inStock: true,
    releaseDate: "2023-03-15",
    description: "Magic Keyboard with numeric keypad and refined scissor mechanism.",
    specifications: {
        display: "N/A",
        chip: "N/A",
        camera: "N/A",
        battery: "Up to 1 month between charges"
    }
},
{
    id: 24,
    name: "Studio Display",
    price: 31180.50, // 1599 USD
    category: "Accessories",
    rating: 4.7,
    reviews: 340,
    colors: ["Silver"],
    storage: ["N/A"],
    image: "/images/Pro Display XDR.png",
    inStock: true,
    releaseDate: "2022-03-18",
    description: "Studio Display with 5K Retina display and 12MP Ultra Wide camera.",
    specifications: {
        display: "27-inch 5K Retina display",
        chip: "A13 Bionic chip",
        camera: "12MP Ultra Wide camera",
        battery: "N/A"
    }
},
{
    id: 25,
    name: "HomePod mini",
    price: 1930.50, // 99 USD
    category: "Accessories",
    rating: 4.6,
    reviews: 920,
    colors: ["White", "Yellow", "Orange", "Blue", "Space Gray"],
    storage: ["N/A"],
    image: "/images/HomePod (2nd generation).png",
    inStock: true,
    releaseDate: "2023-01-20",
    description: "HomePod mini with amazing sound, smart home capabilities, and compact size.",
    specifications: {
        display: "LED touch surface",
        chip: "S5 chip",
        camera: "N/A",
        battery: "N/A"
    }
},
{
    id: 26,
    name: "AirTag",
    price: 565.50, // 29 USD
    category: "Accessories",
    rating: 4.7,
    reviews: 1500,
    colors: ["White"],
    storage: ["N/A"],
    image: "/images/AirTag.png",
    inStock: true,
    releaseDate: "2021-04-30",
    description: "AirTag helps keep track of your everyday items in the Find My app.",
    specifications: {
        display: "N/A",
        chip: "U1 chip",
        camera: "N/A",
        battery: "Over 1 year battery life"
    }
}
];



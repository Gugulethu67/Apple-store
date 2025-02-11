'use client';
import { useState } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import { products } from '../data/products';
import { Filters } from '../type/FilterSidebarProps';

// Define the Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  colors: string[];
  storage: string[];
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

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    priceRange: [0, 2000],
    colors: [],
    storage: [],
    searchQuery: '',
    sortBy: 'newest'
  });

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    // Apply filters to products
    let result = [...products];
  
    // Category filter
    if (updatedFilters.category && updatedFilters.category !== 'all') {
      // Use toLowerCase to ensure case-insensitive matching
      result = result.filter(product => 
        product.category.toLowerCase() === updatedFilters.category.toLowerCase()
      );
    }
  
    // Price range filter
    result = result.filter(product => 
      product.price >= updatedFilters.priceRange[0] && 
      product.price <= updatedFilters.priceRange[1]
    );
  
    // Color filter
    if (updatedFilters.colors.length > 0) {
      result = result.filter(product => 
        product.colors.some(color => updatedFilters.colors.includes(color))
      );
    }
  
    // Storage filter
    if (updatedFilters.storage.length > 0) {
      result = result.filter(product => 
        product.storage.some(size => updatedFilters.storage.includes(size))
      );
    }
  
    // Search query
    if (updatedFilters.searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(updatedFilters.searchQuery.toLowerCase())
      );
    }
  
    // Sorting
    switch (updatedFilters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
  
    setFilteredProducts(result);
  };

  return (
    <Layout>
      <div className="flex gap-6 p-6">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <main className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredProducts.length} products found
              {filters.searchQuery && ` for "${filters.searchQuery}"`}
            </p>
            <select
              className="border rounded-md p-2"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
          </div>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </Layout>
  );
}
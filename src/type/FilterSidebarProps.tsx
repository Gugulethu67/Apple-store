export interface Filters {
    category: string;
    priceRange: [number, number];
    colors: string[];
    storage: string[];
    searchQuery: string;
    sortBy: string;
  }
  
  export interface FilterSidebarProps {
    filters: Filters;
    onFilterChange: (newFilters: Partial<Filters>) => void;
  }
  
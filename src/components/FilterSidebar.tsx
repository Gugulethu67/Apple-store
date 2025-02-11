
import { Search} from 'lucide-react';
import { FilterSidebarProps } from '../type/FilterSidebarProps';

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const categories = ['all', 'iPhone', 'iPad', 'Mac', 'Apple Watch', 'Accessories'];
  const colors = ['Space Gray', 'Silver', 'Gold', 'Pacific Blue'];
  const storageOptions = ['64', '128', '256', '512', '1024'];

  return (
    <aside className="w-64 bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        {categories.map((category) => (
          <label key={category} className="block mb-2">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={(e) => onFilterChange({ category: e.target.value })}
              className="mr-2"
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => 
              onFilterChange({
                priceRange: [parseInt(e.target.value), filters.priceRange[1]]
              })
            }
            className="w-24 border rounded p-1"
          />
          <span>to</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) =>
              onFilterChange({
                priceRange: [filters.priceRange[0], parseInt(e.target.value)]
              })
            }
            className="w-24 border rounded p-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        {colors.map((color) => (
          <label key={color} className="block mb-2">
            <input
              type="checkbox"
              checked={filters.colors.includes(color)}
              onChange={(e) => {
                const newColors = e.target.checked
                  ? [...filters.colors, color]
                  : filters.colors.filter((c: string) => c !== color);
                onFilterChange({ colors: newColors });
              }}
              className="mr-2"
            />
            {color}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Storage</h3>
        {storageOptions.map((size) => (
          <label key={size} className="block mb-2">
            <input
              type="checkbox"
              checked={filters.storage.includes(size)}
              onChange={(e) => {
                const newStorage = e.target.checked
                  ? [...filters.storage, size]
                  : filters.storage.filter((s: string) => s !== size);
                onFilterChange({ storage: newStorage });
              }}
              className="mr-2"
            />
            {size}GB
          </label>
        ))}
      </div>
    </aside>
  );
}
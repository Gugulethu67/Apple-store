import { useState } from 'react';
import { Product } from '../type/product';
import Image from 'next/image';

interface CompareProductsProps {
  products: Product[];
}

export default function CompareProducts({ products }: CompareProductsProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    if (selectedProducts.length < 3 && !selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeFromComparison = (product: Product) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Compare Products</h2>
      
      {/* Product Selection */}
      {selectedProducts.length < 3 && (
        <div className="mb-4">
          <select
            className="border rounded-lg p-2"
            onChange={(e) => {
              const product = products.find(p => p.id === parseInt(e.target.value));
              if (product) addToComparison(product);
            }}
          >
            <option value="">Add product to compare</option>
            {products
              .filter(p => !selectedProducts.includes(p))
              .map(product => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Comparison Table */}
      {selectedProducts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-4">Feature</th>
                {selectedProducts.map(product => (
                  <th key={product.id} className="border p-4">
                    <div className="flex flex-col items-center">
                      <Image src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-2" />
                      <h3 className="font-medium">{product.name}</h3>
                      <button
                        onClick={() => removeFromComparison(product)}
                        className="text-red-500 text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-medium">Price</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    ${product.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Rating</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.rating} ({product.reviews} reviews)
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Display</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.specifications.display}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Chip</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.specifications.chip}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Camera</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.specifications.camera}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Battery</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.specifications.battery}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Storage Options</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    {product.storage.join(', ')} GB
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Colors</td>
                {selectedProducts.map(product => (
                  <td key={product.id} className="border p-4 text-center">
                    <div className="flex justify-center gap-2">
                      {product.colors.map(color => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
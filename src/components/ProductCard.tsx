'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../type/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');

  useEffect(() => {
    setMounted(true);
    setSelectedColor(product.colors[0]);
    setSelectedStorage(product.storage[0]);
  }, [product]);

  if (!mounted) return null;

  const isNew = () => {
    const releaseDate = new Date(product.releaseDate);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return releaseDate > threeMonthsAgo;
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {isNew() && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          New
        </span>
      )}
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="mb-2">
          <p className="text-xl font-bold">R{product.price}</p>
          {!product.inStock && (
            <p className="text-red-500 text-sm">Out of Stock</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {product.storage.map((size) => (
              <button
                key={size}
                className={`px-2 py-1 rounded text-sm ${
                  selectedStorage === size
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => setSelectedStorage(size)}
              >
                {size}GB
              </button>
            ))}
          </div>
        </div>
      </div>
      <Link href={`/product/${product.id}`}>
      <button
        className={`w-full py-2 px-4 rounded-b-lg flex items-center justify-center gap-2 ${
          product.inStock
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!product.inStock}
        
      >
        <ShoppingCart className="w-5 h-5" />
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button></Link>
    </div>
  );
}
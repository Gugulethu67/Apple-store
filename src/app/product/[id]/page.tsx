'use client';
import { useState } from 'react';
import { useParams,useRouter } from 'next/navigation';
import Layout from '../../../components/Layout';
import { useCart } from '../../../components/CartContext';
import { Product } from '../../../type/product';
import { products } from '../../../data/products';
import { Link, Star } from 'lucide-react';
import Image from 'next/image';


export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const product = products.find(p => p.id === parseInt(params.id as string)) as Product;
  const { dispatch } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Product not found</h2>
        </div>
      </Layout>
    );
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity,
        selectedColor,
        selectedStorage
      }
    });
    
    // Navigate to cart page after adding item
    router.push('/cart');
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-white p-8 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold mb-6">R{product.price}</p>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-blue-500' : // app/product/[id]/page.tsx continued...
                      'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
  
              {/* Storage Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Storage</h3>
                <div className="flex gap-2">
                  {product.storage.map(size => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-lg ${
                        selectedStorage === size
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedStorage(size)}
                    >
                      {size}GB
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center gap-2">
                  <button
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-20 text-center border rounded-lg p-2"
                  />
                  <button
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
  
              {/* Add to Cart Button */}
              <button
                className={`w-full py-3 rounded-lg ${
                  product.inStock
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                onClick={addToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
  
              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Display</h3>
                    <p className="text-gray-600">{product.specifications.display}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Chip</h3>
                    <p className="text-gray-600">{product.specifications.chip}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Camera</h3>
                    <p className="text-gray-600">{product.specifications.camera}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Battery</h3>
                    <p className="text-gray-600">{product.specifications.battery}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Related Products */}
          <RelatedProducts currentProduct={product} />
        </div>
      </Layout>
    );
  }
  
  // components/RelatedProducts.tsx
  interface RelatedProductsProps {
    currentProduct: Product;
  }
  
  function RelatedProducts({ currentProduct }: RelatedProductsProps) {
    const relatedProducts = products
      .filter(p => 
        p.category === currentProduct.category && 
        p.id !== currentProduct.id
      )
      .slice(0, 4);
  
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-xl font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
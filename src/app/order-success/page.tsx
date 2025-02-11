'use client';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We will send you an email with your order details shortly.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    </Layout>
  );
}
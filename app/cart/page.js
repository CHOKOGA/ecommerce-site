'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8">
            Découvrez nos produits et ajoutez-les à votre panier
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Voir les produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Panier d'achat</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="flex-1">
                <Link href={`/products/${item.id}`}>
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm">{item.category}</p>
                <p className="text-primary font-bold mt-2">{item.price.toFixed(2)}€</p>
              </div>

              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrash />
                </button>

                <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                  >
                    <FaMinus className="text-sm" />
                  </button>
                  <span className="px-4 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>

                <p className="font-bold text-lg">
                  {(item.price * item.quantity).toFixed(2)}€
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Résumé de la commande</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-semibold">{getCartTotal().toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-semibold">
                  {getCartTotal() >= 50 ? 'Gratuite' : '5.99€'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">TVA (20%)</span>
                <span className="font-semibold">
                  {(getCartTotal() * 0.2).toFixed(2)}€
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">
                  {(getCartTotal() * 1.2 + (getCartTotal() >= 50 ? 0 : 5.99)).toFixed(2)}€
                </span>
              </div>
            </div>

            {getCartTotal() < 50 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800">
                  Ajoutez {(50 - getCartTotal()).toFixed(2)}€ pour bénéficier de la livraison gratuite
                </p>
              </div>
            )}

            <Link href="/checkout" className="btn-primary w-full block text-center mb-3">
              Passer la commande
            </Link>
            <Link href="/products" className="btn-secondary w-full block text-center">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="card group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
          <FaHeart className="text-gray-400 hover:text-red-500" />
        </button>
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              {product.price.toFixed(2)}€
            </p>
            {product.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                {product.oldPrice.toFixed(2)}€
              </p>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary text-white hover:bg-blue-600'
            }`}
          >
            <FaShoppingCart />
            <span>{isAdded ? 'Ajouté!' : 'Ajouter'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

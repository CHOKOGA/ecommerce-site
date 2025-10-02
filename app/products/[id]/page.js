'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { FaShoppingCart, FaHeart, FaStar, FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'

export default function ProductDetailPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    // Simuler le chargement du produit
    const demoProducts = [
      {
        id: 1,
        name: 'Smartphone Premium',
        price: 799.99,
        oldPrice: 899.99,
        discount: 11,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
          'https://images.unsplash.com/photo-1592286927505-b6e1a3f3c3e0?w=800'
        ],
        category: 'Électronique',
        description: 'Smartphone haut de gamme avec caméra professionnelle, écran OLED 6.7", processeur dernière génération et batterie longue durée.',
        features: [
          'Écran OLED 6.7" 120Hz',
          'Caméra principale 108MP',
          'Processeur Octa-core',
          'Batterie 5000mAh',
          '12GB RAM / 256GB Stockage',
          'Charge rapide 65W',
          '5G Compatible',
          'Résistant à l\'eau IP68'
        ],
        rating: 4.5,
        reviews: 234,
        inStock: true
      }
    ]

    const foundProduct = demoProducts.find(p => p.id === parseInt(params.id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [params.id])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-96 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images ? product.images[selectedImage] : product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                -{product.discount}%
              </div>
            )}
          </div>
          
          {product.images && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 cursor-pointer rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? '' : 'text-gray-300'} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews} avis)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold text-primary">{product.price.toFixed(2)}€</p>
              {product.oldPrice && (
                <p className="text-2xl text-gray-400 line-through">{product.oldPrice.toFixed(2)}€</p>
              )}
            </div>
            {product.inStock ? (
              <p className="text-green-600 font-semibold mt-2">En stock</p>
            ) : (
              <p className="text-red-600 font-semibold mt-2">Rupture de stock</p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          {/* Features */}
          {product.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Caractéristiques principales</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Quantité</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-200 rounded-l-lg transition-colors"
                >
                  <FaMinus />
                </button>
                <span className="px-6 font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-200 rounded-r-lg transition-colors"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                isAdded
                  ? 'bg-green-500 text-white'
                  : product.inStock
                  ? 'bg-primary text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <FaShoppingCart />
              {isAdded ? 'Ajouté au panier!' : 'Ajouter au panier'}
            </button>
            <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
              <FaHeart className="text-2xl" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">Livraison gratuite</span>
              <span className="font-semibold">Dès 50€ d'achat</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Retours</span>
              <span className="font-semibold">30 jours</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Garantie</span>
              <span className="font-semibold">2 ans</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

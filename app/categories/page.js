'use client'

import Link from 'next/link'
import { FaLaptop, FaHeadphones, FaCamera, FaMobileAlt, FaKeyboard, FaPalette } from 'react-icons/fa'

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Informatique',
      icon: <FaLaptop className="text-5xl" />,
      count: 45,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Audio',
      icon: <FaHeadphones className="text-5xl" />,
      count: 32,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Photo',
      icon: <FaCamera className="text-5xl" />,
      count: 28,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Électronique',
      icon: <FaMobileAlt className="text-5xl" />,
      count: 56,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Accessoires',
      icon: <FaKeyboard className="text-5xl" />,
      count: 67,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Créatif',
      icon: <FaPalette className="text-5xl" />,
      count: 23,
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Catégories</h1>
        <p className="text-xl text-gray-600">
          Explorez nos différentes catégories de produits
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/products?category=${category.name}`}
            className="group"
          >
            <div className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
              <div className="mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-white/90">
                {category.count} produits disponibles
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Categories Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Catégories en Vedette
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-bold mb-2">Nouvelles Arrivées</h3>
              <p className="text-lg mb-4">Découvrez les derniers produits</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Voir Plus
              </button>
            </div>
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-bold mb-2">Promotions</h3>
              <p className="text-lg mb-4">Jusqu'à -50% sur une sélection</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Profiter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

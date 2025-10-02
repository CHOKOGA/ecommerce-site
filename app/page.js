'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import Hero from '@/components/Hero'
import { FaShippingFast, FaLock, FaUndo } from 'react-icons/fa'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler le chargement des produits
    const fetchProducts = async () => {
      // Données de démonstration
      const demoProducts = [
        {
          id: 1,
          name: 'Smartphone Premium',
          price: 799.99,
          image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
          category: 'Électronique',
          description: 'Smartphone haut de gamme avec caméra professionnelle'
        },
        {
          id: 2,
          name: 'Casque Audio Sans Fil',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
          category: 'Audio',
          description: 'Casque avec réduction de bruit active'
        },
        {
          id: 3,
          name: 'Montre Connectée',
          price: 349.99,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
          category: 'Accessoires',
          description: 'Montre intelligente avec suivi de santé'
        },
        {
          id: 4,
          name: 'Ordinateur Portable',
          price: 1299.99,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
          category: 'Informatique',
          description: 'Laptop puissant pour professionnels'
        },
        {
          id: 5,
          name: 'Appareil Photo',
          price: 899.99,
          image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500',
          category: 'Photo',
          description: 'Appareil photo numérique haute résolution'
        },
        {
          id: 6,
          name: 'Tablette Graphique',
          price: 449.99,
          image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500',
          category: 'Créatif',
          description: 'Tablette pour artistes et designers'
        }
      ]
      
      setTimeout(() => {
        setProducts(demoProducts)
        setLoading(false)
      }, 500)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaShippingFast className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600">Sur toutes les commandes de plus de 50€</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLock className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600">Transactions 100% sécurisées</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUndo className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Retours Faciles</h3>
              <p className="text-gray-600">30 jours pour changer d'avis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produits Populaires</h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Rejoignez notre communauté</h2>
          <p className="text-xl mb-8">Inscrivez-vous pour recevoir des offres exclusives</p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

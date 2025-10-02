'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { FaFilter } from 'react-icons/fa'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [loading, setLoading] = useState(true)

  const categories = ['all', 'Électronique', 'Audio', 'Accessoires', 'Informatique', 'Photo', 'Créatif']

  useEffect(() => {
    // Simuler le chargement des produits
    const demoProducts = [
      {
        id: 1,
        name: 'Smartphone Premium',
        price: 799.99,
        oldPrice: 899.99,
        discount: 11,
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
        oldPrice: 1499.99,
        discount: 13,
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
      },
      {
        id: 7,
        name: 'Écouteurs Bluetooth',
        price: 89.99,
        oldPrice: 129.99,
        discount: 31,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
        category: 'Audio',
        description: 'Écouteurs sans fil avec étui de charge'
      },
      {
        id: 8,
        name: 'Clavier Mécanique',
        price: 159.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        category: 'Informatique',
        description: 'Clavier gaming RGB avec switches mécaniques'
      },
      {
        id: 9,
        name: 'Souris Gaming',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
        category: 'Informatique',
        description: 'Souris haute précision pour gamers'
      }
    ]

    setTimeout(() => {
      setProducts(demoProducts)
      setFilteredProducts(demoProducts)
      setLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filtrer par prix
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under100':
          filtered = filtered.filter(p => p.price < 100)
          break
        case '100to500':
          filtered = filtered.filter(p => p.price >= 100 && p.price < 500)
          break
        case '500to1000':
          filtered = filtered.filter(p => p.price >= 500 && p.price < 1000)
          break
        case 'over1000':
          filtered = filtered.filter(p => p.price >= 1000)
          break
      }
    }

    // Trier
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, priceRange, sortBy, products])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Tous les Produits</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaFilter className="mr-2" />
              Filtres
            </h3>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Catégorie</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">
                      {category === 'all' ? 'Toutes' : category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="font-semibold mb-3">Prix</h4>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    checked={priceRange === 'all'}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Tous les prix</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="under100"
                    checked={priceRange === 'under100'}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Moins de 100€</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="100to500"
                    checked={priceRange === '100to500'}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">100€ - 500€</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="500to1000"
                    checked={priceRange === '500to1000'}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">500€ - 1000€</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value="over1000"
                    checked={priceRange === 'over1000'}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Plus de 1000€</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">En vedette</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom A-Z</option>
            </select>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Aucun produit trouvé</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

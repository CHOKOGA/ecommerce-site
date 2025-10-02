'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  const { user, logout } = useAuth()
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            E-Shop
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
              Produits
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Catégories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              À propos
            </Link>
            
            {/* Cart */}
            <Link href="/cart" className="relative text-gray-700 hover:text-primary transition-colors">
              <FaShoppingCart className="text-2xl" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                  <FaUser className="text-xl" />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Mon Profil
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Mes Commandes
                  </Link>
                  {user.isAdmin && (
                    <Link href="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                <FaUser className="text-xl" />
                <span>Connexion</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/products" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Produits
            </Link>
            <Link href="/categories" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Catégories
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/cart" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Panier ({cartItemsCount})
            </Link>
            {user ? (
              <>
                <Link href="/profile" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  Mon Profil
                </Link>
                <Link href="/orders" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                  Mes Commandes
                </Link>
                {user.isAdmin && (
                  <Link href="/admin" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link href="/login" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                Connexion
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}

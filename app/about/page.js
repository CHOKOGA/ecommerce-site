'use client'

import { FaRocket, FaHeart, FaUsers, FaAward } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">À Propos de E-Shop</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Votre destination de confiance pour les meilleurs produits technologiques 
          et électroniques depuis 2020. Nous nous engageons à offrir une expérience 
          d'achat exceptionnelle.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaRocket className="text-4xl text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">
            Toujours à la pointe de la technologie
          </p>
        </div>

        <div className="text-center">
          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaHeart className="text-4xl text-red-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Passion</h3>
          <p className="text-gray-600">
            Passionnés par ce que nous faisons
          </p>
        </div>

        <div className="text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUsers className="text-4xl text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Communauté</h3>
          <p className="text-gray-600">
            Plus de 50,000 clients satisfaits
          </p>
        </div>

        <div className="text-center">
          <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaAward className="text-4xl text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Qualité</h3>
          <p className="text-gray-600">
            Produits certifiés et garantis
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            E-Shop a été fondé en 2020 avec une vision simple : rendre la technologie 
            accessible à tous. Ce qui a commencé comme une petite boutique en ligne 
            est devenu l'une des plateformes e-commerce les plus fiables de la région.
          </p>
          <p>
            Nous croyons que la technologie devrait améliorer la vie des gens, et c'est 
            pourquoi nous sélectionnons soigneusement chaque produit que nous proposons. 
            Notre équipe d'experts teste rigoureusement tous les articles pour garantir 
            qu'ils répondent à nos normes élevées de qualité.
          </p>
          <p>
            Aujourd'hui, nous servons des milliers de clients satisfaits et continuons 
            d'élargir notre catalogue pour inclure les dernières innovations technologiques. 
            Notre engagement envers l'excellence du service client reste au cœur de tout 
            ce que nous faisons.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
        <div>
          <p className="text-4xl font-bold text-primary mb-2">50K+</p>
          <p className="text-gray-600">Clients Satisfaits</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary mb-2">1000+</p>
          <p className="text-gray-600">Produits</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary mb-2">24/7</p>
          <p className="text-gray-600">Support Client</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary mb-2">99%</p>
          <p className="text-gray-600">Satisfaction</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Communauté</h2>
        <p className="text-xl mb-8">
          Découvrez pourquoi des milliers de clients nous font confiance
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
          Commencer à Acheter
        </button>
      </div>
    </div>
  )
}

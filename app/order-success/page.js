'use client'

import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Commande confirmée!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Merci pour votre achat. Votre commande a été traitée avec succès.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Détails de la commande</h2>
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-gray-600">Numéro de commande:</span>
              <span className="font-semibold">#{Math.floor(Math.random() * 1000000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{new Date().toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Statut:</span>
              <span className="text-green-600 font-semibold">Confirmée</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-blue-800">
            Un email de confirmation a été envoyé à votre adresse email avec tous les détails de votre commande.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/orders" className="btn-primary">
            Voir mes commandes
          </Link>
          <Link href="/products" className="btn-secondary">
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  )
}

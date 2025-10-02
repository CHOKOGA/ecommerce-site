'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { FaBox, FaTruck, FaCheckCircle } from 'react-icons/fa'

export default function OrdersPage() {
  const { user } = useAuth()
  const router = useRouter()

  // Données de démonstration
  const [orders] = useState([
    {
      id: '123456',
      date: '2025-10-01',
      status: 'delivered',
      total: 1299.99,
      items: [
        { name: 'Ordinateur Portable', quantity: 1, price: 1299.99 }
      ]
    },
    {
      id: '123457',
      date: '2025-09-28',
      status: 'shipping',
      total: 249.98,
      items: [
        { name: 'Casque Audio Sans Fil', quantity: 1, price: 199.99 },
        { name: 'Écouteurs Bluetooth', quantity: 1, price: 49.99 }
      ]
    },
    {
      id: '123458',
      date: '2025-09-25',
      status: 'processing',
      total: 799.99,
      items: [
        { name: 'Smartphone Premium', quantity: 1, price: 799.99 }
      ]
    }
  ])

  if (!user) {
    router.push('/login')
    return null
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing':
        return <FaBox className="text-blue-500" />
      case 'shipping':
        return <FaTruck className="text-orange-500" />
      case 'delivered':
        return <FaCheckCircle className="text-green-500" />
      default:
        return <FaBox className="text-gray-500" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'processing':
        return 'En préparation'
      case 'shipping':
        return 'En livraison'
      case 'delivered':
        return 'Livrée'
      default:
        return 'Inconnue'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mes Commandes</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <FaBox className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Aucune commande</h2>
          <p className="text-gray-600">Vous n'avez pas encore passé de commande</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Commande #{order.id}
                  </h3>
                  <p className="text-gray-600">
                    Passée le {new Date(order.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  {getStatusIcon(order.status)}
                  <span className="font-semibold">{getStatusText(order.status)}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold">
                      {item.price.toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  {order.total.toFixed(2)}€
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="btn-primary flex-1">
                  Voir les détails
                </button>
                {order.status === 'delivered' && (
                  <button className="btn-secondary flex-1">
                    Commander à nouveau
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

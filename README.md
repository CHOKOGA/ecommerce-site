# 🛒 Site E-Commerce Complet

Un site e-commerce moderne et complet développé avec Next.js 14, React 18, et Tailwind CSS.

## ✨ Fonctionnalités

### 🎯 Fonctionnalités Principales
- ✅ Page d'accueil attractive avec hero section
- ✅ Catalogue de produits avec filtres et tri
- ✅ Pages de détails produits
- ✅ Système de panier d'achat complet
- ✅ Processus de checkout sécurisé
- ✅ Authentification utilisateur (connexion/inscription)
- ✅ Gestion des commandes
- ✅ Design responsive (mobile, tablette, desktop)

### 🎨 Interface Utilisateur
- Design moderne et épuré
- Animations fluides
- Interface intuitive
- Thème personnalisable
- Icônes React Icons
- Composants réutilisables

### 🛍️ Fonctionnalités E-Commerce
- Ajout/suppression de produits au panier
- Modification des quantités
- Calcul automatique des totaux
- Livraison gratuite dès 50€
- Système de réduction
- Gestion du stock
- Évaluations et avis produits

## 🚀 Technologies Utilisées

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: React Icons
- **Images**: Next.js Image Optimization
- **Backend (optionnel)**: Express.js, MongoDB
- **Paiement (optionnel)**: Stripe

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd ecommerce-site
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```

Éditez le fichier `.env` avec vos propres valeurs :
```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📁 Structure du Projet

```
ecommerce-site/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.js            # Layout principal
│   ├── page.js              # Page d'accueil
│   ├── products/            # Pages produits
│   ├── cart/                # Page panier
│   ├── checkout/            # Page checkout
│   ├── login/               # Page connexion
│   ├── register/            # Page inscription
│   └── order-success/       # Page confirmation
├── components/              # Composants réutilisables
│   ├── Header.js           # En-tête
│   ├── Footer.js           # Pied de page
│   ├── ProductCard.js      # Carte produit
│   └── Hero.js             # Section hero
├── context/                # Contextes React
│   ├── CartContext.js      # Gestion du panier
│   └── AuthContext.js      # Gestion de l'authentification
├── public/                 # Fichiers statiques
├── server/                 # Backend Express (optionnel)
└── package.json           # Dépendances
```

## 🎯 Pages Disponibles

- `/` - Page d'accueil
- `/products` - Catalogue de produits
- `/products/[id]` - Détails d'un produit
- `/cart` - Panier d'achat
- `/checkout` - Processus de paiement
- `/login` - Connexion
- `/register` - Inscription
- `/order-success` - Confirmation de commande

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm run start

# Linter
npm run lint

# Démarrer le serveur backend (si configuré)
npm run server
```

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',      // Bleu
      secondary: '#8b5cf6',    // Violet
      accent: '#f59e0b',       // Orange
    },
  },
}
```

### Produits
Les produits de démonstration sont dans les fichiers de page. Pour utiliser de vraies données :
1. Configurez une base de données MongoDB
2. Créez des modèles de données
3. Connectez l'API backend
4. Remplacez les données de démonstration par des appels API

## 🔐 Authentification

L'authentification actuelle est simulée. Pour une vraie authentification :
1. Configurez MongoDB
2. Implémentez JWT
3. Créez des routes API sécurisées
4. Ajoutez bcrypt pour le hashage des mots de passe

## 💳 Paiement

Pour intégrer Stripe :
1. Créez un compte Stripe
2. Ajoutez vos clés API dans `.env`
3. Installez `@stripe/stripe-js`
4. Implémentez le checkout Stripe

## 📱 Responsive Design

Le site est entièrement responsive :
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé pour Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déployez le dossier .next
```

### Docker
```bash
docker build -t ecommerce-site .
docker run -p 3000:3000 ecommerce-site
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

Créé avec ❤️ par votre équipe de développement

## 🙏 Remerciements

- Next.js pour le framework
- Tailwind CSS pour le styling
- React Icons pour les icônes
- Unsplash pour les images de démonstration

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Contactez-nous par email

---

**Bon développement ! 🚀**

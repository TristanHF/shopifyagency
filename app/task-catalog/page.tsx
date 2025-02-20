'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// Define task type
type Task = {
  id: string
  title: string
  description: string
  price: number
  category: string
  deliveryTime: string
}

export default function TaskCatalog() {
  const tasks: Task[] = [
    // Problèmes Courants
    {
      id: "1",
      title: "Correction des Variantes dans le Panier",
      description: "Rencontrez-vous le problème de variantes incorrectes ajoutées au panier ? Notre équipe d'experts résout ce problème pour assurer une meilleure expérience client.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },
    {
      id: "2",
      title: "Résolution d'Images Étirées",
      description: "Les images de vos produits apparaissent déformées ? Nous ajustons les ratios d'aspect pour une apparence professionnelle et cohérente.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },
    {
      id: "3",
      title: "Suppression des Espaces Vides sur les Pages Collection",
      description: "Nous optimisons l'affichage de vos collections en éliminant les espaces blancs dus aux variations de hauteur des produits.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },
    {
      id: "4",
      title: "Correction des SKU de Variantes Incorrects",
      description: "Chaque variante de produit doit afficher son SKU correct pour éviter la confusion. Nous nous assurons que tout est bien attribué.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },
    {
      id: "5",
      title: "Correction des Images de Variantes Incorrectes",
      description: "Vos clients sélectionnent « rouge » et voient un produit bleu ? Nous corrigeons ce problème pour une meilleure expérience d'achat.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },
    {
      id: "6",
      title: "Ajustement des Prix de Variantes Incorrects",
      description: "Les prix des variantes ne s'actualisent pas correctement ? Nous assurons que chaque variante affiche son prix exact.",
      price: 109,
      category: "Problèmes Courants",
      deliveryTime: "48h"
    },

    // Design & Expérience Utilisateur
    {
      id: "7",
      title: "Audit de l'Interface Utilisateur",
      description: "Nous réalisons une analyse complète de votre boutique et fournissons 3 à 10 recommandations concrètes pour améliorer son design et son ergonomie.",
      price: 109,
      category: "Design & UI",
      deliveryTime: "72h"
    },
    {
      id: "8",
      title: "Intégration de Vidéos dans la Galerie Produit",
      description: "Ajoutez des vidéos YouTube ou Vimeo à vos galeries de produits pour une expérience plus immersive.",
      price: 109,
      category: "Pages Produits",
      deliveryTime: "48h"
    },

    // Adding new tasks
    {
      id: "9",
      title: "Installation de Weglot Multilingue",
      description: "Installation et configuration complète de Weglot pour une traduction professionnelle de votre boutique. Inclut la personnalisation du sélecteur de langue et son positionnement.",
      price: 109,
      category: "Apps & Intégrations",
      deliveryTime: "48h"
    },
    {
      id: "10",
      title: "Mise en Place du Carrousel de Témoignages",
      description: "Ajoutez un carrousel de témoignages clients dynamique sur votre page d'accueil pour renforcer la confiance et augmenter les conversions.",
      price: 109,
      category: "Page d'Accueil",
      deliveryTime: "48h"
    },
    {
      id: "11",
      title: "Intégration du Zoom FancyBox",
      description: "Améliorez l'expérience produit avec un zoom élégant sur les images. Les clients peuvent voir les détails en haute résolution dans une lightbox moderne.",
      price: 109,
      category: "Pages Produits",
      deliveryTime: "48h"
    },
    {
      id: "12",
      title: "Configuration des Remises par Palier",
      description: "Mettez en place des remises automatiques basées sur le montant du panier. Inclut jusqu'à 3 paliers de remise pour encourager des paniers plus importants.",
      price: 109,
      category: "Panier & Paiement",
      deliveryTime: "48h"
    },
    {
      id: "13",
      title: "Mise en Place du Fil d'Ariane",
      description: "Améliorez la navigation de votre boutique avec un fil d'Ariane intuitif. Aidez vos clients à comprendre leur position dans votre site et à naviguer facilement.",
      price: 109,
      category: "En-tête & Pied de page",
      deliveryTime: "48h"
    },
    {
      id: "14",
      title: "Ajout d'un Compteur à Rebours",
      description: "Créez un sentiment d'urgence avec un compteur à rebours élégant sur vos pages produits ou votre panier. Idéal pour les ventes flash et promotions limitées.",
      price: 109,
      category: "Fonctionnalités",
      deliveryTime: "48h"
    },
    {
      id: "15",
      title: "Intégration du Chat Facebook Messenger",
      description: "Offrez un support client instantané avec l'intégration du chat Messenger. Communiquez facilement avec vos clients là où ils sont déjà présents.",
      price: 109,
      category: "Apps & Intégrations",
      deliveryTime: "48h"
    },
    {
      id: "16",
      title: "Mise en Place des Étiquettes Produits",
      description: "Ajoutez des étiquettes attractives (Nouveau, Promo, Dernières pièces...) sur vos images produits pour mettre en avant vos offres spéciales.",
      price: 109,
      category: "Pages Collections",
      deliveryTime: "48h"
    },
    {
      id: "17",
      title: "Configuration du Panier Ajax",
      description: "Permettez à vos clients d'ajouter des produits sans rechargement de page. Une expérience d'achat fluide et moderne.",
      price: 109,
      category: "Panier & Paiement",
      deliveryTime: "72h"
    },
    {
      id: "18",
      title: "Personnalisation de la Barre d'Annonces",
      description: "Créez une barre d'annonces rotative en haut de votre site pour mettre en avant vos promotions et informations importantes.",
      price: 109,
      category: "En-tête & Pied de page",
      deliveryTime: "48h"
    },
    {
      id: "19",
      title: "Installation du Sélecteur de Variantes Visuel",
      description: "Remplacez les menus déroulants classiques par des sélecteurs visuels pour les couleurs et options de vos produits.",
      price: 109,
      category: "Pages Produits",
      deliveryTime: "48h"
    },
    {
      id: "20",
      title: "Mise en Place du Formulaire de Devis",
      description: "Ajoutez un formulaire de demande de devis professionnel pour vos produits personnalisables ou B2B.",
      price: 109,
      category: "Fonctionnalités",
      deliveryTime: "48h"
    },
    {
      id: "21",
      title: "Configuration de la Barre de Livraison Gratuite",
      description: "Encouragez des paniers plus importants avec une barre de progression vers la livraison gratuite. Personnalisable et dynamique.",
      price: 109,
      category: "Panier & Paiement",
      deliveryTime: "48h"
    },
    {
      id: "22",
      title: "Installation du Menu Multi-colonnes",
      description: "Organisez votre navigation avec un menu déroulant multi-colonnes élégant. Parfait pour les catalogues importants.",
      price: 109,
      category: "En-tête & Pied de page",
      deliveryTime: "72h"
    },
    {
      id: "23",
      title: "Intégration du Flux Instagram",
      description: "Affichez votre feed Instagram sur votre site pour plus d'engagement et une meilleure présence sociale.",
      price: 109,
      category: "Page d'Accueil",
      deliveryTime: "48h"
    },
    {
      id: "24",
      title: "Configuration des Popups Newsletter",
      description: "Augmentez votre liste d'emails avec des popups élégants et personnalisés. Incluant A/B testing et déclencheurs intelligents.",
      price: 109,
      category: "Marketing",
      deliveryTime: "48h"
    }
  ]

  return (
    <div className={`min-h-screen bg-neutral-900 text-white ${inter.className}`}>
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-700/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          Shopify Boost
        </Link>
        <Button 
          size="sm"
          className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black"
          asChild
        >
          <a 
            href="https://tristancariot.typeform.com/to/EY813bpw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nous Contacter
          </a>
        </Button>
      </header>

      {/* Tasks Grid */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className={`text-4xl md:text-5xl font-medium mb-12 text-center ${playfair.className}`}>
          Catalogue des Tâches
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-yellow-500/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium group-hover:text-yellow-400 transition-colors">
                  {task.title}
                </h3>
                <span className="text-yellow-400 font-medium">{task.price}€</span>
              </div>
              <p className="text-neutral-400 text-sm mb-4">{task.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">Délai : {task.deliveryTime}</span>
                <Button 
                  size="sm"
                  className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  asChild
                >
                  <a 
                    href="https://tristancariot.typeform.com/to/EY813bpw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sélectionner
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
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

// Task interface
interface Task {
  title: string;
  description: string;
  price: number;
  delivery: string;
  category: string;
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Task categories with their tasks
  const taskCategories = [
    {
      title: "Product Pages",
      description: "Enhance your product pages with dynamic features",
      tasks: [
        {
          title: "Add Dynamic Checkout",
          description: "Enable customers to quickly purchase products with their preferred accelerated checkout method.",
          price: 79,
          delivery: "48h",
          category: "product-pages"
        },
        {
          title: "Show Product Description Tabs",
          description: "Display product information in convenient and user-friendly tabs.",
          price: 89,
          delivery: "48h",
          category: "product-pages"
        },
        {
          title: "Get Size Chart Popup",
          description: "Help customers make informed size choices with a detailed size chart popup.",
          price: 69,
          delivery: "48h",
          category: "product-pages"
        }
      ]
    },
    {
      title: "Design & UI",
      description: "Beautiful design elements for your store",
      tasks: [
        {
          title: "Design Newsletter Popups",
          description: "Create engaging newsletter signup popups.",
          price: 149,
          delivery: "72h",
          category: "design-ui"
        },
        {
          title: "Design Collection Banners",
          description: "Create professional collection page banners.",
          price: 129,
          delivery: "72h",
          category: "design-ui"
        },
        {
          title: "Design Hero Images",
          description: "Create captivating hero images for your store.",
          price: 169,
          delivery: "72h",
          category: "design-ui"
        }
      ]
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter tasks based on search query
  const filteredCategories = taskCategories.map(category => ({
    ...category,
    tasks: category.tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.tasks.length > 0);

  return (
    <div className={`flex flex-col min-h-screen bg-neutral-900 text-foreground bg-dotted-grid ${inter.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-700/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          Shopify Boost
        </Link>
        <nav className="flex items-center gap-4">
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
          <Button 
            size="sm"
            variant="outline"
            className="rounded-full"
            asChild
          >
            <a 
              href="https://calendly.com/guillaumeferre7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre RDV
            </a>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            {/* Logo Placeholder */}
            <div className="mb-4">
              <img 
                src="/images/logoogo.png" 
                alt="Shopify Boost Logo" 
                className="w-36 h-36 mx-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center px-6 py-2 text-base font-medium text-yellow-400 mb-8 glimmer-pill fade-in bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <span className={playfair.className}>Experts Shopify en France 🇫🇷</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 tracking-tight fade-in delay-1 ${playfair.className}`}>
              L'apparence de votre<br />boutique Shopify est essentielle
            </h1>
            <p className="text-lg text-neutral-400 mb-8 fade-in delay-2">
              Un design Shopify de qualité VEND vos produits. Nous pouvons le faire pour vous.
            </p>
            <div className="fade-in delay-3 flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black"
                asChild
              >
                <a 
                  href="https://tristancariot.typeform.com/to/EY813bpw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C'EST PARTI
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/task-catalog">
                  Parcourir notre catalogue
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto scroll-animation">
            <div className="glimmer-card">
              <div className="bg-neutral-800">
                <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
                  {/* Input Section */}
                  <div className="w-full md:w-1/2 md:border-r border-neutral-700 p-6 flex flex-col">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-neutral-300 mb-2">Comment pouvons-nous vous aider ?</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Décrivez vos besoins Shopify..."
                          className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500/10 rounded-lg text-yellow-400 hover:bg-yellow-500/20 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Chat Interface */}
                  <div className="hidden md:flex md:w-1/2 md:flex-col">
                    <div className="p-4 border-b border-neutral-700 flex items-center gap-3">
                      <img 
                        src="/images/agent-avatar.jpg" 
                        alt="Agent" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-lg font-medium">Guillaume</h2>
                        <span className="text-sm text-green-400">En ligne</span>
                      </div>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {/* Agent Message */}
                      <div className="flex gap-3">
                        <img 
                          src="/images/agent-avatar.jpg" 
                          alt="Agent" 
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="max-w-[85%] p-4 bg-neutral-700 rounded-lg rounded-tl-none">
                          <p className="text-sm text-neutral-200">
                            Bonjour ! Je suis Guillaume, votre expert Shopify. Comment puis-je vous aider aujourd'hui ?
                          </p>
                        </div>
                      </div>

                      {/* Client Message */}
                      <div className="flex justify-end gap-3">
                        <div className="max-w-[85%] p-4 bg-yellow-500/10 rounded-lg rounded-tr-none">
                          <p className="text-sm text-yellow-400">
                            J'aimerais améliorer la page produit de ma boutique
                          </p>
                        </div>
                        <img 
                          src="/images/client-avatar.jpg" 
                          alt="Client" 
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                      </div>

                      {/* Status Updates with Agent Avatar */}
                      <div className="flex gap-3">
                        <img 
                          src="/images/agent-avatar.jpg" 
                          alt="Agent" 
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col gap-2">
                          <div className="p-3 bg-neutral-700 rounded-lg rounded-tl-none">
                            <p className="text-sm font-medium text-yellow-400">Analyse en cours</p>
                          </div>
                          <div className="p-3 bg-neutral-700 rounded-lg">
                            <p className="text-sm font-medium text-yellow-400">Revue du design</p>
                          </div>
                          <div className="p-3 bg-neutral-700 rounded-lg">
                            <p className="text-sm font-medium text-yellow-400">Implémentation</p>
                          </div>
                          <div className="p-3 bg-neutral-700 rounded-lg">
                            <p className="text-sm font-medium text-yellow-400">Phase de test</p>
                          </div>
                        </div>
                      </div>

                      {/* Final Message */}
                      <div className="flex gap-3">
                        <img 
                          src="/images/agent-avatar.jpg" 
                          alt="Agent" 
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="max-w-[85%] p-4 bg-neutral-700 rounded-lg rounded-tl-none">
                          <p className="text-sm text-neutral-200">
                            Votre boutique Shopify est prête pour la revue finale !
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-neutral-700">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Écrivez votre message..."
                          className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500/10 rounded-lg text-yellow-400 hover:bg-yellow-500/20 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 scroll-animation">
              <h2 className={`text-3xl md:text-4xl font-medium mb-3 ${playfair.className}`}>Ce que nous pouvons faire pour vous</h2>
              <p className="text-neutral-400 text-lg">
                Des développeurs expérimentés et certifiés, des designers graphiques primés, des artistes numériques, des data scientists, des experts marketing digital et des rédacteurs créatifs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Card 1 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-1 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Personnalisation de thème
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Donnez vie à votre boutique avec un thème sur mesure. Nous optimisons chaque détail pour une expérience client unique.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-2 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Design & Identité visuelle
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Création d'éléments graphiques percutants pour renforcer votre image de marque et captiver vos clients.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-3 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Organisation des collections
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Structuration intelligente de vos produits pour une navigation fluide et des ventes optimisées.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-1 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Tunnel d'achat optimisé
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Amélioration du parcours client pour maximiser vos conversions et réduire les abandons de panier.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-2 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Pages produits attractives
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Mise en valeur de vos produits avec des pages élégantes et convaincantes qui convertissent.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-3 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 17l6-6-6-6"></path>
                    <path d="M12 19h8"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>
                  Applications & Intégrations
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Sélection et configuration des meilleures applications pour enrichir les fonctionnalités de votre boutique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 px-6 border-t border-neutral-700">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-medium mb-6 ${playfair.className}`}>
                Petites Tâches. Prix Simple
              </h2>
              <p className="text-neutral-400 text-lg">
                Nous proposons trois forfaits de tâches au choix, selon vos besoins, avec un prix de lancement limité dans le temps :
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-full p-1 bg-neutral-800 border border-neutral-700">
                <button className="px-6 py-2 rounded-full bg-yellow-500 text-black font-medium">
                  Mensuel
                </button>
                <Link 
                  href="/task-catalog"
                  className="px-6 py-2 rounded-full text-neutral-400 hover:text-white transition-colors"
                >
                  À l'unité
                </Link>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Occasional Plan */}
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-yellow-500/20 transition-all">
                <div className="mb-8">
                  <h3 className={`text-2xl font-medium mb-4 ${playfair.className}`}>Occasionnel</h3>
                  <p className="text-neutral-400 mb-6">
                    3 tâches par mois. Une demande à la fois. Pause ou annulation à tout moment. Livraison : Toutes les 48 heures.
                  </p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">€175</span>
                    <span className="text-neutral-400 mb-1">par mois</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://tristancariot.typeform.com/to/EY813bpw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      S'abonner
                    </a>
                  </Button>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-yellow-500/20 transition-all">
                <div className="mb-8">
                  <h3 className={`text-2xl font-medium mb-4 ${playfair.className}`}>Standard</h3>
                  <p className="text-neutral-400 mb-6">
                    10 tâches par mois. Une demande à la fois. Pause ou annulation à tout moment. Livraison : Toutes les 48 heures.
                  </p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">€690</span>
                    <span className="text-neutral-400 mb-1">par mois</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://tristancariot.typeform.com/to/EY813bpw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      S'abonner
                    </a>
                  </Button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-yellow-500/20 transition-all">
                <div className="mb-8">
                  <h3 className={`text-2xl font-medium mb-4 ${playfair.className}`}>Pro</h3>
                  <p className="text-neutral-400 mb-6">
                    Tâches illimitées. Une demande à la fois. Pause ou annulation à tout moment. Livraison : Une toutes les 48 heures. Sites/projets illimités.
                  </p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">€1,795</span>
                    <span className="text-neutral-400 mb-1">par mois</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://tristancariot.typeform.com/to/EY813bpw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      S'abonner
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-sm text-neutral-400">* 10 or more credit tasks price</p>
            </div>
          </div>
        </section>

        {/* Contact Section (replacing early-access-form) */}
        <section id="contact-section" className="py-20 px-6 border-t border-neutral-700 bg-neutral-800/80">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="scroll-animation">
              <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${playfair.className}`}>
                Prêt à Transformer Votre Boutique ?
              </h2>
              <p className="text-neutral-400 mb-12">
                Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
              </p>
            </div>
            <div className="max-w-[400px] mx-auto scroll-animation">
              <Button 
                size="lg"
                className="w-full py-8 text-xl rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-200 ease-in-out transform hover:scale-105"
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
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 px-6 border-t border-neutral-700">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-4xl md:text-5xl font-medium text-center mb-16 ${playfair.className}`}>
              Comme plus de 35 boutiques, Ils nous font confiance depuis 2019
            </h2>

            {/* Client Names Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
              {/* Real Clients */}
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <a href="https://maison-boissier.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-xl font-serif">Maison Boissier</a>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <a href="https://hygee.co/" target="_blank" rel="noopener noreferrer"
                   className="text-xl font-sans tracking-wide">Hygee</a>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <a href="https://www.glove-story.com/" target="_blank" rel="noopener noreferrer"
                   className="text-xl font-sans">Glove Story</a>
              </div>

              {/* Fictional Clients */}
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-serif">L'Atelier Parisien</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-sans tracking-wider">Maison Lumière</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-serif italic">Le Petit Jardin</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-sans">Café & Compagnie</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-mono">La Petite Épicerie</div>
              </div>
            </div>

            {/* Shopify Expert Badge and Text */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#95BF47] to-[#5E8E3E] rounded-xl opacity-20 blur-sm"></div>
                <img 
                  src="/images/shopify-logo.svg" 
                  alt="Shopify Logo" 
                  className="w-full h-full object-contain p-6 relative z-10"
                />
              </div>
              <div className="max-w-xl text-center md:text-left">
                <span className="font-bold text-lg">En tant qu'experts Shopify,</span> nous accompagnons plus de 30 boutiques en ligne dans leur développement quotidien. Notre expertise nous permet d'offrir des solutions sur mesure pour chaque besoin spécifique de votre e-commerce.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-700/50 scroll-animation">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="text-sm text-neutral-400">
            © 2024 Shopify Boost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
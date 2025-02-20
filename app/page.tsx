'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
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

export default function Page() {
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

  useEffect(() => {
    const loadTypeform = () => {
      const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadTypeform();
  }, []);

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
            data-tf-popup="EY813bpw"
            data-tf-opacity="100"
            data-tf-size="100"
            data-tf-iframe-props="title=Contact Shopify Boost"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
          >
            Contact Us
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
              <span className={playfair.className}>Shopify Experts in France 🇫🇷</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 tracking-tight fade-in delay-1 ${playfair.className}`}>
              The look and feel of your<br />Shopify store matters
            </h1>
            <p className="text-lg text-neutral-400 mb-8 fade-in delay-2">
              Great Shopify design SELLS your products. We can do that for you.
            </p>
            <div className="fade-in delay-3 flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black"
                data-tf-popup="EY813bpw"
                data-tf-opacity="100"
                data-tf-size="100"
                data-tf-iframe-props="title=Contact Shopify Boost"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
              >
                LET'S GO
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/task-catalog">
                  Browse our task catalog
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
                      <label className="block text-sm font-medium text-neutral-300 mb-2">What should we help you with?</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Describe your Shopify needs..."
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
                    
                    <div>
                      <h3 className="text-sm font-medium text-neutral-400 mb-4">Start from</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[...Array(2)].map((_, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors text-left group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Template {i + 1}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cursor Composer Section - Hidden on mobile */}
                  <div className="hidden md:flex md:w-1/2 md:flex-col">
                    <div className="p-4 border-b border-neutral-700">
                      <h2 className="text-lg font-medium">Task Manager</h2>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {/* First Message */}
                      <div className="flex justify-end">
                        <div className="max-w-[85%] p-4 bg-neutral-700 rounded-lg">
                          <p className="text-sm text-neutral-200 text-right">
                            I'll help you with your Shopify store.
                          </p>
                        </div>
                      </div>

                      {/* Status Updates */}
                      <div className="flex flex-col gap-2">
                        <div className="self-end max-w-[85%] p-3 bg-neutral-700 rounded-lg">
                          <p className="text-sm font-medium text-yellow-400 text-right">Task in progress</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-700 rounded-lg">
                          <p className="text-sm font-medium text-yellow-400 text-right">Design review</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-700 rounded-lg">
                          <p className="text-sm font-medium text-yellow-400 text-right">Implementation</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-700 rounded-lg">
                          <p className="text-sm font-medium text-yellow-400 text-right">Testing phase</p>
                        </div>
                      </div>

                      {/* Completion Message */}
                      <div className="flex justify-end">
                        <div className="max-w-[85%] p-4 bg-neutral-700 rounded-lg">
                          <p className="text-sm text-neutral-200 text-right">
                            Your Shopify store is ready for review
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-neutral-700">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Type your message..."
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
              <h2 className={`text-3xl md:text-4xl font-medium mb-3 ${playfair.className}`}>What we can do for you</h2>
              <p className="text-neutral-400 text-lg">Experienced and certified developers, award winning graphic designers and digital artists, skilled data scientists, digital marketers, and creative copywriters.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-1 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Fix and style Shopify themes</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Customize and optimize your Shopify theme to create a unique and engaging shopping experience.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-2 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Create custom graphics</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Professional design services to make your brand stand out with custom graphics and visual elements.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-3 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Organize shop collections</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Structure your product collections for maximum visibility and sales conversion.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-1 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Optimize cart pages</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Streamline your checkout process and optimize cart pages for higher conversion rates.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-2 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Customize product pages</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Create engaging product pages that showcase your items and drive sales.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700/80 hover:border-yellow-500/20 transition-colors scroll-animation scroll-delay-3 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 17l6-6-6-6"></path>
                    <path d="M12 19h8"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-yellow-400 transition-colors ${playfair.className}`}>Set up Shopify apps</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Install and configure the best Shopify apps to enhance your store's functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 px-6 border-t border-neutral-700">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-medium mb-6 ${playfair.className}`}>Small Tasks. Simple Pricing</h2>
              <p className="text-neutral-400 text-lg">
                We are offering three task bundles for you to choose from, according to your needs, with a limited-time introductory price:
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-full p-1 bg-neutral-800 border border-neutral-700">
                <button className="px-6 py-2 rounded-full bg-yellow-500 text-black font-medium">Monthly</button>
                <button className="px-6 py-2 rounded-full text-neutral-400 hover:text-white transition-colors">One-time</button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Standard Plan */}
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-yellow-500/20 transition-all">
                <div className="mb-8">
                  <h3 className={`text-2xl font-medium mb-4 ${playfair.className}`}>Standard</h3>
                  <p className="text-neutral-400 mb-6">
                    10 tasks per month. One request at a time. Pause or cancel anytime. Task delivery: Every 48 hours.
                  </p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">$690</span>
                    <span className="text-neutral-400 mb-1">per month</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                    data-tf-popup="EY813bpw"
                    data-tf-opacity="100"
                    data-tf-size="100"
                    data-tf-iframe-props="title=Contact Shopify Boost"
                    data-tf-transitive-search-params
                    data-tf-medium="snippet"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-yellow-500/20 transition-all">
                <div className="mb-8">
                  <h3 className={`text-2xl font-medium mb-4 ${playfair.className}`}>Pro</h3>
                  <p className="text-neutral-400 mb-6">
                    Unlimited tasks. One request at a time. Pause or cancel anytime. Task delivery: One every 48 hours. Unlimited sites/projects.
                  </p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">$1,795</span>
                    <span className="text-neutral-400 mb-1">per month</span>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                    data-tf-popup="EY813bpw"
                    data-tf-opacity="100"
                    data-tf-size="100"
                    data-tf-iframe-props="title=Contact Shopify Boost"
                    data-tf-transitive-search-params
                    data-tf-medium="snippet"
                  >
                    Subscribe
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
              <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${playfair.className}`}>Ready to Transform Your Store?</h2>
              <p className="text-neutral-400 mb-12">Let's discuss your project and create something amazing together.</p>
            </div>
            <div className="max-w-[400px] mx-auto scroll-animation">
              <Button 
                size="lg"
                className="w-full py-8 text-xl rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-200 ease-in-out transform hover:scale-105"
                data-tf-popup="EY813bpw"
                data-tf-opacity="100"
                data-tf-size="100"
                data-tf-iframe-props="title=Contact Shopify Boost"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 px-6 border-t border-neutral-700">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-4xl md:text-5xl font-medium text-center mb-16 ${playfair.className}`}>
              Trusted by over 600 Shopify stores since 2016
            </h2>

            {/* First Row of Logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-serif">Luxe·Mode</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-mono tracking-tight text-xl">URBAN/CRAFT</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-sans text-2xl tracking-widest">NORDIC</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-serif italic text-2xl">Artisano</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-sans text-xl font-bold tracking-wider">ECO·LIVING</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-mono text-xl">TECH/HUB</div>
              </div>
            </div>

            {/* Second Row of Logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-sans text-xl font-light tracking-[0.2em]">MINIMALIST</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-serif text-2xl">Pure&Simple</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-mono text-xl font-bold">BYTE·BOX</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-sans text-2xl tracking-wide">FLOW·CO</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="italic font-serif text-2xl">Botanica</div>
              </div>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="font-mono text-xl tracking-tight">DEV/SHOP</div>
              </div>
            </div>

            {/* Shopify Expert Badge and Text */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
              <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#95BF47] to-[#5E8E3E] rounded-lg opacity-20"></div>
                <img 
                  src="/images/shopify-logo.svg" 
                  alt="Shopify Logo" 
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="max-w-xl text-center md:text-left">
                <span className="font-bold">As Shopify experts,</span> we've spent more than ten years studying every aspect of the day-to-day needs of your digital commerce. That's why we are introducing our Makeover Tasks, small but substantial design customizations to upgrade your store's look.
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
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Discord</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v0"/>
                <path d="M6 18v-7a3 3 0 0 1 3-3h7"/>
                <circle cx="8" cy="12" r="1"/>
                <circle cx="16" cy="12" r="1"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
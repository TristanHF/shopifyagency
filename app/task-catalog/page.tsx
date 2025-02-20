'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Playfair_Display, Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

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

export default function TaskCatalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Initialize Typeform embed
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

  // Task data
  const tasks: Task[] = [
    // Product Pages
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
    },
    {
      title: "Add Image Zoom (Fancybox)",
      description: "Enhance product images with FancyBox zoom functionality for detailed viewing.",
      price: 79,
      delivery: "48h",
      category: "product-pages"
    },
    {
      title: "Show VAT Prices",
      description: "Display prices with and without taxes for international customers.",
      price: 89,
      delivery: "48h",
      category: "product-pages"
    },
    {
      title: "Get Product Swatches",
      description: "Replace dropdown lists with visual swatches for product variants.",
      price: 99,
      delivery: "48h",
      category: "product-pages"
    },
    // Collection Pages
    {
      title: "Get Collection Swatches",
      description: "Display color swatches on collection pages with image preview on hover.",
      price: 99,
      delivery: "48h",
      category: "collection-pages"
    },
    {
      title: "Show Only 1 Left in Stock",
      description: "Create urgency with stock level notifications on collection pages.",
      price: 69,
      delivery: "48h",
      category: "collection-pages"
    },
    {
      title: "Change Image on Mouse Hover",
      description: "Show alternate product images when customers hover over products.",
      price: 79,
      delivery: "48h",
      category: "collection-pages"
    },
    {
      title: "Get Infinite Scrolling",
      description: "Implement endless scrolling for collection pages.",
      price: 89,
      delivery: "48h",
      category: "collection-pages"
    },
    // Cart & Checkout
    {
      title: "Add 'Remove' Button on Cart Page",
      description: "Add convenient remove buttons for cart items.",
      price: 59,
      delivery: "48h",
      category: "cart-checkout"
    },
    {
      title: "Update Cart on Quantity Change",
      description: "Enable automatic cart updates when quantity changes.",
      price: 79,
      delivery: "48h",
      category: "cart-checkout"
    },
    {
      title: "Set Minimum Order Amount",
      description: "Implement minimum order requirements for checkout.",
      price: 69,
      delivery: "48h",
      category: "cart-checkout"
    },
    {
      title: "Add Donation Feature",
      description: "Allow customers to add donations during checkout.",
      price: 89,
      delivery: "48h",
      category: "cart-checkout"
    },
    // Header & Footer
    {
      title: "Add Sticky Header",
      description: "Implement a fixed navigation bar that stays visible while scrolling.",
      price: 79,
      delivery: "48h",
      category: "header-footer"
    },
    {
      title: "Show Cart Total Price",
      description: "Display cart total in the header next to cart icon.",
      price: 59,
      delivery: "48h",
      category: "header-footer"
    },
    {
      title: "Add Custom Cart Icon",
      description: "Implement a custom cart icon with item counter.",
      price: 69,
      delivery: "48h",
      category: "header-footer"
    },
    {
      title: "Add Search Icon with Popup",
      description: "Add a search icon that reveals a popup search form.",
      price: 79,
      delivery: "48h",
      category: "header-footer"
    },
    // Design & UI
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
    },
    {
      title: "Revamp and Modernize Logo",
      description: "Give your logo a modern refresh with subtle enhancements.",
      price: 199,
      delivery: "96h",
      category: "design-ui"
    },
    // Common Issues
    {
      title: "Fix Wrong Variant Added to Cart",
      description: "Resolve issues with incorrect variants being added to cart.",
      price: 89,
      delivery: "48h",
      category: "common-issues"
    },
    {
      title: "Fix Cart Counter Not Updating",
      description: "Resolve cart counter update issues for better UX.",
      price: 69,
      delivery: "48h",
      category: "common-issues"
    },
    {
      title: "Fix Inaccurate Variant SKUs",
      description: "Ensure correct SKU display for all product variants.",
      price: 79,
      delivery: "48h",
      category: "common-issues"
    },
    // Functionality
    {
      title: "Implement Newsletter Signup",
      description: "Add newsletter signup with Mailchimp/Klaviyo integration.",
      price: 99,
      delivery: "48h",
      category: "functionality"
    },
    {
      title: "Add Social Share Popup",
      description: "Enable social sharing for products and blog posts.",
      price: 79,
      delivery: "48h",
      category: "functionality"
    },
    {
      title: "Hide Prices for Non-Logged Users",
      description: "Restrict price visibility to logged-in users only.",
      price: 89,
      delivery: "48h",
      category: "functionality"
    },
    // Apps & Integrations
    {
      title: "Set Up Weglot App",
      description: "Install and configure Weglot for multi-language support.",
      price: 129,
      delivery: "72h",
      category: "apps"
    },
    {
      title: "Set Up POWr Apps",
      description: "Install and configure POWr.io apps for your store.",
      price: 109,
      delivery: "48h",
      category: "apps"
    },
    {
      title: "Set Up Fortune Wheel App",
      description: "Configure Proof Factor's Fortune Wheel for conversions.",
      price: 99,
      delivery: "48h",
      category: "apps"
    },
    // Homepage Elements
    {
      title: "Add Featured Collection Carousel",
      description: "Create a sliding carousel of featured products.",
      price: 89,
      delivery: "48h",
      category: "homepage"
    },
    {
      title: "Add Logo List Section",
      description: "Display partner/brand logos in a professional layout.",
      price: 69,
      delivery: "48h",
      category: "homepage"
    },
    {
      title: "Add Testimonial Carousel",
      description: "Showcase customer testimonials in a sliding carousel.",
      price: 99,
      delivery: "48h",
      category: "homepage"
    }
  ]

  // Filter tasks based on search and category
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={`flex flex-col min-h-screen bg-neutral-900 text-foreground bg-dotted-grid ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-700/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          Shopify Boost
        </Link>
        <nav className="flex items-center gap-4">
          <Button 
            size="sm"
            variant="outline"
            className="rounded-full"
            asChild
          >
            <Link href="/">
              Back to Home
            </Link>
          </Button>
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
        {/* Hero Section with Search */}
        <section className="py-20 px-6 relative">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 tracking-tight ${playfair.className}`}>
              Task Catalog
            </h1>
            <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
              Browse our comprehensive list of Shopify development and design tasks. Each task is carefully scoped and priced to help you understand exactly what you'll get.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('all')}
              >
                All Tasks
              </Button>
              <Button
                variant={selectedCategory === 'product-pages' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('product-pages')}
              >
                Product Pages
              </Button>
              <Button
                variant={selectedCategory === 'collection-pages' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('collection-pages')}
              >
                Collection Pages
              </Button>
              <Button
                variant={selectedCategory === 'cart-checkout' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('cart-checkout')}
              >
                Cart & Checkout
              </Button>
              <Button
                variant={selectedCategory === 'header-footer' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('header-footer')}
              >
                Header & Footer
              </Button>
              <Button
                variant={selectedCategory === 'design-ui' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('design-ui')}
              >
                Design & UI
              </Button>
              <Button
                variant={selectedCategory === 'common-issues' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('common-issues')}
              >
                Common Issues
              </Button>
              <Button
                variant={selectedCategory === 'functionality' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('functionality')}
              >
                Functionality
              </Button>
              <Button
                variant={selectedCategory === 'apps' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('apps')}
              >
                Apps & Integrations
              </Button>
              <Button
                variant={selectedCategory === 'homepage' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('homepage')}
              >
                Homepage Elements
              </Button>
            </div>
          </div>
        </section>

        {/* Task Categories */}
        <section className="py-20 px-6 border-t border-neutral-700">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task, index) => (
                <div key={index} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-yellow-500/20 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-medium group-hover:text-yellow-400 transition-colors">{task.title}</h3>
                    <span className="text-yellow-400 font-medium">${task.price}</span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4">{task.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Delivery: {task.delivery}</span>
                    <Button 
                      size="sm" 
                      className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      onClick={() => {
                        // Handle task selection
                      }}
                    >
                      Select Task
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-700/50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="text-sm text-neutral-400">
            © 2024 Shopify Boost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 
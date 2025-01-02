'use client'

import { Twitter, Facebook, Instagram, PinIcon as Pinterest } from 'lucide-react'
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* First Column */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2">
              {["Find a Stockist", "Become a Stockist", "Sign Up for Email", "Contact Us", "Shipping & Returns"].map((item, index) => (
                <Link key={index} href="#" className={`text-sm hover:text-gray-600 transition-colors`}>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Customer Care</h3>
            <nav className="flex flex-col space-y-2">
              {["Order Status", "Delivery", "Returns", "Payment Options", "FAQ", "Size Guide"].map((item, index) => (
                <Link key={index} href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">About Simone Walsh</h3>
            <nav className="flex flex-col space-y-2">
              {["Our Story", "Sustainability", "Ethical Practices", "Blog"].map((item, index) => (
                <Link key={index} href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <Link href="https://twitter.com/" className="p-2 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Twitter className="w-5 h-5 text-gray-800" />
              </div>
            </Link>
            <Link href="https://facebook.com/" className="p-2 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Facebook className="w-5 h-5 text-gray-800" />
              </div>
            </Link>
            <Link href="https://instagram.com/" className="p-2 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-gray-800" />
              </div>
            </Link>
            <Link href="https://pinterest.com/" className="p-2 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Pinterest className="w-5 h-5 text-gray-800" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Australia</span>
              </div>
              <p className="text-xs text-gray-600">© {new Date().getFullYear()} Simone Walsh Jewelry. All Rights Reserved</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Accessibility", "Cookie Settings"].map((item, index) => (
                <Link key={index} href="#" className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer








import { Menu, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <header className="top-0 left-0 right-0 z-50 fixed ">
      {/* fixed add in the class */}
      <div className="h-16 sm:h-20 bg-[#2e0249] border-b border-[#a91079]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <div className='h-60 w-24 sm:h-[900px] sm:w-[300px] relative'>
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" fill style={{objectFit: 'contain'}} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Home</Link>
            <Link href="/about" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">About</Link>
            <Link href="/blog" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Blog</Link>
            <Link href={' /contact'} className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Contact</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[200px] bg-[#570a57] text-[#ffffff] border-none rounded-full pl-10 placeholder-[#a91079] focus:ring-2 focus:ring-[#a91079]"
              />
              <Search className="w-5 h-5 absolute left-3 text-[#a91079]" />
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-[#ffffff] hover:text-[#a91079] p-1 sm:p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-[#2e0249] border-l border-[#a91079]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Home</Link>
                  <Link href="/about" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">About</Link>
                  <Link href="/blog" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Blog</Link>
                  <Link href="/contact" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079] transition-colors">Contact</Link>
                </nav>
                <div className="mt-8 relative">
                  <Input
                    type="search"
                    placeholder="Search"
                    className="w-full bg-[#570a57] text-[#ffffff] border-none rounded-full pl-10 placeholder-[#a91079] focus:ring-2 focus:ring-[#a91079]"
                  />
                  <Search className="w-5 h-5 absolute left-3 top-2.5 text-[#a91079]" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar




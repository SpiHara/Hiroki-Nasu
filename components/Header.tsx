"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          奈須大輝
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/blog" className="transition-colors hover:text-blue-600">
            Blog
          </Link>
          <Link href="/projects" className="transition-colors hover:text-blue-600">
            Projects
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="p-2 rounded-md border bg-white/80">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="grid gap-4 text-base">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
                <Link href="/projects" className="hover:text-blue-600">
                  Projects
                </Link>
                <Link href="/#contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}





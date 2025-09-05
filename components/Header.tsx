"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          奈須大輝
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/blog" className="transition-colors hover:text-blue-600">
            Blog
          </Link>
          <Link href="/projects" className="transition-colors hover:text-blue-600">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

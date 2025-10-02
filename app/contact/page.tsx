"use client"

import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  const handleSelect = (value: string) => {
    if (value === "email") {
      window.location.href = "mailto:nasu.hiroki.23@shiuzoka.ac.jp"
    } else if (value === "github") {
      window.open("https://github.com/SpiHara", "_blank")
    } else if (value === "linkedin") {
      router.push("/not-found")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">お問い合わせ方法</h1>

        <div className="space-y-4">
          <button
            onClick={() => handleSelect("email")}
            className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Email
          </button>

          <button
            onClick={() => handleSelect("github")}
            className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub
          </button>

          <button
            onClick={() => handleSelect("linkedin")}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  )
}


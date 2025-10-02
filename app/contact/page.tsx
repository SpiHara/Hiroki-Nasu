"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const [method, setMethod] = useState("")
  const router = useRouter()

  const handleSelect = (value: string) => {
    setMethod(value)

    if (value === "email") {
      // メールソフトを開く
      window.location.href = "mailto:nasu.hiroki.23@shiuzoka.ac.jp"
    } else if (value === "github") {
      // GitHubプロフィールに飛ぶ
      window.open("https://github.com/SpiHara", "_blank")
    } else if (value === "linkedin") {
      // LinkedInは強制的に404へ
      router.push("/not-found")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">お問い合わせ方法</h1>

        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contact"
              value="email"
              checked={method === "email"}
              onChange={() => handleSelect("email")}
              className="w-5 h-5 text-purple-600"
            />
            <span>Email</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contact"
              value="github"
              checked={method === "github"}
              onChange={() => handleSelect("github")}
              className="w-5 h-5 text-purple-600"
            />
            <span>GitHub</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contact"
              value="linkedin"
              checked={method === "linkedin"}
              onChange={() => handleSelect("linkedin")}
              className="w-5 h-5 text-purple-600"
            />
            <span>LinkedIn</span>
          </label>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError("全ての項目を入力してください。")
      return
    }
    console.log("送信内容:", { name, email, message })
    setError("")
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
      <div className="container mx-auto max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">お問い合わせ</h1>
        {submitted ? (
          <div className="p-6 bg-green-50 border border-green-300 rounded-lg text-center">
            <p className="text-green-700 font-medium">
              お問い合わせありがとうございます！<br />
              追ってご連絡いたします。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              新規入力
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded text-sm">{error}</div>}
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">お名前</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例：奈須 大輝"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">メールアドレス</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">お問い合わせ内容</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ご質問やご依頼内容をご記入ください。"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              送信する
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

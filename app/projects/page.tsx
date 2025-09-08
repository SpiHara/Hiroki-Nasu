"use client"

import { useEffect, useState } from "react"

type Repo = { name: string; html_url: string; description: string }

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const perPage = 6

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true)
      try {
        const cached = localStorage.getItem("github_repos")
        if (cached) {
          setRepos(JSON.parse(cached))
        } else {
          const res = await fetch("https://api.github.com/users/SpiHara/repos")
          const data = await res.json()
          setRepos(data)
          localStorage.setItem("github_repos", JSON.stringify(data))
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const totalPages = Math.ceil(repos.length / perPage)
  const displayedRepos = repos.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">プロジェクト</h1>
        {loading ? (
          <p className="text-center">読み込み中...</p>
        ) : (
          <>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {displayedRepos.map((repo, i) => (
                <a
                  key={i}
                  href={repo.html_url}
                  target="_blank"
                  className="block p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
                  <p className="text-gray-500 text-sm">{repo.description}</p>
                </a>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? "bg-purple-600 text-white" : "bg-white border"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

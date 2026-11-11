"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, BookOpen, Github, Lightbulb, Users } from "lucide-react"

type Repo = { name: string; html_url: string; description: string }

const achievements = [
  {
    period: "Research",
    title: "人間の判断特性のモデル化",
    description:
      "認知実験を通して人間の意思決定プロセスを捉え、認知バイアスや判断特性をモデル化する研究に取り組んでいます。",
    icon: BookOpen,
    accent: "text-blue-600 dark:text-blue-400",
  },
  {
    period: "Laboratory",
    title: "白砂研究室での研究活動",
    description:
      "認知科学・情報処理・人間工学の視点から、意思決定支援につながる知見を探求しています。",
    icon: Users,
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    period: "Development",
    title: "研究を支える開発・制作",
    description:
      "研究や学習で得た知識をもとに、データ整理や検証を支えるツール・Webサイトの制作にも取り組んでいます。",
    icon: Lightbulb,
    accent: "text-amber-600 dark:text-amber-400",
  },
]

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const perPage = 6

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true)
      try {
        const res = await fetch("https://api.github.com/users/SpiHara/repos")
        const data = await res.json()
        setRepos(data)
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Portfolio
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">プロジェクト・業績</h1>
          <p className="text-muted-foreground">
            研究活動や制作物など、これまでの取り組みをまとめています。
          </p>
        </div>

        <section aria-labelledby="achievements-heading" className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">Activities</p>
              <h2 id="achievements-heading" className="text-2xl font-bold tracking-tight">
                研究・活動実績
              </h2>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:block">What I work on</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <article
                  key={achievement.title}
                  className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <Icon className={`mb-5 h-7 w-7 ${achievement.accent}`} aria-hidden="true" />
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {achievement.period}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{achievement.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="github-heading">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">Open Source</p>
              <h2 id="github-heading" className="text-2xl font-bold tracking-tight">
                GitHub Projects
              </h2>
            </div>
            <a
              href="https://github.com/SpiHara"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              GitHubを見る <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        {loading ? (
          <p className="text-center">読み込み中...</p>
        ) : (
          <>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {displayedRepos.map((repo, i) => (
                <a
                  key={repo.html_url || i}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-white/60 bg-white/80 p-5 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 sm:p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground">{repo.description || "GitHub repository"}</p>
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
        </section>
      </div>
    </div>
  )
}

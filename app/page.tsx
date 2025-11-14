"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, BookOpen, GraduationCap, Brain, Users } from "lucide-react"
import Link from "next/link"
import { ProtectedImage } from "@/components/ui/protected-image"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">奈須大輝</h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl">Hiroki Nasu</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              静岡大学情報学部白砂研究室 | 認知科学研究者
            </p>
            <p className="mx-auto max-w-[600px] text-gray-500">Cognitive Science Researcher at Shizuoka University</p>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#research">
                <BookOpen className="mr-2 h-4 w-4" />
                View Research
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  {/* 画像を左側に追加 */}
                  <div className="flex justify-center md:justify-start">
                    <ProtectedImage
                      src="/photo.jpg"
                      alt="奈須大輝"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg object-cover w-full max-w-sm"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">自己紹介</h3>
                  <p className="text-gray-600 leading-relaxed">
                    静岡大学情報学部情報社会学科の3年生として、認知科学の分野で研究に取り組んでいます。
                    白砂研究室に所属し、適応的道具箱に関する研究を行っています。
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      指導教員：
                      <Button variant="link" size="sm" className="p-0 h-auto font-normal text-gray-600 hover:text-gray-800" asChild>
                        <Link href="https://sites.google.com/view/masaru-shirasuna/home" target="_blank" rel="noopener noreferrer">
                          白砂大先生
                        </Link>
                      </Button>
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    人間の認知プロセスと情報処理の関係性について深く探求し、
                    社会における情報技術の役割を理解することを目指しています。
                  </p>
                  <h3 className="text-xl font-semibold pt-4">研究興味</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">認知科学</Badge>
                    <Badge variant="secondary">適応的道具箱</Badge>
                    <Badge variant="secondary">情報処理</Badge>
                    <Badge variant="secondary">人間工学</Badge>
                    <Badge variant="secondary">認知心理学</Badge>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">認知プロセス研究</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-sm">社会情報学</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">学際的研究</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Education</h2>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle>静岡大学 情報学部 情報社会学科</CardTitle>
                  <CardDescription>Shizuoka University, Faculty of Informatics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">学士課程 3年生</h4>
                    <p className="text-sm text-muted-foreground">Bachelor's Program, 3rd Year</p>
                  </div>
                  <Badge variant="outline">在学中</Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">所属研究室</h4>
                  <p className="text-gray-600">白砂研究室 (Shirasuna Laboratory)</p>
                  <p className="text-sm text-muted-foreground mt-1">認知科学・情報処理・人間工学分野での研究活動</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Research</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span>適応的道具箱</span>
                </CardTitle>
                <CardDescription>Adaptive Toolbox Research</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    人間の認知システムにおける適応的道具箱の概念について研究しています。
                    この研究では、人間がどのように状況に応じて異なる認知戦略を選択し、
                    問題解決に取り組むかを探求しています。
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">研究アプローチ</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• 認知実験による検証</li>
                        <li>• 行動データの分析</li>
                        <li>• 理論モデルの構築</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">応用分野</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• 教育システム設計</li>
                        <li>• ユーザーインターフェース</li>
                        <li>• 意思決定支援</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>専門分野</CardTitle>
                <CardDescription>Areas of Expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <Brain className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold">認知科学</h4>
                    <p className="text-sm text-muted-foreground">Cognitive Science</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold">情報社会学</h4>
                    <p className="text-sm text-muted-foreground">Information Sociology</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold">学際研究</h4>
                    <p className="text-sm text-muted-foreground">Interdisciplinary Studies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-gray-600">
                  研究に関するご質問や共同研究のご提案がございましたら、お気軽にお声がけください。
                </p>
                <div className="flex justify-center flex-wrap gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <Link href="mailto:your-email@example.com" className="hover:bg-accent transition-colors">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:bg-accent transition-colors">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:bg-accent transition-colors">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">静岡大学情報学部行動情報学科 白砂研究室</p>
                  <p className="text-sm text-muted-foreground">
                    Shirasuna Laboratory, Faculty of Informatics, Shizuoka University
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 奈須大輝 (Hiroki Nasu). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// app/blog/page.tsx
import NoteList from "../../components/NoteList";

export default function BlogPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold mb-6">My Note Articles</h1>

      {/* noteの記事リスト */}
      <NoteList />
    </main>
  );
}





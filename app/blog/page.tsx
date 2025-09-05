"use client";

import { useEffect, useState } from "react";

interface Note {
  id: string;
  name: string;
  body: string;
  key: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // 🔽 フロントから直接 note.com を呼ばず、自分の API を呼ぶ
        const res = await fetch("/api/note");
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        const notes = data.notes || [];
        setPosts(notes);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ブログ記事一覧</h1>
      {posts.length === 0 ? (
        <p>記事が見つかりません。</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((note) => (
            <li
              key={note.id}
              className="p-4 border rounded-lg shadow hover:bg-gray-50"
            >
              <a
                href={`https://note.com/${note.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600"
              >
                {note.name}
              </a>
              <p className="text-sm text-gray-600">{note.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}





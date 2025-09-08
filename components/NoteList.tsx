// app/components/NoteList.tsx
"use client"; // これが必須：クライアント専用コンポーネントにする

import { useEffect, useState } from "react";

type Note = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
};

export default function NoteList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("/api/note", { cache: "no-store" }); // キャッシュ無効化
        const data = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          setNotes(data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) return <p className="text-gray-500">Loading notes…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (notes.length === 0) return <p className="text-gray-500">No notes available.</p>;

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <div
          key={note.link}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 bg-white"
        >
          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl font-semibold text-blue-600 hover:underline"
          >
            {note.title}
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {new Date(note.pubDate).toLocaleString()}
          </p>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            {note.content.length > 150 ? note.content.slice(0, 150) + "…" : note.content}
          </p>
          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-3 inline-block text-sm"
          >
            続きをみる
          </a>
        </div>
      ))}
    </div>
  );
}


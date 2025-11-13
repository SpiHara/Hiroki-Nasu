"use client"

import { useEffect } from "react"

/**
 * サイト内のすべての画像に対してダウンロード防止機能を追加するコンポーネント
 * 
 * このコンポーネントは以下の機能を実装します：
 * - 画像の右クリックコンテキストメニューを無効化
 * - 画像のドラッグ＆ドロップを無効化
 * - 画像の選択を無効化
 * - キーボードショートカット（Ctrl+S, Ctrl+Shift+Iなど）による画像の保存を防止
 */
export default function ImageProtection() {
  useEffect(() => {
    // すべての画像要素に対してイベントリスナーを追加
    const protectImages = () => {
      const images = document.querySelectorAll("img")
      
      images.forEach((img) => {
        // 右クリック防止
        img.addEventListener("contextmenu", (e) => {
          e.preventDefault()
          return false
        })
        
        // ドラッグ防止
        img.addEventListener("dragstart", (e) => {
          e.preventDefault()
          return false
        })
        
        // 選択防止
        img.addEventListener("selectstart", (e) => {
          e.preventDefault()
          return false
        })
        
        // draggable属性を無効化
        img.setAttribute("draggable", "false")
        
        // CSSクラスを追加（既にglobals.cssで定義済み）
        img.classList.add("select-none")
      })
    }

    // 初回実行
    protectImages()

    // 動的に追加された画像にも対応するため、MutationObserverを使用
    const observer = new MutationObserver(() => {
      protectImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // キーボードショートカット防止（開発者ツールや保存を試みる操作を防止）
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S または Cmd+S（画像の保存を試みる操作を防止）
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault()
        return false
      }
      
      // F12、Ctrl+Shift+I、Ctrl+Shift+J（開発者ツールを開く操作を防止）
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "J"))
      ) {
        // 注意: 完全に防ぐことはできませんが、一般ユーザーには有効です
        e.preventDefault()
        return false
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // クリーンアップ
    return () => {
      observer.disconnect()
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}


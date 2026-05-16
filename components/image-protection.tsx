"use client"

import { useEffect } from "react"

/**
 * サイト内の画像に対して「右クリック保存」をしにくくするための保護コンポーネント。
 *
 * 注意: Webの仕様上、画像の保存を完全に防ぐことはできません。
 * ただし一般的な操作（右クリックメニュー・ドラッグ）を抑止します。
 *
 * 実装方針:
 * - document でイベント委譲（capture）し、動的に追加された画像にも自動適用
 * - img への個別 addEventListener を避けて二重登録/リークを防止
 */
export default function ImageProtection() {
  useEffect(() => {
    const hasImageInEventPath = (e: Event) => {
      const anyEvent = e as unknown as { composedPath?: () => EventTarget[] }
      const path = typeof anyEvent.composedPath === "function" ? anyEvent.composedPath() : []
      if (path.some((node) => node instanceof HTMLImageElement)) return true

      const target = e.target
      if (!(target instanceof Element)) return false
      return Boolean(target.closest("img"))
    }

    const handleContextMenu = (e: MouseEvent) => {
      if (!hasImageInEventPath(e)) return
      e.preventDefault()
      e.stopPropagation()
    }

    const handleDragStart = (e: DragEvent) => {
      if (!hasImageInEventPath(e)) return
      e.preventDefault()
      e.stopPropagation()
    }

    const handleSelectStart = (e: Event) => {
      if (!hasImageInEventPath(e)) return
      e.preventDefault()
      e.stopPropagation()
    }

    // 既存の画像は念のため draggable=false にしておく（動的追加分は dragstart 側で抑止）
    document.querySelectorAll("img").forEach((img) => {
      img.setAttribute("draggable", "false")
      img.classList.add("select-none")
    })

    // capture で先に握っておくと、ライブラリ側のハンドラより確実に抑止できる
    document.addEventListener("contextmenu", handleContextMenu, true)
    document.addEventListener("dragstart", handleDragStart, true)
    document.addEventListener("selectstart", handleSelectStart, true)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true)
      document.removeEventListener("dragstart", handleDragStart, true)
      document.removeEventListener("selectstart", handleSelectStart, true)
    }
  }, [])

  return null
}


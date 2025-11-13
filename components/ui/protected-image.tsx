"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProtectedImageProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Image>, "onContextMenu" | "onDragStart"> {
  as?: "img" | "next-image"
  src: string
  alt: string
  width?: number
  height?: number
  onContextMenu?: (e: React.MouseEvent<HTMLImageElement>) => void
  onDragStart?: (e: React.DragEvent<HTMLImageElement>) => void
}

/**
 * 画像のダウンロードを防止するための保護された画像コンポーネント
 * 
 * 以下の機能を実装：
 * - 右クリック無効化
 * - ドラッグ＆ドロップ無効化
 * - コンテキストメニュー無効化
 * - 画像の選択無効化
 * 
 * @example
 * // Next.js Imageコンポーネントとして使用
 * <ProtectedImage src="/image.jpg" alt="説明" width={500} height={300} />
 * 
 * @example
 * // 通常のimgタグとして使用
 * <ProtectedImage as="img" src="/image.jpg" alt="説明" />
 */
const ProtectedImage = React.forwardRef<
  HTMLImageElement,
  ProtectedImageProps
>(({ className, as = "next-image", onContextMenu, onDragStart, ...props }, ref) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onContextMenu?.(e)
  }

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onDragStart?.(e)
  }

  if (as === "img") {
    const { src, alt, width, height, ...imgProps } = props as React.ImgHTMLAttributes<HTMLImageElement>
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("select-none", className)}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        draggable={false}
        {...imgProps}
      />
    )
  }

  return (
    <Image
      ref={ref}
      className={cn("select-none", className)}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
      {...props}
    />
  )
})

ProtectedImage.displayName = "ProtectedImage"

export { ProtectedImage }


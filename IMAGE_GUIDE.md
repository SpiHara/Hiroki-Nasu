# 画像をWebサイトに挿入する手順

このプロジェクトでは、画像をダウンロードできないように保護された状態で挿入できます。

## 手順 1: 画像ファイルを配置する

画像ファイル（JPG、PNG、WebPなど）を `public` フォルダに配置します。

```
プロジェクトルート/
└── public/
    ├── image1.jpg
    ├── image2.png
    └── my-photo.jpg
```

**重要ポイント：**
- 画像は必ず `public` フォルダに配置してください
- `public` フォルダ内のファイルは `/ファイル名` でアクセスできます
- 例：`public/photo.jpg` → `/photo.jpg` でアクセス

## 手順 2: 画像コンポーネントをインポートする

ページやコンポーネントファイルの先頭で、`ProtectedImage` コンポーネントをインポートします。

```tsx
import { ProtectedImage } from "@/components/ui/protected-image"
```

## 手順 3: 画像を表示する

### 方法 A: Next.js Imageコンポーネントとして使用（推奨）

最適化された画像表示で、自動的にダウンロード防止が適用されます。

```tsx
import { ProtectedImage } from "@/components/ui/protected-image"

export default function MyPage() {
  return (
    <div>
      {/* 基本使用 */}
      <ProtectedImage 
        src="/image1.jpg" 
        alt="画像の説明" 
        width={500} 
        height={300} 
      />
      
      {/* スタイルを追加 */}
      <ProtectedImage 
        src="/my-photo.jpg" 
        alt="私の写真" 
        width={400} 
        height={400}
        className="rounded-full border-4 border-blue-500"
      />
      
      {/* レスポンシブ対応 */}
      <ProtectedImage 
        src="/image2.png" 
        alt="レスポンシブ画像" 
        width={800} 
        height={600}
        className="w-full h-auto"
      />
    </div>
  )
}
```

### 方法 B: 通常のimgタグとして使用

```tsx
import { ProtectedImage } from "@/components/ui/protected-image"

export default function MyPage() {
  return (
    <ProtectedImage 
      as="img"
      src="/image1.jpg" 
      alt="画像の説明"
      className="max-w-full h-auto"
    />
  )
}
```

## 実際の使用例

### 例 1: プロフィール画像を表示

```tsx
"use client"

import { ProtectedImage } from "@/components/ui/protected-image"

export default function ProfileSection() {
  return (
    <div className="flex items-center space-x-4">
      <ProtectedImage
        src="/placeholder-user.jpg"
        alt="プロフィール画像"
        width={100}
        height={100}
        className="rounded-full border-2 border-gray-300"
      />
      <div>
        <h2>奈須大輝</h2>
        <p>認知科学研究者</p>
      </div>
    </div>
  )
}
```

### 例 2: ギャラリー形式で複数画像を表示

```tsx
"use client"

import { ProtectedImage } from "@/components/ui/protected-image"

const images = [
  { src: "/image1.jpg", alt: "画像1" },
  { src: "/image2.png", alt: "画像2" },
  { src: "/image3.jpg", alt: "画像3" },
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ProtectedImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
          className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        />
      ))}
    </div>
  )
}
```

### 例 3: カード内に画像を表示

```tsx
"use client"

import { ProtectedImage } from "@/components/ui/protected-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectCard() {
  return (
    <Card className="overflow-hidden">
      <ProtectedImage
        src="/placeholder.jpg"
        alt="プロジェクト画像"
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>プロジェクトタイトル</CardTitle>
      </CardHeader>
      <CardContent>
        <p>プロジェクトの説明文...</p>
      </CardContent>
    </Card>
  )
}
```

## 画像の保護機能

`ProtectedImage` コンポーネントを使用すると、以下の保護機能が自動的に適用されます：

✅ **右クリック防止** - 右クリックメニューが表示されません  
✅ **ドラッグ＆ドロップ防止** - 画像をドラッグして保存できません  
✅ **選択防止** - 画像を選択してコピーできません  
✅ **グローバル保護** - `ImageProtection` コンポーネントにより、サイト全体の画像も保護されます

## 注意事項

1. **画像のサイズ指定**
   - Next.js Imageコンポーネント（`as="next-image"`）を使用する場合は、`width` と `height` を指定する必要があります
   - `as="img"` を使用する場合は、任意ですが推奨されます

2. **画像パス**
   - `public` フォルダ内のファイルは `/` から始まるパスで指定
   - 例：`public/photo.jpg` → `src="/photo.jpg"`

3. **外部画像URL**
   - 外部URLの画像も使用できますが、Next.jsの設定が必要な場合があります

## トラブルシューティング

### 画像が表示されない場合
- `public` フォルダに画像ファイルが存在するか確認
- パスが正しいか確認（`/` で始まっているか）
- ファイル名の大文字小文字が正しいか確認

### 画像が最適化されない場合
- `next.config.mjs` で `images: { unoptimized: true }` が設定されている場合、最適化は行われません


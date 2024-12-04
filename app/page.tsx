import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Every Pivot Matters",
  description: "A simple website with a powerful message",
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
        Every pivot matters.
      </h1>
    </div>
  )
}


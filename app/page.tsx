import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make us great again",
  description: "A simple website with a powerful message",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        MAKE US GREAT AGAIN.
      </h1>
    </div>
  );
}

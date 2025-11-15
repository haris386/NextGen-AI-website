"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9ED] px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
      <p className="text-lg text-gray-700">
        This is a simple homepage built with Next.js.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </main>
  );
}

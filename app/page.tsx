"use client";

import BackgroundGradient from "@/components/BackgroundGradient";

export default function Home() {
  return (
    <main>
      <header className="fixed top-20 z-10 flex w-full items-center justify-center">
        <h1>UI Gradient</h1>
      </header>
      <BackgroundGradient />
    </main>
  );
}

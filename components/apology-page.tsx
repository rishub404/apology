"use client"

import { FloatingStars } from "./floating-stars"
import { MemoryMarquee } from "./memory-marquee"
import { ApologyCard } from "./apology-card"

export function ApologyPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[linear-gradient(135deg,var(--lavender)_0%,var(--cream)_40%,var(--soft-pink)_70%,var(--lavender)_100%)]">
      <FloatingStars />

      {/* Header */}
      <header className="relative z-10 flex w-full flex-col items-center pt-8 pb-4 md:pt-12">
        <div className="mb-2 flex items-center gap-2" aria-hidden="true">
          <span className="text-2xl text-primary">{"*"}</span>
          <span className="text-xl text-accent">{"~"}</span>
          <span className="text-2xl text-primary">{"*"}</span>
        </div>
        <h1 className="text-center text-4xl text-deep-purple md:text-5xl lg:text-6xl">
          {"i'm sorry"}
        </h1>
        <p className="mt-2 text-center text-lg text-deep-purple/60 md:text-xl">
          {"a letter from my heart to yours"}
        </p>
        <div className="mt-2 flex items-center gap-2" aria-hidden="true">
          <span className="text-xl text-accent">{"~"}</span>
          <span className="text-2xl text-primary">{"*"}</span>
          <span className="text-xl text-accent">{"~"}</span>
        </div>
      </header>

      {/* Memory Lane Marquee */}
      <section className="relative z-10 my-6 w-full md:my-8" aria-label="Memory Lane">
        <p className="mb-2 text-center text-base text-deep-purple/70 md:text-lg">
          {">> memory lane <<"}
        </p>
        <MemoryMarquee />
      </section>

      {/* Central Apology Card */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-8 md:py-12">
        <ApologyCard />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full pb-8 text-center">
        <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
          <div className="h-px w-full bg-pixel-border/40" />
          <p className="text-sm text-deep-purple/50">
            {"made with love & regret * feb 2020 - 2026"}
          </p>
          <div className="flex items-center gap-1 text-xs text-deep-purple/30" aria-hidden="true">
            <span>{"<3"}</span>
            <span>{"*"}</span>
            <span>{"<3"}</span>
            <span>{"*"}</span>
            <span>{"<3"}</span>
          </div>
        </div>
      </footer>

      {/* Pixel art corner decorations */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-16 w-16 border-t-4 border-l-4 border-pixel-border/30 md:h-24 md:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-16 w-16 border-t-4 border-r-4 border-pixel-border/30 md:h-24 md:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-16 w-16 border-b-4 border-l-4 border-pixel-border/30 md:h-24 md:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-16 w-16 border-b-4 border-r-4 border-pixel-border/30 md:h-24 md:w-24" aria-hidden="true" />
    </div>
  )
}

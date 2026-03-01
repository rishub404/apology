"use client"

const memories = [
  "feb 2020 - the year it all began",
  "our first late-night call",
  "2020 - surviving the world together",
  "that playlist you made me",
  "2021 - growing closer every day",
  "all the silly photos",
  "2022 - our favorite summer",
  "the road trip we never planned",
  "2023 - through thick and thin",
  "every 'goodnight' text",
  "2024 - still choosing you",
  "2025 - six years strong",
  "feb 2026 - 6 years of us",
  "every laugh, every tear",
  "you are my person",
]

export function MemoryMarquee() {
  const repeatedMemories = [...memories, ...memories]

  return (
    <div className="pixel-border relative w-full overflow-hidden bg-cream/80 py-3">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {repeatedMemories.map((memory, i) => (
          <span key={i} className="flex items-center gap-3 text-lg text-deep-purple md:text-xl">
            <span className="text-primary" aria-hidden="true">
              {"*"}
            </span>
            {memory}
            <span className="text-accent" aria-hidden="true">
              {"*"}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

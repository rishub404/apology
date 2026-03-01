"use client"

import { useState } from "react"
import { RetroMusicPlayer } from "./retro-music-player"

export function ApologyCard() {
  const [showPlayer, setShowPlayer] = useState(false)

  function handleMaybeYes() {
    setShowPlayer(true)
  }

  function handleHellNo() {
    const link = document.createElement("a")
    link.href = "/images/NEET_Sample_OMR.jpg"
    link.download = "NEET_Sample_OMR.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="pixel-border animate-pulse-glow relative mx-4 w-full max-w-md rounded-sm bg-card/90 p-6 text-center backdrop-blur-sm md:mx-0 md:p-8">
        {/* Decorative corner stars */}
        <div className="absolute -top-3 -left-3 text-2xl text-primary" aria-hidden="true">
          {"*"}
        </div>
        <div className="absolute -top-3 -right-3 text-2xl text-accent" aria-hidden="true">
          {"*"}
        </div>
        <div className="absolute -bottom-3 -left-3 text-2xl text-accent" aria-hidden="true">
          {"*"}
        </div>
        <div className="absolute -bottom-3 -right-3 text-2xl text-primary" aria-hidden="true">
          {"*"}
        </div>

        {/* Heart decoration */}
        <div className="mb-4 flex justify-center gap-2" aria-hidden="true">
          <span className="animate-float text-3xl text-accent" style={{ animationDelay: "0s" }}>
            {"<3"}
          </span>
          <span className="animate-float text-3xl text-primary" style={{ animationDelay: "0.5s" }}>
            {"<3"}
          </span>
          <span className="animate-float text-3xl text-accent" style={{ animationDelay: "1s" }}>
            {"<3"}
          </span>
        </div>

        <h2 className="mb-2 text-2xl text-card-foreground md:text-3xl">
          {"~ i messed up ~"}
        </h2>

        <div className="mx-auto my-4 h-px w-3/4 bg-border" />

        <p className="mb-6 text-lg leading-relaxed text-card-foreground/90 md:text-xl">
          I lost my temper, and I{"'"}m sorry for not being the person you deserve today.
        </p>

        <p className="mb-6 text-base text-muted-foreground md:text-lg">
          {">> do you forgive me? <<"}
        </p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handleMaybeYes}
            className="pixel-border cursor-pointer rounded-sm bg-primary/90 px-6 py-3 text-xl text-primary-foreground transition-all hover:scale-105 hover:bg-primary active:scale-95 md:text-2xl whitespace-nowrap"
          >
            {">> maybe yes <<"}
          </button>
          <button
            onClick={handleHellNo}
            className="pixel-border cursor-pointer rounded-sm bg-secondary px-6 py-3 text-xl text-secondary-foreground transition-all hover:scale-105 hover:bg-accent active:scale-95 md:text-2xl whitespace-nowrap"
          >
            {">> hell no <<"}
          </button>
        </div>

        {/* Bottom decoration */}
        <div className="mt-6 text-sm text-muted-foreground" aria-hidden="true">
          {"- - - * - - - * - - - * - - -"}
        </div>
      </div>

      {showPlayer && <RetroMusicPlayer onClose={() => setShowPlayer(false)} />}
    </>
  )
}

"use client"

import { useEffect } from "react"

interface RetroMusicPlayerProps {
  onClose: () => void
}

export function RetroMusicPlayer({ onClose }: RetroMusicPlayerProps) {
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-purple/85 p-4 backdrop-blur-sm">
      <div className="animate-bounce-in pixel-border flex w-full max-w-lg flex-col items-center rounded-sm bg-card p-4 text-center md:p-6">
        {/* Window title bar */}
        <div className="mb-4 flex w-full items-center justify-between border-b-2 border-border pb-2">
          <span className="text-sm text-muted-foreground">{"[*] love_story.exe"}</span>
          <button
            onClick={onClose}
            className="cursor-pointer border-2 border-border bg-secondary px-2 py-0.5 text-sm text-secondary-foreground transition-colors hover:bg-accent"
            aria-label="Close music player"
          >
            {"[X]"}
          </button>
        </div>

        {/* Spinning disc + Song info */}
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 animate-spin-slow items-center justify-center rounded-full border-4 border-border bg-deep-purple md:h-24 md:w-24">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cream">
              <div className="h-2 w-2 rounded-full bg-deep-purple" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-xl text-card-foreground md:text-2xl">
              {"~ Love Story ~"}
            </h3>
            <p className="text-base text-muted-foreground">Taylor Swift</p>
            <p className="mt-1 text-sm text-primary">{">> you said maybe... i'll take it <3"}</p>
          </div>
        </div>

        {/* YouTube embed - starts at 1:04 (64 seconds), autoplay muted for mobile */}
        <div className="relative mb-4 w-full overflow-hidden rounded-sm border-2 border-border" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/lEMeFbxUZks?start=64&autoplay=1&mute=1&controls=1&rel=0"
            title="Love Story - Taylor Swift"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; geolocation"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Heartfelt message */}
        <div className="pixel-border w-full rounded-sm bg-cream/60 p-4">
          <p className="text-lg leading-relaxed text-deep-purple md:text-xl">
            {'"'}Romeo take me somewhere we can be alone...{'"'}
          </p>
          <div className="my-3 h-px w-full bg-border" />
          <p className="text-base leading-relaxed text-deep-purple/80 md:text-lg">
            a maybe is more than i deserve. 6 years in, and i{"'"}m still learning how to be better for you. i{"'"}ll keep trying.
          </p>
          <div className="mt-3 flex justify-center gap-2 text-accent" aria-hidden="true">
            <span className="animate-float" style={{ animationDelay: "0s" }}>{"<3"}</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>{"<3"}</span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>{"<3"}</span>
          </div>
        </div>

        {/* Retro status bar */}
        <div className="mt-3 w-full border-t-2 border-border pt-2 text-sm text-muted-foreground">
          {">> press [Esc] or [X] to close <<"}
        </div>
      </div>
    </div>
  )
}

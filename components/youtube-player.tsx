"use client"

import { useEffect } from "react"

interface YouTubePlayerProps {
  onClose: () => void
}

export function YouTubePlayer({ onClose }: YouTubePlayerProps) {
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-purple/85 p-4 backdrop-blur-sm">
      <div className="animate-bounce-in pixel-border flex w-full max-w-lg flex-col items-center rounded-sm bg-card p-4 md:p-6">
        {/* Window title bar */}
        <div className="mb-4 flex w-full items-center justify-between border-b-2 border-border pb-2">
          <span className="text-sm text-muted-foreground">
            {"[*] love_story.exe - now playing"}
          </span>
          <button
            onClick={onClose}
            className="cursor-pointer border-2 border-border bg-secondary px-2 py-0.5 text-sm text-secondary-foreground transition-colors hover:bg-accent"
            aria-label="Close player"
          >
            {"[X]"}
          </button>
        </div>

        {/* YouTube embed - starts at 1:04 (64 seconds), autoplay */}
        <div className="relative w-full overflow-hidden rounded-sm" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/8xg3vE8Ie_E?start=64&autoplay=1"
            title="Love Story - Taylor Swift"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Message below */}
        <div className="pixel-border mt-4 w-full rounded-sm bg-cream/60 p-4 text-center">
          <p className="text-lg leading-relaxed text-deep-purple md:text-xl">
            {'"'}Romeo take me somewhere we can be alone...{'"'}
          </p>
          <div className="my-3 h-px w-full bg-border" />
          <p className="text-base leading-relaxed text-deep-purple/80 md:text-lg">
            you said no... but the song still plays for you.
          </p>
          <div className="mt-3 flex justify-center gap-2 text-accent" aria-hidden="true">
            <span className="animate-float" style={{ animationDelay: "0s" }}>{"<3"}</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>{"<3"}</span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>{"<3"}</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-3 w-full border-t-2 border-border pt-2 text-center text-sm text-muted-foreground">
          {">> press [Esc] or [X] to close <<"}
        </div>
      </div>
    </div>
  )
}

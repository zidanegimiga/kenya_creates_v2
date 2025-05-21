'use client'

import { useState } from 'react'

interface YouTubeEmbedProps {
  url: string
  className?: string
}

function extractYouTubeID(url: string): string | null {
  const patterns = [
    /(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/,
  ]
  for (const re of patterns) {
    const m = url.match(re)
    if (m && m[1]) return m[1]
  }
  return null
}

export default function YouTubeEmbed({
  url,
  className = '',
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const videoId = extractYouTubeID(url)

  if (!videoId) {
    console.warn(`YouTubeEmbed: could not parse ID from "${url}"`)
    return null
  }

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className={`relative w-full ${className}`}>
      {playing ? (
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          />
        </div>
      ) : (
        <div
          className="relative cursor-pointer rounded-lg overflow-hidden"
          onClick={() => setPlaying(true)}
        >
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="object-cover w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-white/90 text-[#9E005F] px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-satoshi">Play trailer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

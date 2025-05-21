// src/app/films/[slug]/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import YouTubeEmbed from '@/app/components/YoutubeEmbedder'
import DirectorSection from '@/app/components/DirectorSection'
import Footer from '@/app/components/Footer'
import GallerySection from '@/app/components/Gallery'
import NextFilmsSection from '@/app/components/NextFilms'
import { all_films } from '@/data/films'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const film = all_films.find((f) => f.slug === params.slug)
  if (!film) return {}
  return {
    title: `${film.title} — Kenya Creates`,
    description: film.description,
    openGraph: {
      title: film.title,
      description: film.description,
      images: [{ url: film.bgImage }],
    },
  }
}

export default function FilmDetailPage({ params }: any) {
  const film = all_films.find((f) => f.slug === params.slug)
  if (!film) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-[#EEE2FF] text-white">
      {/* Hero Background */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={film.bgImage}
          alt={`${film.title} background`}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Film Header & Video */}
      <section className="w-full px-4 md:px-20 py-12 space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="font-fraunces text-4xl md:text-5xl text-[#9E005F]">
            {film.title}
          </h1>
          <p className="font-satoshi text-lg text-[#786C6C]">
            By {film.author.name}
          </p>
        </header>

        <YouTubeEmbed url={film.youtubeUrl} className="mt-8" />

        <DirectorSection
          directorName={film.author.name}
          directorImage={film.slug}
          synopsis={film.description}
          bio={film.author.bio}
        />
      </section>

      {/* Gallery & Next Films */}
      <GallerySection slug={params.slug} />
      <NextFilmsSection currentSlug={params.slug} />

      <Footer />
    </main>
  )
}

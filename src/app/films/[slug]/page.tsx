// src/app/films/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { all_films, FilmInterface } from "@/data/films";
import { notFound } from "next/navigation";
import YouTubeEmbed from "@/app/components/YoutubeEmbedder";
import DirectorSection from "@/app/components/DirectorSection";
import Footer from "@/app/components/Footer";
import GallerySection from "@/app/components/Gallery";
import NextFilmsSection from "@/app/components/NextFilms";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const film = all_films.find((f) => f.slug === params.slug);
  if (!film) return {};
  return {
    title: `${film.title} — Kenya Creates`,
    description: film.description,
    openGraph: {
      title: film.title,
      description: film.description,
      images: [{ url: film.bgImage }],
    },
  };
}

export default function FilmDetailPage({ params }: { params: Params }) {
  const film = all_films.find((f) => f.slug === params.slug);
  if (!film) return notFound();

  return (
    <main className="min-h-screen bg-[#EEE2FF] text-white">
      {/* Hero BG */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={film.bgImage}
          alt={`${film.title} background`}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="w-full md:px-20 px-4 py-12 space-y-8">
        {/* Title & Author */}
        <header className="space-y-2 text-center">
          <h1 className="font-fraunces text-4xl md:text-5xl text-[#9E005F]">
            {film.title}
          </h1>
          <p className="font-satoshi text-lg text-[#786C6C]">
            By {film?.author?.name}
          </p>
        </header>

        {/* Description */}
        {/* <p className="font-satoshi text-base md:text-lg leading-relaxed">
          {film.description}
        </p> */}

        <YouTubeEmbed url={film.youtubeUrl} className="mt-8" />
        <DirectorSection
      directorName={film.author.name}
      directorImage={film.slug}
      synopsis={film.description}          // or a longer synopsis field
      bio={film.author.bio}               // add this in your data model
    />
      </section>
      <GallerySection slug={params.slug}/>
      <NextFilmsSection currentSlug={params.slug} />
      {/* {params.slug} */}
      <Footer/>
    </main>
  );
}

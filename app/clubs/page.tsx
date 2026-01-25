export const revalidate = 30;

import { sanityClient } from "@/sanity/lib/client"
import { allClubsQuery } from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export default async function ClubsPage() {
  const clubs = await sanityClient.fetch(allClubsQuery)

  return (
    <div className="bg-sky-100 min-h-screen py-12">

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Football Clubs & Heritage
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Explore legendary football clubs, iconic jerseys,
          and the players who shaped the game across generations.
        </p>
      </section>

      {/* ================= CLUBS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clubs.map((club: any) => (
            <div
              key={club._id}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              {/* LOGO */}
              <div className="h-56 bg-gray-50 flex items-center justify-center">
                {club.logo && (
                  <Image
                    src={urlFor(club.logo).width(160).height(160).url()}
                    alt={club.name}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                )}
              </div>

              {/* NAME */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {club.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Archive in progress
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="h-px bg-gray-300" />
      </div>

      {/* ================= HERITAGE STATEMENT ================= */}
      <section className="max-w-4xl mx-auto px-4 py-28 text-center">
        <p className="text-xl text-gray-900 leading-relaxed">
          Football is more than a game.
          <br />
          It is history, identity, and pride —
          <br />
          carried through generations of clubs and supporters.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <a
          href="/shop"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
        >
          Explore Jerseys
        </a>
      </section>

    </div>
  )
}
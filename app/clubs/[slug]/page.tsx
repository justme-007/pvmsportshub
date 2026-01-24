export default function ClubPage() {
  return (
    <div className="bg-white">
      {/* CLUB HERO */}
      <section className="max-w-6xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Manchester United
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            A club defined by history, resilience, and generations
            of players who shaped football at the highest level.
          </p>
        </div>

        <div>
          <img
            src="/images/clubs/manchester-united.jpg"
            alt="Manchester United stadium"
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* CLUB STORY */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-medium text-gray-900">
          Club Heritage
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Founded on tradition and built through decades of competitive
          excellence, Manchester United has become one of the most
          recognized football clubs in the world.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          From historic league triumphs to unforgettable European nights,
          the club represents more than trophies — it represents belief,
          identity, and loyalty.
        </p>
      </section>

      {/* LEGENDARY PLAYERS */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-medium text-gray-900 mb-10">
          Legendary Players
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Eric Cantona",
            "Ryan Giggs",
            "Paul Scholes",
            "Cristiano Ronaldo",
          ].map((player) => (
            <div key={player} className="text-center">
              <div className="h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                Player Image
              </div>

              <p className="text-gray-900 font-medium">
                {player}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ICONIC JERSEYS */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-medium text-gray-900 mb-10">
          Iconic Jerseys
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src="/images/product-placeholder.jpg"
                alt="Club jersey"
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h3 className="font-medium text-gray-900">
                  Manchester United Home Jersey
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  View available options
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
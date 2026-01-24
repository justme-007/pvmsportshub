export default function Home() {
  return (
<section className="bg-gray-50 min-h-screen py-12">
  <div className="max-w-6xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-16 items-center">


    {/* Text */}
    <div>
      <h1 className="text-4xl md:text-5xl max-w-xl font-semibold tracking-tight text-gray-900">
        Built for the Game.<br />Worn with Pride.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-900 leading-relaxed">
        Premium football jerseys designed for comfort,
        durability, and everyday wear on and off the pitch.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/shop"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
        >
          Shop Jerseys
        </a>


        <a
          href="/clubs"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
        >
          Explore More
        </a>
      </div>
    </div>

    {/* Image */}
    <div>
      <img
        src="/images/home-hero1.jpg"
        alt="Football jersey lifestyle"
        className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover rounded-xl"
      />
    </div>


  </div>
</section>
  );
}
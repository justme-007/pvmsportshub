export default function Home() {
  return (
    <section className="relative overflow-hidden bg-sky-500">
  <div className="max-w-7xl mx-auto px-6 py-28 text-white relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Premium Sports Jerseys<br />Made for True Fans
    </h1>

    <p className="mt-6 max-w-xl text-lg text-white/90">
      Quality football jerseys designed for comfort, confidence,
      and style — on and off the pitch.
    </p>

    <div className="mt-8 flex gap-4">
      <a
        href="/shop"
        className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Shop Jerseys
      </a>

      <a
        href="/about"
        className="border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
      >
        Learn More
      </a>
    </div>
  </div>

  {/* background pattern */}
<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage:
      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
    backgroundSize: "20px 20px",
  }}
/>
</section>
  );
}
export default function AboutPage() {
  return (
    <div className="bg-sky-200 min-h-screen py-12">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Built for the Game. Designed for Everyday Wear.
          </h1>
          <p className="mt-6 text-lg text-gray-900 leading-relaxed">
            PVM Sports Hub is a modern sportswear brand focused on delivering premium football jerseys and accessories that balance performance, durability, and style.
Our collections are designed for those who live the game — whether on the pitch, in the stands, or beyond it.
          </p>
        </div>

        <div>
          <img
            src="/images/about-hero.jpg"
            alt="Football lifestyle"
            className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/images/about-quality.jpg"
            alt="Jersey quality details"
            className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover rounded-xl"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Standard
          </h2>

          <p className="mt-6 text-gray-900 leading-relaxed">
            At PVM Sports Hub, quality is not an option — it is the baseline.
Every piece we offer is carefully selected and tested to ensure it meets our expectations for comfort, durability, and long-term wear.
          </p>

          <ul className="mt-6 space-y-3 text-gray-900">
            <li>• Premium materials and clean finishing</li>
            <li>• Reliable sourcing and consistency</li>
            <li>• Customer-focused service</li>
            <li>• Attention to detail in every product</li>
          </ul>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="text-xl text-gray-900 leading-relaxed">
          Our vision is to grow into a trusted sportswear brand serving athletes and football fans across Nigeria and beyond.
Whether you are playing, supporting your club, or expressing your love for the game, 
          <span className="font-medium text-gray-900">
            {" "}PVM Sports Hub is built for you.
          </span>
        </p>
      </section>

    </div>
  );
}
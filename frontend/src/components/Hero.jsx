import { Link } from "react-router-dom";
import image from "../assets/backimg.jpg";
import divider from "../assets/divide1.png";
import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";

const dishes = [
  {
    eyebrow: "Bestseller",
    title: "Wood-Fired Pizza,",
    accent: "Baked to Perfection",
    description:
      "Crisp golden edges, bubbling cheese, and rich Italian flavor in every warm slice.",
    image: pizza,
    alt: "Freshly baked wood-fired pizza",
  },
  {
    eyebrow: "Chef's Signature",
    title: "Silky Pasta,",
    accent: "Slow-Crafted Sauces",
    description:
      "Twirled fresh, finished with fragrant herbs, and served with the comfort of true Italian tradition.",
    image: pasta,
    alt: "Italian pasta finished with fresh herbs",
    reverse: true,
  },
];

const testimonials = [
  ["Kabir", "The best pasta I've ever had!"],
  ["John", "Fresh ingredients, amazing taste!"],
  ["Jane", "A true culinary experience!"],
  ["Mary", "Authentic Italian flavors!"],
];

function Hero() {
  return (
    <main className="w-full overflow-hidden bg-black">
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={image}
          alt="Warmly lit Italian restaurant dining room"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 text-center text-white sm:px-8 md:text-left lg:px-12">
          <div className="mx-auto max-w-3xl md:mx-0">
            <div className="mb-5 flex flex-col items-centerjustify-start gap-3 md:justify-start">
              <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-[#e5bb7c] sm:text-sm sm:tracking-[0.28em]">
                Authentic Italian Experience
              </p>
              <img
                className="h-5 w-24 object-contain sm:w-32"
                src={divider}
                alt=""
                aria-hidden="true"
              />
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl lg:text-7xl">
              Savor Life,
              <span className="mt-2 block text-[#e5bb7c]">The Italian Way</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:mx-0">
              Authentic Italian flavors, refined elegance, and unforgettable
              dining, crafted for those who appreciate the extraordinary.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                to="/reservations"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#ebab4c] px-7 font-semibold text-[#17130d] shadow-lg shadow-black/20 transition hover:bg-[#f2bd68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 bg-black/15 px-7 font-semibold text-white transition hover:border-[#e5bb7c] hover:bg-white/10 hover:text-[#e5bb7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b27a]"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-10 text-center text-white sm:py-14 lg:py-16">
        <h2 className="mx-auto max-w-3xl px-4 font-serif text-3xl font-semibold leading-tight text-[#e5bb7c] sm:text-4xl lg:text-5xl">
          Enjoy Authentic Italian Cuisine
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-[#ebab4c]" />
        <p className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-6 text-white/70 sm:text-base">
          Experience the true taste with our handcrafted dishes made from the
          finest ingredients.
        </p>

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-4 lg:px-8">
          {dishes.map((dish) => (
            <article
              key={dish.eyebrow}
              className={`grid overflow-hidden rounded-xl border border-[#ebab4c]/20 bg-white/[0.035] lg:min-h-[25rem] lg:grid-cols-2 ${dish.reverse ? "lg:[&>img]:order-2" : ""}`}
            >
              <img
                src={dish.image}
                alt={dish.alt}
                className="h-64 w-full object-cover sm:h-80 lg:h-full"
              />
              <div className="flex items-center justify-center px-6 py-10 text-center sm:px-10 lg:text-left">
                <div className="max-w-lg">
                  <span className="font-serif text-xs font-semibold uppercase tracking-[0.28em] text-[#ebab4c] sm:text-sm">
                    {dish.eyebrow}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {dish.title}
                    <span className="block text-[#e5bb7c]">{dish.accent}</span>
                  </h3>
                  <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-[#ebab4c] lg:mx-0" />
                  <p className="mt-5 font-serif text-base leading-relaxed text-white/75 sm:text-lg">
                    {dish.description}
                  </p>
                  <Link
                    to="/menu"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e5bb7c] transition hover:text-[#f2bd68]"
                  >
                    Discover our menu <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 bg-[#0c0c0b] px-4 py-12 text-white sm:px-6 md:py-16 lg:py-20">
        <div className="text-center">
          <p className="font-serif text-xs font-semibold uppercase tracking-[0.28em] text-[#ebab4c]">
            Kind words
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#e5bb7c] sm:text-4xl lg:text-5xl">
            Here's What Our Customers Say
          </h2>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(([name, quote]) => (
            <blockquote
              key={name}
              className="flex min-h-36 flex-col justify-between rounded-xl border border-[#ebab4c]/25 bg-white/[0.04] p-5"
            >
              <span
                aria-label="5 out of 5 stars"
                className="text-sm tracking-[0.2em] text-[#ebab4c]"
              >
                ★★★★★
              </span>
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-white/85">
                “{quote}”
              </p>
              <cite className="mt-4 not-italic text-sm font-semibold text-[#e5bb7c]">
                {name}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Hero;

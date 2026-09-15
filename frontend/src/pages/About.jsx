import React from "react";
import image from "../assets/abtimg.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Authentic Italian dining room"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em] text-[#ebab4c] md:text-base">
              About Our Trattoria
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Authentic Italian Recipes,
              <span className="block text-[#e5bb7c]">Served with Heart</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 md:text-lg">
              We bring the soul of Italy to the table with time-honored family
              recipes, carefully sourced ingredients, and a dining experience
              that feels warm, generous, and unforgettable.
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#ebab4c]/20 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm lg:col-span-2">
            <span className="mb-4 block font-serif text-sm uppercase tracking-[0.3em] text-[#ebab4c]">
              Our Story
            </span>
            <h2 className="text-3xl font-semibold text-[#e5bb7c] md:text-4xl">
              A true Italian table, built around tradition
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              Every dish is prepared with the same respect you would find in a
              classic Italian home kitchen. From slow-simmered sauces and fresh
              pasta to wood-fired favorites and delicate seasonal plates, our
              recipes celebrate the rich regional flavors that define authentic
              Italian cuisine.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              We focus on balance, freshness, and depth of flavor so every bite
              feels honest and memorable. That means quality olive oil, fragrant
              herbs, carefully selected cheeses, and cooking that lets each
              ingredient shine.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ebab4c]/20 bg-black/50 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <span className="mb-4 block font-serif text-sm uppercase tracking-[0.3em] text-[#ebab4c]">
              Why Guests Return
            </span>
            <ul className="space-y-4 text-sm leading-7 text-white/85 md:text-base">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-serif text-lg text-white">
                  Authentic recipes
                </strong>
                Passed down through generations and prepared with classic Italian
                technique.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-serif text-lg text-white">
                  Warm service
                </strong>
                Friendly, attentive hospitality that makes every guest feel like
                family.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-serif text-lg text-white">
                  Thoughtful details
                </strong>
                From the first welcome to the final course, we make sure the
                experience feels polished and personal.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#ebab4c]/20 bg-white/5 p-6">
            <span className="mb-3 block font-serif text-sm uppercase tracking-[0.3em] text-[#ebab4c]">
              Our Kitchen Promise
            </span>
            <h3 className="font-serif text-2xl text-[#e5bb7c] md:text-3xl">
              Fresh ingredients, prepared with care
            </h3>
            <p className="mt-4 text-white/80 leading-7">
              We keep the menu focused on recipes that honor Italy’s culinary
              heritage, serving dishes that are rich in flavor but never
              overcomplicated. The result is food that feels comforting,
              elegant, and unmistakably Italian.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ebab4c]/20 bg-white/5 p-6">
            <span className="mb-3 block font-serif text-sm uppercase tracking-[0.3em] text-[#ebab4c]">
              Service That Stands Out
            </span>
            <h3 className="font-serif text-2xl text-[#e5bb7c] md:text-3xl">
              Great service, every time
            </h3>
            <p className="mt-4 text-white/80 leading-7">
              Whether you are joining us for a relaxed dinner or a special
              celebration, our team is here to deliver attentive service,
              thoughtful recommendations, and a welcoming atmosphere from start
              to finish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import image from "../assets/backimg.jpg";
import divider from "../assets/divide1.png";
import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";

 const Hero = () => {
  return (
    <div className="w-full bg-black">
      <section className="relative h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Hero Image"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        {/* divider */}
        <div className=" hidden md:block absolute top-12 left-15 md:top-36 lg:top-36">
          <img
            className=" md:w-40 md:h-10 lg:w-60 lg:h-10"
            src={divider}
            alt="Divider"
          />
        </div>
        {/* subheading */}
        <div className="absolute mb-10 top-18 mt-10 md:mt-10 md:left-10 lg:left-20">
          <p className="  text-[#ebab4c] hidden md:block  md:left-10 lg:left-20 text-md  lg:text-xl font-serif ">
            Authentic Italian Experience
          </p>
        </div>
        {/* Main heading */}
        <div className="absolute top-4 md:left-10 lg:left-20 mt-10 md:mt-40">
          <h1
            className="font-serif flex flex-start
           text-5xl md:text-6xl lg:text-7xl"
          >
            Savor Life,
          </h1>
          <h1 className="font-serif text-[#e5bb7c] text-5xl md:text-5xl lg:text-6xl">
            The Italian Way
          </h1>
        </div>
        {/* description */}
        <div className="absolute top-40 md:left-10 lg:left-15 md:mt-23 lg:mt-30">
          <p className="text-md font-serif md:text-md ml-0 lg:text-xl mt-4 md:mt-10">
            Authentic Italian flavors, refined elegance, and unforgettable
            dining
            <br />
            —crafted for those who appreciate the extraordinary.
          </p>
        </div>
        {/* button */}
        <div className="absolute justify-center items-center top-60 md:left-10 lg:left-18 lg:mt-42 mt-4 md:mt-30 flex flex-col  md:flex-row gap-4">
          <button  className="bg-[#ebab4c] text-white font-serif font-semibold text-md py-2 px-6 rounded-md hover:bg-[#f29c07] transition duration-300">
            Reserve a Table
          </button>

          <button className="bg-transparent text-white font-serif  text-md py-2 px-6 rounded-md border border-white hover:bg-white hover:text-[#ebab4c] transition duration-300 ">
            Explore Menu
          </button>
        </div>
        </div>
      </section>
      <div className="bg-black text-white text-center py-4 md:py-6 lg:py-8">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#e5bb7c] drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] md:text-4xl lg:text-5xl">
          Enjoy Authentic Italian Cuisine
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-[#ebab4c]"></div>
        <p className="text-sm md:text-md lg:text-md mt-2">
          Experience the true taste with our handcrafted dishes made from the
          finest ingredients.
        </p>

        {/* pizza pic */}

        <div className="mt-9 flex flex-col gap-4 p-4 lg:flex-row lg:items-stretch">
          <img
            src={pizza}
            alt="Pizza"
            className="h-[30vh] w-full rounded-md object-cover md:h-[40vh] lg:h-[50vh] lg:w-1/2"
          />
          <div className="flex min-h-[30vh] w-full items-center justify-center rounded-md border border-[#ebab4c]/25 bg-white/5 px-6 text-center md:min-h-[40vh] md:px-10 md:text-left lg:min-h-[50vh] lg:w-1/2">
            <div className="max-w-lg py-4 lg:py-0">
              <span className="mb-3 block font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#ebab4c]">
                Bestseller
              </span>
              <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Wood-Fired Pizza,
                <span className="block text-[#e5bb7c]">
                  Baked to Perfection
                </span>
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-[#ebab4c] md:mx-0"></div>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/85 md:text-lg">
                Crisp golden edges, bubbling cheese, and rich Italian flavor in
                every warm slice.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 p-4 lg:flex-row lg:items-stretch">
          
          <div className="flex min-h-[30vh] w-full items-center justify-center rounded-md border border-[#ebab4c]/25 bg-white/5 px-6 text-center md:min-h-[40vh] md:px-10 md:text-left lg:min-h-[50vh] lg:w-1/2">
            <div className="max-w-lg py-4 lg:py-0">
              <span className="mb-3 block font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#ebab4c]">
                Chef's Signature
              </span>
              <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Silky Pasta,
                <span className="block text-[#e5bb7c]">
                  Slow-Crafted Sauces
                </span>
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-20 md:mx-0"></div>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/85 md:text-lg">
                Twirled fresh, finished with fragrant herbs, and served with the
                comfort of true Italian tradition.
              </p>
            </div>
          </div>
          <img
            src={pasta}
            alt="Pasta"
            className="h-[30vh] w-full rounded-md object-cover md:h-[40vh] lg:h-[50vh] lg:w-1/2"
          />
        </div>
        
      </div>

      {/* Testimonial */}
      <div className="bg-black/93 w-full flex flex-col gap-10 px-4 py-10 text-white md:px-6 md:py-14 lg:py-20">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#e5bb7c] drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] md:text-4xl lg:text-5xl">
          Here's What Our Customers Say
        </h2>
        <div className="mx-auto grid w-full max-w-6xl gap-4 font-serif text-lg leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] sm:text-xl md:grid-cols-2 lg:text-2xl">
          <div className="flex min-h-24 w-full items-center justify-center gap-3 rounded-xl border-2 border-[#ebab4c]/25 bg-white/5 p-4 text-center">
            <span className="text-white">Kabir:</span> <span className="italic text-white/85">"The best pasta I've ever had!"</span>
          </div>
          <div className="flex min-h-24 w-full items-center justify-center gap-3 rounded-xl border-2 border-[#ebab4c]/25 bg-white/5 p-4 text-center">
            <span className="text-white">John:</span> <span className="italic text-white/85">"Fresh ingredients, amazing taste!"</span>
          </div>
          <div className="flex min-h-24 w-full items-center justify-center gap-3 rounded-xl border-2 border-[#ebab4c]/25 bg-white/5 p-4 text-center">
            <span className="text-white">Jane:</span> <span className="italic text-white/85">"A true culinary experience!"</span>
          </div>
          <div className="flex min-h-24 w-full items-center justify-center gap-3 rounded-xl border-2 border-[#ebab4c]/25 bg-white/5 p-4 text-center">
            <span className="text-white">Mary:</span> <span className="italic text-white/85">"Authentic Italian flavors!"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

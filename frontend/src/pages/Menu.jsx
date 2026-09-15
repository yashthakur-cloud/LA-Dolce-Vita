import { ArrowRight, ChefHat, Pizza, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import oven from "../assets/oven.jpg";
import psta from "../assets/psta.jpg";

const menuSections = [
  {
    title: "Antipasti",
    items: [
      { id: "bruschetta", name: "Bruschetta al Pomodoro", price: 320 },
      { id: "calamari", name: "Calamari Fritti", price: 450 },
      { id: "caprese", name: "Caprese Salad", price: 380 },
      { id: "garlic-bread", name: "Garlic Bread", price: 250 },
      { id: "arancini", name: "Arancini", price: 350 },
    ],
  },
  {
    title: "Insalate",
    items: [
      { id: "caesar", name: "Caesar Salad", price: 380 },
      { id: "burrata", name: "Burrata Salad", price: 420 },
      { id: "rucola", name: "Rucola e Parmigiano", price: 360 },
      { id: "greek", name: "Greek Salad", price: 340 },
    ],
  },
  {
    title: "Pizza",
    items: [
      { id: "margherita", name: "Margherita", price: 550 },
      { id: "quattro-formaggi", name: "Quattro Formaggi", price: 650 },
      { id: "diavola", name: "Diavola", price: 620 },
      { id: "funghi", name: "Funghi Trifolati", price: 580 },
      { id: "prosciutto", name: "Prosciutto e Rucola", price: 680 },
      { id: "capricciosa", name: "Capricciosa", price: 640 },
      { id: "siciliana", name: "Siciliana", price: 600 },
      { id: "napoletana", name: "Napoletana", price: 570 },
      { id: "calabrese", name: "Calabrese", price: 620 },
      { id: "pesto", name: "Pesto Genovese", price: 650 },
      { id: "parma", name: "Parma e Mozzarella", price: 690 },
      { id: "verdure", name: "Verdure Grigliate", price: 590 },
    ],
  },
  {
    title: "Pasta",
    items: [
      { id: "aglio-olio", name: "Spaghetti Aglio e Olio", price: 480 },
      { id: "carbonara", name: "Spaghetti Carbonara", price: 600 },
      { id: "lasagna", name: "Lasagna al Forno", price: 650 },
      { id: "ravioli", name: "Ravioli di Ricotta", price: 620 },
      { id: "pesto-pasta", name: "Linguine al Pesto", price: 560 },
      { id: "gnocchi", name: "Gnocchi al Pomodoro", price: 540 },
    ],
  },
  {
    title: "Risotto",
    items: [
      { id: "funghi-risotto", name: "Risotto ai Funghi", price: 620 },
      { id: "milanese", name: "Risotto alla Milanese", price: 650 },
      { id: "frutti-di-mare", name: "Risotto ai Frutti di Mare", price: 680 },
    ],
  },
  {
    title: "Beverages",
    items: [
      { id: "limonata", name: "Limonata", price: 220 },
      { id: "aranciata", name: "Aranciata", price: 220 },
      { id: "iced-tea", name: "Italian Iced Tea", price: 240 },
      { id: "espresso", name: "Espresso", price: 180 },
      { id: "cappuccino", name: "Cappuccino", price: 220 },
      { id: "tiramisu-latte", name: "Tiramisu Latte", price: 260 },
    ],
  },
  {
    title: "Dolci",
    items: [
      { id: "tiramisu", name: "Tiramisu", price: 420 },
      { id: "panna-cotta", name: "Panna Cotta", price: 360 },
      { id: "gelato", name: "Gelato Trio", price: 340 },
      { id: "cannoli", name: "Cannoli Siciliani", price: 390 },
      { id: "affogato", name: "Affogato", price: 280 },
    ],
  },
];

const formatPrice = (value) => `₹${value}`;

const Orders = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/orders");
  };

  return (
    <main className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#c79b4a]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#e3b86e]/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 py-15 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden justify-self-start lg:block">
            <div className="relative h-44 w-44 rounded-full border border-[#e3b86e]/40 bg-white/5 p-3 shadow-[0_0_40px_rgba(227,184,110,0.15)]">
              <img
                src={psta}
                alt="pasta"
                className="h-full w-full rounded-full object-cover"
              />
              <div className="absolute -right-4 top-2 rounded-full border border-[#e3b86e]/30 bg-black/85 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[#e3b86e]">
                Chef pick
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-4 text-[#c79b4a]">
              <span className="h-px w-16 bg-[#c79b4a]/50" />
              <span className="flex items-center gap-2 text-sm uppercase tracking-[0.4em]">
                <Sparkles className="h-4 w-4" /> Our Menu
              </span>
              <span className="h-px w-16 bg-[#c79b4a]/50" />
            </div>
            <h1 className="font-serif text-4xl uppercase tracking-[0.14em] text-[#f4efe5] sm:text-5xl lg:text-6xl">
              Italian. Authentic. Made for you.
            </h1>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-[#c79b4a]">
              <span className="h-px w-16 bg-[#c79b4a]/50" />
              <Pizza className="h-5 w-5" />
              <span className="h-px w-16 bg-[#c79b4a]/50" />
            </div>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Crafted with passion. Served with love.
            </p>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="relative h-44 w-44 rounded-full border border-[#e3b86e]/40 bg-white/5 p-3 shadow-[0_0_40px_rgba(227,184,110,0.15)]">
              <div className="absolute -left-4 top-2 rounded-full border border-[#e3b86e]/30 bg-black/85 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[#e3b86e]">
                Fine Crust
              </div>
              <img
                src={oven}
                alt="Wood-fired oven"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <div className="space-y-6">
            {menuSections.slice(0, 2).map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              >
                <div className="mb-4 text-center">
                  <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                    {section.title}
                  </h2>
                  <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
                </div>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <MenuRow key={item.id} item={item} />
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Pasta
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="space-y-2">
                {menuSections[3].items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="rounded-4xl border border-[#e3b86e]/25 bg-[#101010]/90 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Pizza
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="mx-auto mb-5 flex max-w-[18rem] items-center justify-center gap-4">
                <MiniPizza accent="gold" />
                <MiniPizza accent="cream" tilt />
              </div>
              <div className="space-y-2">
                {menuSections[2].items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Chef&apos;s Special
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="rounded-2xl border border-[#e3b86e]/25 bg-black/40 px-5 py-6 text-center">
                <ChefHat className="mx-auto h-7 w-7 text-[#e3b86e]" />
                <p className="mt-3 font-serif text-2xl text-[#f4efe5]">
                  Ask our chef for today&apos;s special creation.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Seasonal ingredients, prepared fresh every day.
                </p>
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Risotto
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="space-y-2">
                {menuSections[4].items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Beverages
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="space-y-2">
                {menuSections[5].items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#e3b86e]/20 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="mb-4 text-center">
                <h2 className="font-serif text-2xl uppercase tracking-[0.18em] text-[#e5bb7c]">
                  Dolci
                </h2>
                <div className="mx-auto mt-3 h-px w-24 bg-linear-to-r from-transparent via-[#c79b4a] to-transparent" />
              </div>
              <div className="space-y-2">
                {menuSections[6].items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-[#e3b86e]/20 bg-[#0f0f0f]/95 px-5 py-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-6">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleOrder}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#e3b86e]/40 bg-[#e3b86e] px-6 py-3 font-semibold text-black transition hover:bg-[#f0c97d]"
            >
              Order Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const MenuRow = ({ item }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/35 px-3 py-3 transition hover:border-[#e3b86e]/35 hover:bg-black/50">
      <div className="min-w-0 flex-1">
        <div className="flex items-end gap-2 text-sm sm:text-base">
          <span className="truncate text-white/92">{item.name}</span>
          <span className="mb-1 flex-1 border-b border-dotted border-[#e3b86e]/35" />
          <span className="shrink-0 text-[#e5bb7c]">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

const MiniPizza = ({ accent = "gold", tilt = false }) => {
  const tone = accent === "gold" ? "#e3b86e" : "#f4efe5";
  const cheese = accent === "gold" ? "#d7a84f" : "#c58d36";

  return (
    <div
      className={`relative h-28 w-28 rounded-full border border-[#e3b86e]/25 bg-[#1a1207] p-3 shadow-[0_12px_34px_rgba(0,0,0,0.45)] ${
        tilt ? "rotate-6" : "-rotate-6"
      }`}
    >
      <div
        className="absolute inset-3 rounded-full border"
        style={{
          borderColor: tone,
          background: `radial-gradient(circle at 50% 50%, ${cheese} 0%, #8d5420 72%, #5b3314 100%)`,
        }}
      />
      <div className="absolute left-8 top-7 h-3 w-3 rounded-full bg-[#7f1f18] shadow-[18px_10px_0_0_#9b2d24,32px_4px_0_0_#7f1f18,8px_24px_0_0_#9b2d24]" />
      <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-[#3e8b3f] shadow-[20px_-6px_0_0_#3e8b3f,-4px_20px_0_0_#cfc05f,18px_20px_0_0_#cfc05f]" />
      <div className="absolute left-9 top-9 h-1.5 w-7 rotate-12 rounded-full bg-[#f0d58b]" />
      <div className="absolute bottom-4 left-8 h-4 w-4 rotate-12 rounded-full bg-[#f0d58b] shadow-[14px_-10px_0_0_#f0d58b,26px_10px_0_0_#f0d58b]" />
    </div>
  );
};

export default Orders;

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/93 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.35em] text-[#ebab4c]">
              Bella Cucina
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#e5bb7c] sm:text-4xl">
              Savor Life, The Italian Way.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              A warm Italian dining experience built around handcrafted dishes,
              rich flavors, and moments meant to be shared.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#ebab4c]" />
                12 Via Roma, New Delhi
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#ebab4c]" />
                +91 98765 43210
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ebab4c]" />
                hello@ladolcevita.com
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#e5bb7c]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <Link className="transition hover:text-[#ebab4c]" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#ebab4c]" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#ebab4c]" to="/reservations">
                  Reservations
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#ebab4c]" to="/orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#ebab4c]" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#e5bb7c]">Follow Us</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Stay connected for seasonal specials, chef highlights, and fresh
              updates from our kitchen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  to="/"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#ebab4c]/30 bg-white/5 text-[#e5bb7c] transition hover:border-[#ebab4c] hover:bg-[#ebab4c] hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#ebab4c]/20 bg-white/5 px-4 py-4">
              <p className="font-serif text-lg text-white">
                Authentic Italian Experience
              </p>
              <p className="mt-2 text-sm text-white/70">
                Crafted with passion. Served with love.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/55">
          <p>© 2026 Bella Cucina. All rights reserved.</p>
          <p className="mt-2">
            Made for people who appreciate warm hospitality and timeless Italian taste.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 9H16V6h-2.5c-2.2 0-3.5 1.3-3.5 3.4V11H8v3h2v7h3v-7h2.3l.7-3H13V9.7c0-.5.3-.7.5-.7Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.9 7.5c.01.17.01.35.01.53 0 5.4-4.11 11.62-11.62 11.62-2.31 0-4.45-.68-6.25-1.84.32.04.64.05.97.05 1.91 0 3.67-.65 5.07-1.75-1.79-.03-3.3-1.21-3.82-2.82.25.04.51.06.78.06.37 0 .74-.05 1.08-.14-1.87-.38-3.29-2.03-3.29-4.01v-.05c.55.31 1.18.5 1.85.52a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.55-2.05 2 2.45 4.99 4.06 8.37 4.24-.07-.31-.1-.63-.1-.96a4.06 4.06 0 0 1 7.03-2.77 8.04 8.04 0 0 0 2.58-.99 4.07 4.07 0 0 1-1.78 2.24 8.14 8.14 0 0 0 2.34-.64 8.7 8.7 0 0 1-2.03 2.1Z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.6 8.1a3 3 0 0 0-2.11-2.12C17.64 5.5 12 5.5 12 5.5s-5.64 0-7.49.48A3 3 0 0 0 2.4 8.1 31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 3.9 3 3 0 0 0 2.11 2.12C6.36 18.5 12 18.5 12 18.5s5.64 0 7.49-.48a3 3 0 0 0 2.11-2.12A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-3.9Zm-8.48 6.52V9.38L16.4 12l-3.28 2.62Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6.94 8.5H4.2V20h2.74V8.5ZM5.57 3.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20 20h-2.74v-5.63c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V20H10.5V8.5h2.63v1.57h.04c.37-.7 1.27-1.44 2.61-1.44 2.79 0 3.3 1.84 3.3 4.24V20Z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "YouTube", icon: YoutubeIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
];

export default Footer;
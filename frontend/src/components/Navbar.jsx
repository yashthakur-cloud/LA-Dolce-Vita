import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, Menu, UserRound, X } from "lucide-react";
import img from "../assets/img1.png";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/reservations" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsProfileOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenus();
    navigate("/");
  };

  const initials = user?.name
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "U";

  const renderLinks = (mobile = false) => (
    <>
      {navLinks.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          onClick={closeMenus}
          className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#e5bb7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b27a] ${mobile ? "block" : ""}`}
        >
          {label}
        </Link>
      ))}
      {mobile && (
        <Link
          to="/orders"
          onClick={closeMenus}
          className="mt-2 rounded-md border border-[#b8925f]/70 px-3 py-2 text-sm font-semibold text-[#e5bb7c] transition hover:bg-[#b8925f]/10"
        >
          Order Online
        </Link>
      )}
    </>
  );

  return (
    <header ref={profileRef} className="relative z-50 border-b border-white/10 bg-[#10100f] text-white shadow-lg shadow-black/20">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenus} aria-label="Restaurant home" className="flex h-14 w-16 shrink-0 items-center sm:h-16 sm:w-20">
          <img className="h-full w-full object-contain" src={img} alt="Restaurant logo" />
        </Link>

        <div className="hidden items-center gap-1 md:flex lg:gap-3">
          {renderLinks()}
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link
            to="/orders"
            className="rounded-md border border-[#b8925f] px-4 py-2 text-sm font-semibold text-[#e5bb7c] transition hover:bg-[#b8925f]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b27a]"
          >
            Order Online
          </Link>
          {user ? (
            <div className="relative">
              <button
                type="button"
                aria-label="Open account menu"
                aria-haspopup="menu"
                aria-expanded={isProfileOpen}
                onClick={() => setIsProfileOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full border border-white/15 py-1 pl-1 pr-2 text-left transition hover:border-[#d8b27a]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b27a]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d8b27a] text-sm font-bold text-[#17130d]">{initials}</span>
                <span className="max-w-28 truncate text-sm font-medium">{user.name?.split(" ")[0] || "Account"}</span>
                <ChevronDown size={15} className={`text-white/60 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>
              {isProfileOpen && (
                <div role="menu" className="absolute right-0 top-full mt-3 w-72 overflow-hidden rounded-xl border border-white/10 bg-[#191817] shadow-2xl shadow-black/50">
                  <div className="border-b border-white/10 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8b27a]">Signed in as</p>
                    <p className="mt-2 truncate font-semibold text-white">{user.name || "Guest"}</p>
                    <p className="mt-1 truncate text-sm text-white/55">{user.email}</p>
                  </div>
                  <Link to="/orders" role="menuitem" onClick={closeMenus} className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                    <UserRound size={17} className="text-[#d8b27a]" /> My orders
                  </Link>
                  <button type="button" role="menuitem" onClick={handleLogout} className="flex w-full items-center gap-3 border-t border-white/10 px-4 py-3 text-left text-sm text-red-200 transition hover:bg-red-400/10">
                    <LogOut size={17} /> Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="rounded-md bg-[#d8b27a] px-4 py-2 text-sm font-semibold text-[#17130d] transition hover:bg-[#e8c891] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Login
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {user && (
            <button
              type="button"
              aria-label="Open account menu"
              aria-expanded={isProfileOpen}
              onClick={() => setIsProfileOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#d8b27a]/60 bg-[#d8b27a] text-sm font-bold text-[#17130d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {initials}
            </button>
          )}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white transition hover:border-[#d8b27a]/70 hover:text-[#e5bb7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b27a]"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isProfileOpen && user && (
        <div className="absolute right-4 top-[calc(100%-0.25rem)] z-20 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-white/10 bg-[#191817] shadow-2xl shadow-black/50 md:hidden">
          <div className="border-b border-white/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8b27a]">Signed in as</p>
            <p className="mt-2 truncate font-semibold text-white">{user.name || "Guest"}</p>
            <p className="mt-1 truncate text-sm text-white/55">{user.email}</p>
          </div>
          <Link to="/orders" onClick={closeMenus} className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
            <UserRound size={17} className="text-[#d8b27a]" /> My orders
          </Link>
          <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 border-t border-white/10 px-4 py-3 text-left text-sm text-red-200 transition hover:bg-red-400/10">
            <LogOut size={17} /> Sign out
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full z-10 border-t border-white/10 bg-[#10100f] px-4 pb-5 pt-3 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {renderLinks(true)}
            {!user && (
              <Link to="/login" onClick={closeMenus} className="mt-2 rounded-md bg-[#d8b27a] px-3 py-2 text-center text-sm font-semibold text-[#17130d] transition hover:bg-[#e8c891]">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

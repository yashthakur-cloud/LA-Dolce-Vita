import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, Clock3, Hash, MapPin, Users, CalendarDays } from "lucide-react";

function BookingConfirmed() {
  const { state } = useLocation();
  const booking = state?.booking;

  if (!booking) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(235,171,76,0.2),transparent_42%),linear-gradient(120deg,rgba(0,0,0,0.98),rgba(20,14,6,0.9),rgba(0,0,0,0.98))]" />

          <div className="relative z-10 w-full max-w-xl rounded-md border border-[#ebab4c]/35 bg-black/75 p-8 text-center shadow-2xl shadow-black/60 backdrop-blur-md">
            <p className="font-serif text-4xl font-semibold text-[#e9bf7f]">
              No Booking Found
            </p>
            <p className="mt-4 text-base text-white/75">
              We could not find your confirmation details. Please make a new reservation.
            </p>
            <Link
              to="/reservations"
              className="mx-auto mt-8 inline-flex h-11 items-center justify-center rounded-md bg-[#ebab4c] px-6 text-sm font-semibold text-black transition hover:bg-[#f2bd68]"
            >
              Make a Reservation
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(235,171,76,0.24),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(229,187,124,0.18),transparent_30%),linear-gradient(120deg,rgba(0,0,0,0.98),rgba(18,12,4,0.92),rgba(0,0,0,0.98))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-5xl items-center justify-center">
          <article className="w-full rounded-md border border-[#ebab4c]/35 bg-black/70 p-6 shadow-2xl shadow-black/60 backdrop-blur-md sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-sm font-semibold uppercase tracking-[0.24em] text-[#ebab4c]">
                  Reservation Confirmed
                </p>
                <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Your Table Is Ready
                </h1>
                <p className="mt-3 max-w-xl text-white/75">
                  Thank you for booking with us. Please save your confirmation details for check-in.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ebab4c]/45 bg-[#ebab4c]/15 text-[#f2c884] shadow-lg shadow-[#ebab4c]/15">
                <CheckCircle2 size={34} />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/6 p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <CalendarDays size={15} className="text-[#ebab4c]" />
                  Date
                </p>
                <p className="font-serif text-2xl text-[#e9bf7f]">{booking.date}</p>
              </div>

              <div className="rounded-md border border-white/10 bg-white/6 p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <Clock3 size={15} className="text-[#ebab4c]" />
                  Time
                </p>
                <p className="font-serif text-2xl text-[#e9bf7f]">{booking.timeSlot}</p>
              </div>

              <div className="rounded-md border border-white/10 bg-white/6 p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <Users size={15} className="text-[#ebab4c]" />
                  Guests
                </p>
                <p className="font-serif text-2xl text-[#e9bf7f]">{booking.guests}</p>
              </div>

              <div className="rounded-md border border-white/10 bg-white/6 p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <MapPin size={15} className="text-[#ebab4c]" />
                  Table
                </p>
                <p className="font-serif text-2xl text-[#e9bf7f]">
                  {booking.table?.tableNumber}
                  <span className="ml-2 text-lg text-white/70">{booking.table?.location ? `(${booking.table.location})` : ""}</span>
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-md border border-[#ebab4c]/30 bg-[#ebab4c]/8 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                <Hash size={14} className="text-[#ebab4c]" />
                Confirmation ID
              </p>
              <p className="break-all font-mono text-sm text-[#f1cd94]">{booking._id}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#ebab4c] px-6 text-sm font-semibold text-black transition hover:bg-[#f2bd68]"
              >
                Back to Home
              </Link>
              <Link
                to="/reservations"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#ebab4c] px-6 text-sm font-semibold text-[#ebab4c] transition hover:bg-[#ebab4c] hover:text-black"
              >
                Book Another Table
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default BookingConfirmed;

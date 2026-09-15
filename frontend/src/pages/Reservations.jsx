import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { getAvailableTables, createBooking } from "../services/bookingService";
import { useAuth } from "../context/AuthContext";
import heroImage from "../assets/backimg.jpg";

const RESTAURANT_HOURS_MESSAGE =
  "Reservations are available from 11:00 AM to 11:00 PM.";
const BOOKING_DATE_MESSAGE =
  "Reservations can only be made for tomorrow or a later date.";

const getMinimumBookingDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return [
    tomorrow.getFullYear(),
    String(tomorrow.getMonth() + 1).padStart(2, "0"),
    String(tomorrow.getDate()).padStart(2, "0"),
  ].join("-");
};

const isWithinRestaurantHours = (timeSlot) =>
  timeSlot >= "11:00" && timeSlot <= "23:00";

function Reservation() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [searchData, setSearchData] = useState({
    date: "",
    timeSlot: "",
    guests: 2,
  });

  const [availableTables, setAvailableTables] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const minimumBookingDate = getMinimumBookingDate();

  const handleSearchChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    setError("");

    if (searchData.date < minimumBookingDate) {
      setError(BOOKING_DATE_MESSAGE);
      setHasSearched(false);
      return;
    }

    if (!isWithinRestaurantHours(searchData.timeSlot)) {
      setError(RESTAURANT_HOURS_MESSAGE);
      setHasSearched(false);
      return;
    }

    setLoading(true);

    try {
      const tables = await getAvailableTables(
        searchData.date,
        searchData.timeSlot,
        searchData.guests,
      );
      setAvailableTables(tables);
      setHasSearched(true);
    } catch (err) {
      setError(err.response?.data?.message || "Could not check availability");
    } finally {
      setLoading(false);
    }
  };

  const handleBookTable = async (tableId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const booking = await createBooking(
        tableId,
        searchData.date,
        searchData.timeSlot,
        searchData.guests
      );

      navigate("/booking-confirmed", { state: { booking } });
    } catch (err) {
      setError(
        err.response?.data?.message || "Booking failed. Try another table.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <img
          src={heroImage}
          alt="Restaurant dining room"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.74),rgba(0,0,0,0.88))]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-14rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl text-center lg:text-left">
            <p className="font-serif text-lg font-semibold tracking-[0.18em] text-[#ebab4c]">
              Reserve Your Evening
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              A Table Set
              <span className="block text-[#e5bb7c]">For Italian Moments</span>
            </h1>
            <div className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-[#ebab4c] lg:mx-0" />
            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg lg:mx-0">
              Choose your date, time, and guests. We will show you the tables
              ready for your perfect dining experience.
            </p>
          </div>

          <div className="rounded-md border border-[#ebab4c]/35 bg-black/75 p-5 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-7">
            <form
              onSubmit={handleCheckAvailability}
              className="grid gap-5 md:grid-cols-3"
            >
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Calendar size={17} className="text-[#ebab4c]" />
                  Date
                </span>
                <input
                  type="date"
                  name="date"
                  value={searchData.date}
                  onChange={handleSearchChange}
                  min={minimumBookingDate}
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition [color-scheme:dark] hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Clock size={17} className="text-[#ebab4c]" />
                  Time
                </span>
                <input
                  type="time"
                  name="timeSlot"
                  value={searchData.timeSlot}
                  onChange={handleSearchChange}
                  min="11:00"
                  max="23:00"
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition [color-scheme:dark] hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Users size={17} className="text-[#ebab4c]" />
                  Guests
                </span>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={searchData.guests}
                  onChange={handleSearchChange}
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition [color-scheme:dark] hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#ebab4c] px-5 font-semibold text-black shadow-lg shadow-[#ebab4c]/15 transition hover:bg-[#f2bd68] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-3"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Search size={18} />
                    Check Availability
                  </>
                )}
              </button>
            </form>

            {error && (
              <p className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {error}
              </p>
            )}

            {hasSearched && (
              <section className="mt-8 border-t border-white/10 pt-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-serif text-sm font-semibold uppercase tracking-[0.24em] text-[#ebab4c]">
                      Availability
                    </p>
                    <h2 className="mt-1 font-serif text-3xl font-semibold text-white">
                      Select Your Table
                    </h2>
                  </div>
                  <span className="w-fit rounded-md border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                    {availableTables.length} found
                  </span>
                </div>

                {availableTables.length === 0 ? (
                  <div className="mt-5 rounded-md border border-[#ebab4c]/25 bg-white/5 p-5 text-white/80">
                    No tables available for that time. Try a different date or
                    time.
                  </div>
                ) : (
                  <ul className="mt-5 grid gap-3">
                    {availableTables.map((table) => (
                      <li
                        key={table._id}
                        className="flex flex-col gap-4 rounded-md border border-white/10 bg-white/[0.07] p-4 transition hover:border-[#ebab4c]/50 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-serif text-2xl font-semibold text-[#e5bb7c]">
                            Table {table.tableNumber}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/75">
                            <span className="flex items-center gap-1.5">
                              <Users size={15} className="text-[#ebab4c]" />
                              Seats {table.capacity}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={15} className="text-[#ebab4c]" />
                              {table.location}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleBookTable(table._id)}
                          disabled={loading}
                          className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-[#ebab4c] px-5 font-semibold text-[#ebab4c] transition hover:bg-[#ebab4c] hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={17} className="animate-spin" />
                              Booking...
                            </>
                          ) : (
                            <>
                              <CheckCircle size={17} />
                              Book Table
                            </>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservation;

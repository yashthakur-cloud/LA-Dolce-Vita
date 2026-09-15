import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  Loader2,
  LockKeyhole,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { registerUser } from "../services/authService";
import heroImage from "../assets/backimg.jpg";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateForm = () => {
    const { name, email, phone } = formData;

    // Name: only letters and spaces, no numbers
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      setError("Name should contain letters only, no numbers");
      return false;
    }

    // Email: standard email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Phone: exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be exactly 10 digits");
      return false;
    }

    return true;
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = await registerUser(
        formData.name,
        formData.email,
        formData.password,
        formData.phone,
      );

      login({ name: data.name, email: data.email }, data.token);
      navigate("/reservations");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <img
          src={heroImage}
          alt="Restaurant dining room"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.76),rgba(0,0,0,0.92))]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="font-serif text-lg font-semibold tracking-[0.2em] text-[#ebab4c]">
              Join The Table
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Create Your
              <span className="block text-[#e5bb7c]">Dining Account</span>
            </h1>
            <div className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-[#ebab4c] lg:mx-0" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg lg:mx-0">
              Reserve tables faster, keep your details ready, and make every
              visit feel a little more personal.
            </p>
          </div>

          <div className="rounded-md border border-[#ebab4c]/35 bg-black/75 p-5 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-8">
            <div className="mb-7 text-center">
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.24em] text-[#ebab4c]">
                New Guest
              </p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-white">
                Create an Account
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <User size={17} className="text-[#ebab4c]" />
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Mail size={17} className="text-[#ebab4c]" />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Phone size={17} className="text-[#ebab4c]" />
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                  placeholder="Your phone number"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <LockKeyhole size={17} className="text-[#ebab4c]" />
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#ebab4c] focus:bg-white/15"
                  placeholder="Minimum 6 characters"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#ebab4c] px-5 font-semibold text-black shadow-lg shadow-[#ebab4c]/15 transition hover:bg-[#f2bd68] disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Register
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {error && (
              <p className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {error}
              </p>
            )}

            <p className="mt-6 text-center text-sm text-white/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#e5bb7c] transition hover:text-[#f2bd68]"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;

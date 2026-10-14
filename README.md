<div align="center">

# 🍝 La Dolce Vita

### A refined Italian restaurant experience, from browsing the menu to booking the perfect table.

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js and Express" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB and Mongoose" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p>
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-api-overview">API</a>
</p>

</div>

---

## ✨ Overview

**La Dolce Vita** is a full-stack Italian restaurant web application designed around a warm, elegant dining experience. Guests can explore the restaurant, browse the menu, create an account, reserve tables, manage bookings, and complete food orders through Razorpay.

The application is split into two independently runnable parts:

- `frontend` — responsive React interface powered by Vite and Tailwind CSS
- `restaurant-backend` — Express REST API with MongoDB persistence and JWT authentication

## 🍽️ Features

- 🏠 Immersive home page with Italian-inspired visual design
- 📖 Menu browsing with categorized dishes and pricing
- 👤 User registration, login, and authenticated sessions
- 🪑 Real-time table availability checks by date, time, and guest count
- 📅 Reservation creation, booking confirmation, and cancellation
- 🧾 Personal orders and reservation history
- 💳 Razorpay checkout and payment signature verification
- 📱 Responsive layout for desktop, tablet, and mobile screens
- 🔐 Protected API routes with JWT middleware
- 🌐 Configurable frontend-to-backend API URL

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
| --- | --- |
| React 19 | User interface |
| React Router | Client-side routing |
| Vite | Development server and production builds |
| Tailwind CSS | Styling and responsive design |
| Axios | API communication |
| Lucide React | Interface icons |

### Backend

| Technology | Purpose |
| --- | --- |
| Node.js | JavaScript runtime |
| Express | REST API framework |
| MongoDB + Mongoose | Database and data modeling |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Razorpay | Payment processing |
| dotenv | Local environment configuration |

## 📁 Project Structure

```text
.
├── frontend/
│   ├── public/              # Static assets
│   └── src/
│       ├── components/      # Shared UI components
│       ├── context/         # Authentication state
│       ├── pages/           # Application screens
│       └── services/        # API and payment service modules
├── restaurant-backend/
│   ├── config/              # Database configuration
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Authentication middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API route definitions
│   ├── seed.js              # Database seed script
│   └── server.js            # API entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm
- A MongoDB database
- Razorpay account credentials for payment functionality

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

### 2. Install dependencies

Open two terminals, or run these commands one after another:

```bash
cd restaurant-backend
npm install
```

```bash
cd frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in both `restaurant-backend` and `frontend`.

> **Security:** Never commit `.env` files or paste real credentials into this README. Use private deployment settings or a local `.env` file for secrets.

#### `restaurant-backend/.env`

```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-long-random-jwt-secret>
PORT=5000
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```

#### `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=<your-razorpay-key-id>
```

The variable names above are safe configuration placeholders only. Replace the values locally or in your hosting provider's environment settings.

### 4. Start the backend

```bash
cd restaurant-backend
npm run dev
```

The API runs at `http://localhost:5000` by default.

### 5. Start the frontend

In a separate terminal:

```bash
cd frontend
npm run dev
```

Vite will display the local frontend URL in the terminal, usually `http://localhost:5173`.

## 📜 Available Scripts

### Frontend

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

### Backend

```bash
npm run dev       # Start the API with Nodemon
npm start         # Start the API with Node.js
```

## 🔌 API Overview

All API routes are prefixed with `/api`.

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | Create a user account | Public |
| `POST` | `/auth/login` | Sign in and receive a JWT | Public |
| `GET` | `/auth/me` | Get the current user | JWT |
| `GET` | `/bookings/available` | Find available tables | Public |
| `POST` | `/bookings` | Create a reservation | JWT |
| `GET` | `/bookings/my` | List the user's reservations | JWT |
| `DELETE` | `/bookings/:id` | Cancel a reservation | JWT |
| `POST` | `/payment/create-order` | Create a Razorpay order | JWT |
| `POST` | `/payment/verify` | Verify a Razorpay payment | JWT |

## 🔒 Security Notes

- Keep database URLs, JWT secrets, and payment secrets outside source control.
- Use different credentials for development and production.
- Use Razorpay test keys while developing locally.
- Configure `VITE_API_URL` to point to the deployed API in production.
- Review CORS settings before deploying the application publicly.

## 🤝 Contributing

1. Create a feature branch.
2. Make focused, tested changes.
3. Run the frontend lint and production build before opening a pull request.
4. Open a pull request with a clear description of the change.

## 📄 License

No license has been specified yet. Add a license before distributing or reusing this project commercially.

<div align="center">

### Made with ❤️ for lovers of authentic Italian food

</div>

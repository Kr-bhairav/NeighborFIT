# NeighborFit

**NeighborFit** is a full-stack web application designed to help users find neighborhoods that match their lifestyle preferences. Through a user-friendly questionnaire, the platform provides tailored recommendations based on key factors such as affordability, safety, greenery, facilities, and commute needs.

---

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

---

## Folder Structure

```
neighborfit/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── vite.config.js
│
├── README.md
├── .gitignore
└── LICENSE
```

---

### ⚙ Backend Setup

```bash
cd backend
npm install
```

####  Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
ADMIN_SECRET=your_admin_secret key
FRONTEND_ENDPOINT=your_frontend_link
```

####  Run Backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

#### Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_APP_API_URL=http://localhost:5000/api
```

#### Run Frontend

```bash
npm run dev
```

---

## Features

- Lifestyle-based neighborhood recommendation form
- User authentication system
- Admin dashboard to upload new neighborhood data
- User feedback collection system
- Responsive UI with Tailwind CSS

---

## Contributors

- [Abhishek Kumar](https://github.com/Di-Abhi)
- [Bhairav kumar](https://github.com/Kr-bhairav)

---

## Future Improvements

- Add location-based filters
- Social sharing of results
- Favorites and bookmarking neighborhoods
- Real-time data visualization

---

## License

This project is licensed under the [MIT License](LICENSE).

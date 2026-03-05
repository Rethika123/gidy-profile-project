# Gidy Profile Management Application

This project is a full-stack profile management application built as part of the technical assessment for the Associate Software Developer role at Gidy.

The application allows users to view and edit profile details including name, bio, skills, social links, and profile image.

---

## Live Demo

Frontend:
https://gidy-profile-project-seven.vercel.app

Backend API:
https://gidy-profile-project-wda9.onrender.com/profile

---

## Features

- View profile details
- Edit profile information
- Update profile image via URL
- Dark mode toggle
- Cancel edit functionality
- Responsive profile UI
- Backend REST API
- Database integration using MySQL (local environment)

---

## Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- REST API

### Database
- MySQL

---

## Project Structure
gidy-profile-project
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ └── Profile.jsx
│ │ ├── App.css
│ │ └── main.jsx
│
├── backend
│ ├── routes
│ │ └── profile.js
│ ├── db.js
│ └── server.js
│
└── database.sql


---

## API Endpoints

### GET Profile
GET /profile
Returns the profile data.

Example response:
{
"name": "Rethika",
"bio": "Full Stack Developer",
"skills": "React, Node, Express",
"linkedin": "https://linkedin.com
",
"github": "https://github.com
"
}


---

### Update Profile
PUT /profile

Updates profile information.

---

## Database Setup (Local Development)

1. Install MySQL
2. Create a database
CREATE DATABASE profile_db;

3. Import the provided SQL file
database.sql

4. Update database credentials in
backend/db.js

Example:
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "yourpassword",
database: "profile_db"
});


---

## Running the Project Locally

### Backend
cd backend
npm install
node server.js

Server runs on:
http://localhost:5001

---

### Frontend
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## Deployment Notes

The frontend is deployed on **Vercel** and the backend is deployed on **Render**.

Since the deployed backend environment cannot access a local MySQL instance, a temporary mock API response is used for the deployed demo.

The full MySQL integration works correctly in the local development environment.

---

## Innovation Feature

Dark mode toggle was implemented as an additional feature to improve the user experience.

---

## Future Improvements

If more time were available, the following improvements could be implemented:

- Cloud-hosted database
- Image upload instead of URL input
- Skill endorsements
- Improved UI styling
- Authentication and user accounts

---

## Author

Rethika Prabhakar


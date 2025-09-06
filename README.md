# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

## 📸 Preview
![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Screenshot)

## 🌐 Live Demo
- **Live Site:** [https://praveen-portfolio.onrender.com](https://praveen-portfolio.onrender.com)
- **Local Development:** `http://localhost:5173`

---

## 🛠 Tech Stack

| Technology           | Purpose                                 |
|---------------------|-----------------------------------------|
| **React 18**        | UI Library for building components      |
| **Vite**            | Fast build tool and development server  |
| **Tailwind CSS**    | Utility-first CSS framework             |
| **React Router DOM**| Client-side routing for SPA             |
| **JavaScript (ES6+)**| Core programming language              |
| **Firebase**        | Backend/auth (if enabled in project)    |

---

## ✨ Features

- **Multi-page Navigation** – Smooth routing between pages
- **Dark/Light Theme Toggle** – User preference with persistent state
- **Responsive Design** – Mobile-first approach with Tailwind
- **Dynamic Project Filtering** – Filter projects by technology
- **Interactive Contact Form** – Form validation and submission
- **Animated Skill Bars** – Visual representation of skill levels
- **Real-time Clock** – Live time display in header
- **Modern UI/UX** – Gradient backgrounds and hover effects

---

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Header.jsx   # Navigation bar with theme toggle
│   ├── Footer.jsx   # Footer with social links
│   ├── SkillBar.jsx # Individual skill progress bar
│   ├── ProjectCard.jsx # Project display card
│   └── ProtectedRoute.jsx # Route protection for admin
├── pages/           # Main page components
│   ├── Home.jsx     # Hero section and landing page
│   ├── About.jsx    # About me and skills section
│   ├── Projects.jsx # Projects showcase with filtering
│   ├── Contact.jsx  # Contact form page
│   ├── Login.jsx    # Login page
│   ├── Signup.jsx   # Signup page
│   └── Admin.jsx    # Admin dashboard
├── utils/           # Helper functions and data
│   └── ProjectData.js # Projects and skills data arrays
├── hooks/           # Custom React hooks
│   ├── useAuth.js
│   ├── useFirestore.js
│   └── useTypingEffect.js
├── App.jsx          # Main app with routing logic
├── main.jsx         # React DOM entry point
├── App.css          # App-level styles
├── index.css        # Global styles and Tailwind imports
└── assets/          # Static assets (images, icons)
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v20.19+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pravi-779/react.git
   cd react
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be running at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---



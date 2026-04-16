<div align="center">

# 🔐 Keen Keeper

**A modern, full-featured task & productivity management application built with Next.js 16 and React 19.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[🚀 Live Demo](https://keen-keeper-bay.vercel.app/) &nbsp;|&nbsp; [📖 Documentation](#) &nbsp;|&nbsp; [🐛 Report Bug](https://github.com/mehedi-hasan2006/A7-keen-keeper/issues) &nbsp;|&nbsp; [✨ Request Feature](https://github.com/mehedi-hasan2006/A7-keen-keeper/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🧠 About the Project

**Keen Keeper** is a sleek and intuitive productivity web application designed to help you stay connected to your friend and on top of your friendship goals. Built with the latest versions of Next.js and React, it leverages server-side rendering, modern UI components, and interactive data visualizations to deliver a seamless user experience.

---

## ✨ Features

- 📊 **Interactive Charts** — Visualize productivity and data trends using Recharts
- 🔔 **Toast Notifications** — Real-time feedback via React Toastify
- 💅 **Beautiful UI** — Crafted with DaisyUI components on top of Tailwind CSS
- ⚡ **Blazing Fast** — Powered by Next.js App Router with React
- 📱 **Fully Responsive** — Mobile-first design that works on all screen sizes
- 🎨 **Theming Support** — Light/Dark mode via DaisyUI theming system
- 🔄 **Loading States** — Smooth spinners powered by React Spinners
- 🔍 **ESLint Ready** — Clean, consistent code with Next.js ESLint config

---

## 🛠 Tech Stack

| Category          | Technology                                                                       |
| ----------------- | -------------------------------------------------------------------------------- |
| **Framework**     | [Next.js 16](https://nextjs.org/)                                                |
| **UI Library**    | [React 19](https://react.dev/)                                                   |
| **Styling**       | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/) |
| **Charts**        | [Recharts v3](https://recharts.org/)                                             |
| **Icons**         | [React Icons v5](https://react-icons.github.io/react-icons/)                     |
| **Notifications** | [React Toastify v11](https://fkhadra.github.io/react-toastify/)                  |
| **Loaders**       | [React Spinners](https://www.davidhu.io/react-spinners/)                         |
| **Linting**       | [ESLint 9](https://eslint.org/)                                                  |

---

## 📁 Project Structure

```
A7-keen-keeper/
├── public/               # Static assets (images, icons, fonts)
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   ├── components/       # Reusable UI components
│   └── ...               # Additional modules & utilities
├── .gitignore
├── eslint.config.mjs     # ESLint configuration
├── jsconfig.json         # JS path aliases
├── next.config.mjs       # Next.js configuration
├── package.json
├── postcss.config.mjs    # PostCSS / Tailwind configuration
└── README.md
```

## 📜 UI (User Interface)

<p>Home Page </p>
<image src="./src/assets/ui/home.png">

<p> Friend Details Page </p>
<image src="./src/assets/ui/details.png">

<p>Timeline Page </p>
<image src="./src/assets/ui/timeline.png">

<p>Stats Page </p>
<image src="./src/assets/ui/stats.png">

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **npm** `>= 9.x` (or yarn / pnpm / bun)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mehedi-hasan2006/A7-keen-keeper.git
cd A7-keen-keeper
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The app supports **hot module replacement** — changes to `src/app/page.js` will auto-refresh in the browser.

---

## 📜 Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build the app for production             |
| `npm run start` | Start the production server              |
| `npm run lint`  | Run ESLint to check for code issues      |

---

## 🌐 Deployment

The easiest way to deploy **Keen Keeper** is on **[Vercel](https://vercel.com/)** — the platform built by the creators of Next.js.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mehedi-hasan2006/A7-keen-keeper)

1. Click the button above or go to [vercel.com](https://vercel.com/)
2. Import this GitHub repository
3. Add your environment variables
4. Click **Deploy** 🎉

For other deployment options, refer to the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure your code passes linting (`npm run lint`) before submitting a PR.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Mehedi Hasan**

[![GitHub](https://img.shields.io/badge/GitHub-mehedi--hasan2006-181717?style=flat&logo=github)](https://github.com/mehedi-hasan2006)

Project Link: [https://github.com/mehedi-hasan2006/A7-keen-keeper](https://github.com/mehedi-hasan2006/A7-keen-keeper)

---

<div align="center">

Made with ❤️ by [Mehedi Hasan](https://github.com/mehedi-hasan2006)

⭐ **Star this repo if you found it helpful!** ⭐

</div>

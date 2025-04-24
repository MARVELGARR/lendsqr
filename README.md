
# Lendsqr Project

🚀 **Live Demo:** [https://marvellous-obatale-lendsqr-fe-test-ccxyf645a.vercel.app/](https://marvellous-obatale-lendsqr-fe-test-ccxyf645a.vercel.app/)  
📦 **GitHub Repository:** [https://github.com/MARVELGARR/lendsqr-fe-test](https://github.com/MARVELGARR/lendsqr-fe-test)

Welcome to the **Lendsqr** project! This repository contains the source code and documentation for a user management and lending dashboard.

This application was developed as part of a **frontend engineering take-home assignment**. The goal was to replicate a dashboard UI from a provided [Figma design](https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-2599&t=d5ozv6e85gp36RcH-0), implementing responsive pages, reusable components, and functional interactivity using modern React tooling.

---

## Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Approach & Decisions](#approach--decisions)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🔐 User authentication UI
- 📄 Paginated, searchable, and filterable user table
- 🔍 User detail view with localStorage-based caching
- 📊 Dashboard with summary widgets and quick access links
- 📱 Fully responsive design

---

## Project Overview

This project replicates the **Lendsqr Admin Dashboard** as designed in the [Figma design file](https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-2599&t=d5ozv6e85gp36RcH-0). It includes:

- A fully styled login page with form validation.
- A dashboard layout including sidebar navigation, top navbar, and protected routing.
- A user management page with pagination, filters, and user detail views.
- Local caching for better UX and performance.
- Clean, responsive UI closely matching the Figma mockup.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MARVELGARR/lendsqr-fe-test.git
    ```

2. Navigate to the project directory:
    ```bash
    cd lendsqr-fe-test
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add any required variables as specified in `.env.example` (if provided).

---

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

---

## Technologies Used

- **React.js** – Component-based UI
- **Next.js** – Routing, SSR support
- **TypeScript** – Static typing
- **SCSS Modules** – Scoped styling
- **React Query** – Server state management
- **TanStack Table** – Powerful data table utilities
- **React Hook Form + Zod** – Form handling and schema validation
- **React Icons** – Icon set used throughout the UI

---

## Approach & Decisions

### ✅ Why Next.js?
- Simplifies routing and layout separation (e.g., dashboard pages and user detail views).
- Built-in performance optimizations and routing for scalability.

### ✅ Why React Query?
- Handles server state like fetching, caching, pagination, and syncing with the UI efficiently.

### ✅ Why TanStack Table?
- Offers fine-grained control for paginated, sortable, and filterable tables.

### ✅ Why SCSS Modules?
- The Figma design required precise spacing, positioning, and reusable class structure, which SCSS modules made easy and maintainable.

### ✅ React Hook Form + Zod
- Fast and scalable form handling with built-in validation powered by TypeScript types.

### ✅ Caching with `localStorage`
- Prevents redundant API calls when navigating back to already-visited user details, enhancing UX.

### 📱 Mobile Responsiveness
- Built with responsiveness in mind using a combination of media queries and flexible layouts based on Figma’s mobile specs.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

Developed by **Marvellous Obatale** – [LinkedIn](https://www.linkedin.com/in/marvellous-obatale-960088267/)

# TUF Calendar 📅

A beautiful, modern React application featuring a dynamic calendar with a dedicated notes section. Inspired by classic physical calendar designs, this app provides a clean and functional interface for tracking dates and jotting down reminders.

## ✨ Features

- **Dual-Pane Layout**: Side-by-side view of your notes and the monthly calendar.
- **Interactive Calendar**: Easily navigate between months and select specific dates.
- **Modern Aesthetics**: Sleek design with smooth transitions, custom wave overlays, and a premium color palette.
- **Responsive Components**: Built with reusable React components (`Box`, `Calendar`, `Spring`).

## 🚀 Getting Started

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone https://github.com/patankaif/TUF.git
cd TUF
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

## 🌐 Deployment (Netlify)

This project is optimized for deployment on **Netlify** via GitHub integration:

1.  **Log in** to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub** and authorize.
4.  Choose the **`TUF`** repository.
5.  Netlify will automatically detect the settings from `netlify.toml`:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
6.  Click **"Deploy Site"**.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Modern custom properties and layouts)
- **Linting**: [ESLint](https://eslint.org/)

## 📂 Project Structure

- `src/components/`: Contains the core UI components.
  - `Calendar.jsx`: The main calendar logic and notes section.
  - `Box.jsx`: Container component with the decorative header.
  - `Spring.jsx`: Decorative spring element.
- `src/assets/`: Static assets like images and global styles.

## 📝 Usage

- Use the `<` and `>` buttons to switch between months.
- Click on any date to highlight it.
- Use the **Notes** section on the left to keep track of your monthly goals or reminders.

---
Built with ❤️ by [Kaif](https://github.com/patankaif)

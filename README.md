# write-amharic

A desktop or web app to compose in Amharic (Ethiopic script) effortlessly.

## ✏️ Overview

This project helps users type/write in Amharic using a friendly UI. Users type using **ASCII letters** and can leverage their existing typing speed in English to write in Amharic. It is built with React + TypeScript + Vite, and includes a Rust + Tauri part so it can run as a web app or native desktop application.

The repository structure is:

- `src/` — frontend code
- `src-tauri/` — Tauri (Rust) backend for the desktop build

Live web version: [https://write-amharic.vercel.app](https://write-amharic.vercel.app)

## ✅ Features

- Write in Amharic script using ASCII letters
- Maintain your natural English typing speed while writing Amharic
- Cross-platform support: web & native (via Tauri)
- Built with modern tools: React, TypeScript, Vite, Rust (Tauri)
- Fast and lightweight
- Clean UI/UX

## 🚀 Installation & Setup

### Prerequisites

- Node.js (preferably latest LTS)
- npm or yarn / bun
- If building native app: Rust toolchain (for Tauri)

### Setup steps

```
# Clone the repository
git clone https://github.com/abrishk26/write-amharic.git
cd write-amharic

# Install dependencies
npm install
# or
# yarn
# or
# bun install

# Run development server (web)
npm run dev

# Run development server (mobile)
cd src-tauri
cargo install tauri-cli --version "^2.0.0" --locked
cargo tauri dev
```

### Building

- For web build:

```
npm run build
```

- For native desktop build (Tauri):

```
cd src-tauri
# follow Tauri docs for packaging for your OS
npm run tauri build
```

### Usage

```
# In dev mode, open http://localhost:PORT in your browser
# Type in ASCII letters and the app will convert them into Amharic script in real time
# (If desktop) Install the generated binary and run like any standard application
```

## 🗂 Folder Structure (simplified)

```
/
├── public/
├── src/            # React front-end
├── src-tauri/      # Rust + Tauri backend for desktop version
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.js
└── README.md
```

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Vite, CSS
- **Desktop wrapper**: Tauri (Rust)
- **Linting/Formatting**: ESLint, TypeScript config
- **Build tools**: Vite

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Open an issue for bugs or feature suggestions
- Submit a pull request
- Improve documentation
- Add tests or CI/CD
- Enhance localization, keyboard layouts, or input methods for Amharic
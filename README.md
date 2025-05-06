# 🎮 Hangman Game

A classic word-guessing game built with React and Vite where players attempt to guess a hidden word letter by letter before running out of lives.

## ✨ Features

- 🎯 Interactive gameplay with a visually appealing UI
- 🎨 Real-time feedback with hangman visualization using balloon animations
- ⌨️ Letter selection interface with letter state tracking
- 🔄 Backend API integration for game sessions
- 📱 Responsive design for various screen sizes

## 🛠️ Tech Stack

- **Frontend**: React, SCSS
- **Build Tool**: Vite
- **API Communication**: Fetch API
- **Styling**: SASS/SCSS

## 🎲 How to Play

1. Enter your name and click "Start"
2. A random word will be selected and displayed as masked characters
3. Click on letters to make guesses
4. Each incorrect guess removes a balloon (representing lives)
5. The game ends when you either:
   - 🏆 Guess the word correctly
   - 💥 Run out of lives (6 incorrect guesses)

## 💻 Development

### 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/Vibhishan/hangman-frontend.git
cd hangman-frontend

# Install dependencies
npm install
```

### 🚀 Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🔌 Backend API

The game connects to a backend API running on `http://localhost:3000` which provides:

- Session creation
- Letter validation
- Game state management

## 📁 Project Structure

- `/src` - Main source code
  - `/components` - React components (Game, Letters, Lives, Start, Word)
  - `/styles` - SCSS styling files
- `/api` - API integration code
- `/public` - Static assets

## 👨‍💻 Credits

Designed and developed by Vibhishan Ranga

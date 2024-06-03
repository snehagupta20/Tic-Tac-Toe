# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe Game! This is a simple web application built using React.js, HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Things I learned from the Project](#learning)

## Demo

You can see the live demo of the Tic-Tac-Toe game [here](#).

## Features

- Interactive 3x3 grid for gameplay
- Player vs Player mode
- Displays current player's turn
- Indicates the winner or if the game ends in a draw
- Simple and intuitive user interface

## Technologies Used

This project utilizes the following technologies:

- **React.js**: A JavaScript library for building user interfaces, particularly single-page applications.
- **HTML**: The standard markup language for creating web pages.
- **CSS**: A style sheet language used for describing the presentation of a document written in HTML.
- **JavaScript**: A programming language that enables dynamic interactivity on websites.

## Getting Started

To get a local copy of the project up and running on your machine, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your local machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:
```sh
   git clone https://github.com/yourusername/tic-tac-toe.git
```

2. Navigate to the project directory:
```sh
   cd tic-tac-toe
```

3. Install the dependencies:
```sh
   npm install
```

4. Start the development server:
```sh
   npm start
```

## Project stucture

tic-tac-toe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── Player.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
|   └── ...
├── .gitignore
├── package.json
└── README.md

## Things I learned from the Project

1. State Updates in React

When updating state in React, especially if the new state depends on the previous state, it's important to pass a function to the state updating function instead of directly passing the new state value.

### Incorrect Approach
Consider the following example where we toggle a boolean state:

```jsx
setIsEditing(!isEditing);
```

This might seem straightforward, but it can lead to unexpected behavior due to how React schedules state updates. React batches multiple state updates for performance reasons, meaning the state might not be updated immediately.

### Correct Approach
Instead, you should use a function that receives the previous state and returns the new state. This ensures that you are working with the most current state value, even if multiple updates are batched together:

```jsx
setIsEditing((prevIsEditing) => !prevIsEditing);
```

### Why is This Important?
React may schedule state updates asynchronously. If you use the incorrect approach, you might be working with a stale state value, leading to bugs and unpredictable behavior.

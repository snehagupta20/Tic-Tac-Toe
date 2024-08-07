# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe Game! This is a simple web application built using React.js, HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
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


## Things I learned from the Project

### 1. State Updates in React

When updating state in React, especially if the new state depends on the previous state, it's important to pass a function to the state updating function instead of directly passing the new state value.

-> Incorrect Approach
Consider the following example where we toggle a boolean state:

```jsx
setIsEditing(!isEditing);
```

This might seem straightforward, but it can lead to unexpected behavior due to how React schedules state updates. React batches multiple state updates for performance reasons, meaning the state might not be updated immediately.

-> Correct Approach
Instead, you should use a function that receives the previous state and returns the new state. This ensures that you are working with the most current state value, even if multiple updates are batched together:

```jsx
setIsEditing((prevIsEditing) => !prevIsEditing);
```

-> Why is This Important?
React may schedule state updates asynchronously. If you use the incorrect approach, you might be working with a stale state value, leading to bugs and unpredictable behavior.


### 2. state update with an object or array

if your state is an object or array, you should update them in an immutable way. which means, you should create a copy of your old state ie, a new object or arr and change that new copy, instead of that existing one.

-> incorrect approach

```jsx
const updateUser = user; //user is an object, not creating a copy
user.name = "max"; //editing the user object in memory
```

-> correct approach

```jsx
const updateUser = {...user}; //creating a copy via js' "spread" operator
updateUser.name = "max"; //updating the copy, not the original array
```

-> reason:

if your state is an object or an array, you are dealing with a reference value in javascript. 
Therefore if you would be updating it directly (incorrect approach), you would be updating the old value in memory immedietly, even before this scheduled state update was executed by react.
now just think about that for a moment. the value is alredy updated in the memory. and when the state is called, the value will again change.
this wont give an errors or any bug when the project is small, or when the state is not being called many times. but in a large project, where a single state is called many times, this can give a bug.


to know more about reference and primitive values:
[click here](https://academind.com/tutorials/reference-vs-primitive-values)

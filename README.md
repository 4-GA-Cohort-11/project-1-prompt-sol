# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Project #1: Tic Tac Toe

## Overview:

Let's start out with something fun - **a game!**


**You will be working individually for this project**, but we are here to support you and you are here to support each other. Show us what you've got!

---

## What You've Learned

By the time you submit this project, you will have covered new ground in, and reviewed, many of the big themes of the course so far:

- **Command Line**: Practice interacting with the computer and navigating the filesystem from the command line.
- **Source Control**: Manage and interact with a git repository to store changes to code.
- **Programming Fundamentals**: Work with objects, arrays, events, while learning how to strategically solve problems and resolve errors.
- **Web Fundamentals**: Learn how to use HTML, CSS, and JS to build interactive web pages. Also learn how to respond to actions your users take and the data they input into the browser.
- **Browser Applications**: Dive into JavaScript, and figure out how to use libraries and frameworks to get lots of style and functionality for free.
- **Deployment**: Host a static web site in a managed hosting environment.
- **Products and Teams**: Document your code and your code repository so others understand what you've built.

---

## Big Goals

- **Build a web application from scratch**, without a starter codebase
- Use your programming skills to **work out the game logic for a simple game like Tic Tac Toe**
- **Separate HTML, CSS, and JavaScript files** in your application
- Build an application **to a specification that someone else gives you**
- **Build a dynamic game that allows two players to compete** from the same computer
- **Craft a `README.md` file that explains your app** to the world

---

## Technical Requirements

Your Tic Tac Toe app must:
- **Render a game board in the browser**
- **Switch turns** between X and O (or whichever markers you select)
- **Visually display which side won** if a player gets three in a row, or show a draw if neither player wins
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript and/or jQuery** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
  - We will be walking you through this process!
- Use **semantic markup** for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

### User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

#### Potential Extra Tic Tac Toe Features

- Keep track of multiple game rounds with a win, lose and tie counter
- Allow players to customize their tokens (X, O, name, picture, etc)
- Use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Involve Audio in your game
- Create an AI opponent: teach JavaScript to play an unbeatable game against you
- Make your site fully responsive so that it is playable from a mobile phone
- Get inventive with your styling e.g. use hover effects or animations

#### Super Potential Extra Tic Tac Toe Features

- Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.

## README Suggestions

- List technologies used
- Link to wireframes and user stories.
- Document your planning and tell a story about your development process and problem-solving strategy.
- List unsolved problems which would be fixed in future iterations.
- Describe how you solved for the winner
- Describe how some of your favorite functions work

## Necessary Deliverables
* Projects are due on Thursday, Feb 6 at 9 AM!

- A **working game, built by you**, hosted somewhere on the internet
- A **link to your hosted working game** in the URL section of your Github repository
- A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the _very beginning of the project_
- **A `README.md` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, any other useful information etc.
- A **5 minute presentation** in which you answer the following questions:
  - What is the game about?
  - Is there any information you think might help us understand what you built?
  - What features did you include?
    - Make sure to explain anything "new" (things that we didn't cover in class)
  - What was the most difficult part of the project?
  - What was your favorite part to work on?
  - What would you like to add next?
  - Demo of the game

---

## Suggested Ways to Get Started

- **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
- **Use your Developer Tools** (`console.log`, inspector, `alert` statements, etc) to debug and solve problems
  - Some great tutorials for the Developer Tools can be found [here](https://developers.google.com/web/tools/chrome-devtools/)
- Work through the lessons in class, **ask questions and come to office hours** when you need to. Think about adding relevant code to your Tic Tac Toe game each day, instead of, you know... _procrastinating_.
- **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
- **Check out Tutorial and Documentation resources** at home to better understand what you’ll be getting into.
- **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

1.  Create a repository on github.com for your project
2.  Clone it to the projects folder on your computer
3.  Add an HTML, CSS, and JS file to the folder
4.  Connect the CSS and JS file to your HTML file and test that they all work
5.  Build the most basic version of your Tic Tac Toe board in HTML and CSS (very little styling, just a first version)
6.  Write the pseudocode for the Tic Tac Toe logic as comments in your JS file
7.  Choose the correct data type for how your Tic Tac Toe board should be represented in JS
8.  Add jQuery to your HTML file if you would like to use it instead of vanilla JavScript.
9.  Begin working on the [user stories](https://github.com/sei-entropy/lesson-w02d05-wireframes#what-is-a-user-story), 1 at a time
10.  Deploy your application to GitHub pages
---

## Useful Resources

- **[MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla JavaScript)_
- **[DevDocs](https://devdocs.io/)**
- **[jQuery Docs](http://api.jquery.com)**
- **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
- **[GitHub Markdown Tutorial](https://guides.github.com/features/mastering-markdown/)** _(for working with Markdown)_

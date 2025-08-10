# Title
RAIQA HEALTH Assignment 

## Objective
A simple React application that allows users to increment/decrement a counter, add values to a list, and sort the list in ascending or descending order.

## Demo

Link: https://raiqa-health-assignment-one.vercel.app

## Tech Stack
HTML, CSS, JS, React, React Hooks, useState for state management, React Router, Vite, Github, and vercel for hosting the repository.

### Functionality
1. Counter Functionality 
* Displays a count starting from 0.
* Increment (+) button: Increases the count by 1 each time it is clicked.
* Decrement (-) button: Decreases the count by 1 but will not go below 0 (prevents negative values).
* Add button: Adds the current count to a list, but only if:
    The count is greater than 0.
    The count is not already present in the list (prevents duplicates).

2. List Display 
* Displays all counts added using the Add button in a list format.
* No duplicates allowed — if the number is already in the list, it will not be added again.
* The list is saved in localStorage, so it will remain even after refreshing the page or reopening the browser.

3. Sorting Feature  
* A Sort button toggles the list order:
    Ascending order (smallest to largest)
    Descending order (largest to smallest)
* Each time you toggle the sort, the list updates in real-time to reflect the new order.

4. Reset Feature
* Reset button:
    Clears the entire list.
    Resets the count back to 0.

## Setup Instructions
1. Create Project Directory: mkdir raiqa_health_assignment
2. Navigate to that folder: cd raiqa_health_assignment
3. Run this command: npm create vite@latest . -- --template react
4. Install the necessary dependencies: npm install react-router-dom@5 react-icons
5. Run the dev server: npm run dev   
   
## push the code to Git using the following commands
* git init
* git remote add origin https://github.com/Haripriya866/Raiqa-Health-Assignment.git
* git add -A
* git commit -m "Raiqa Health"
* git branch -M main
* git push -u origin main

## Deployment
Choose a Platform: Select a deployment platform like Vercel

## Pages
Counter page

## Third party packages
react-icons
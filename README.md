# HTML-Structure-and-Basic-Server-Interaction
Server Side Rendering using Node.js

Objective

To introduce the concept of server-side rendering and basic form submission using Node.js, Express, and EJS.

Technologies Used

Node.js

Express.js

EJS (Embedded JavaScript Templates)

HTML

CSS

Visual Studio Code

Project Structure
task1/
│── package.json
│── server.js
│── README.md
│
├── views/
│   └── index.ejs
│
└── public/
    └── style.css

Project Description

This project demonstrates a simple web application where:

A user enters their name in a form

The form data is sent to the server

The server processes the data

A dynamic HTML response is generated using EJS

The page is rendered on the server side, not in the browser.

How to Run the Project (VS Code)
Step 1: Install Node.js

Download and install Node.js from:

https://nodejs.org


Check installation:

node -v
npm -v

Step 2: Open Project in VS Code

Open Visual Studio Code

Click File → Open Folder

Select the task1 folder

Step 3: Open Terminal in VS Code

Click:

Terminal → New Terminal


Make sure the path ends with:

task1>

Step 4: Install Dependencies

Run:

npm install


This will create a node_modules folder.

Step 5: Start the Server

Run:

npm start


You should see:

Server running on http://localhost:3000

Step 6: Open in Browser

Open any browser and go to:

http://localhost:3000

Output

A web page with a form appears

User enters a name and clicks submit

Server responds with:

Hello, <username>


HTML is dynamically generated using EJS

Learning Outcomes

Creating an Express server

Handling GET and POST requests

Using EJS for server-side rendering

Understanding basic project structure in Node.js

Conclusion

This task provides a beginner-friendly introduction to server-side rendering and form handling using Node.js and Express.

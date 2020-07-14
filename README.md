## About this project
**NCReddit** is a news aggregation web application build with React. It is a fully responsive app which provides a list of articles, comments and users.

The project can be accessed from the link here: https://github.com/aniketbadole/fe-nc-news

The users can read all articles, comments and vote on any article or comment. In order to post a new comment, user will need to log in to the website. By default, user is logged in by the username *jessjelly*. User can delete their own comments. The complete list of all users is given below:

- jessjelly
- tickle122
- grumpy19
- happyamy2016
- cooljmessy
- weegembump

## Repositories
The back end API for this project can be accessed here:
- On GitHub: https://github.com/aniketbadole/be-nc-news
- On Heroku: https://aniket-nc-news.herokuapp.com/api/

## Prerequisites
This application was build in Javascript and uses the following technologies:

**Back End:**
- Node.js
- Express
- PostgreSQL
- Mocha
- Chai
- SuperTest
- Nodemon

**Front End:**
- React (create-react-app)
- Jest
- JSX
- HTML5, CSS3
- Flexbox / Grid
- Axios
- Link / Router

## Installation
We recommend using Visual Studio Code editor to edit/read the code. To run the project, you will need the following tools:
- Node.js
- Node Package Manager (npm)
- GitHub account (to fork and clone the repository)

Once you have all of the prerequisites, **fork** the repository by navigating to the repository GitHub page. Once forked, GitHub will redirect you to your own repository. Now you can **Clone or Download** it. Copy the link to your repository (it should end with .git)

Open **terminal** and navigate to the directory where you would like to download your repository and then run this command:

<code>git clone &lt;your repository url&gt;</code>

Make sure you replace &lt;your repository url&gt; with your own repository link.

Now, install dependencies required for this project using the following command:

<code>npm install</code>

## File structure
The front end project is separated in various Functional and Class based React components. Most of these files are inside the components folder. In the root directory of the project, you will find `App.jsx`.

The `App.jsx` file contains the app itself, including the header, nav bar, all routes and the footer. All of the files, functions, classes and variables have been named as per the standard programming naming convention for the ease of understanding.

All of the functional and class based components are located in the components folder.

The main style sheet `App.css` is located in the root directory of the project. Page specific styling can be accessed from `components/css` folder. This project is fully responsive and can be viewed on a mobile device. To achieve responsiveness, `Flexbox` and `Grid styling` has been used. No external CSS framework or stylesheet has been used for this project.

## Starting the project
To start the project locally, open your terminal and make sure you are in the project folder. Make sure all the dependencies are installed and then run the following command:

<code>npm start</code>

The app should now open in your browser with the url `localhost:3000`. Any changes you make in the code will automatically show on the webpage as long as the development environment is running. If you wish to exit the dev environment, simply press **Ctrl + C** on Linux or **command + C** on Mac.

## Author
#### Aniket Badole
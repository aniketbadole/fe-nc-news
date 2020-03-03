import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  render() {
    return (
      <main className="home-main-container">
        <h1 className="home-heading">Welcome to NC Reddit</h1>
        <aside className="home-sidebar">
          Table of Contents
          <hr className="style-one" />
          <ol>
            <li>
              <a href="#about">About this project</a>
            </li>
            <li>
              <a href="#prerequisites">Prerequisites</a>
            </li>
            <li>
              <a href="#installation">Installation</a>
            </li>
            <li>
              <a href="#file-structure">File structure</a>
            </li>
            <li>Five</li>
            <li>Six</li>
          </ol>
        </aside>
        <div className="home-main-content">
          <h3 id="about">About this project</h3>
          <p>
            NCReddit is a news aggregation web application build with React. It
            is a fully responsive app which provides a list of articles,
            comments and users.
          </p>
          <p>
            The project can be accessed from the link here:{" "}
            <a href="https://github.com">NCReddit - A React app</a>
          </p>
          <p>
            The users can read all articles, comments and vote on any article or
            comment. In order to post a new comment, user will need to log in to
            the website. By default, user is logged in by the username{" "}
            <var>jessjelly</var>. User can delete their own comments. The
            complete list of all users is given below:
            <ul>
              <li>jessjelly</li>
              <li>tickle122</li>
              <li>grumpy19</li>
              <li>happyamy2016</li>
              <li>cooljmessy</li>
              <li>weegembump</li>
            </ul>
          </p>
          <h3>Repositories</h3>
          <p>
            The back end API for this project can be accessed here:
            <ul>
              <li>
                On GitHub:{" "}
                <a href="https://github.com/aniketbadole/be-nc-news">
                  https://github.com/aniketbadole/be-nc-news
                </a>
              </li>
              <li>
                On Heroku:{" "}
                <a href="https://aniket-nc-news.herokuapp.com/api/">
                  https://aniket-nc-news.herokuapp.com/api/
                </a>
              </li>
            </ul>
          </p>
          <h3 id="prerequisites">Prerequisites</h3>
          <p>
            This application was build in Javascript and uses the following
            technologies:
            <ul>
              <strong>Back End:</strong>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>SuperTest</li>
              <li>Nodemon</li>
            </ul>
            <ul>
              <strong>Front End:</strong>
              <li>React (create-react-app)</li>
              <li>Jest</li>
              <li>JSX</li>
              <li>HTML5, CSS3</li>
              <li>Flexbox / Grid</li>
              <li>Axios</li>
              <li>Link / Router</li>
            </ul>
          </p>
          <h3 id="installation">Installation</h3>
          <p>
            We recommend using Visual Studio Code editor to edit/read the code.
            To run the project, you will need the following tools:{" "}
            <ul>
              <li>Node.js</li>
              <li>Node Package Manager (npm)</li>
              <li>GitHub account (to fork and clone the repository)</li>
            </ul>
          </p>
          <p>
            Once you have all of the prerequisites, <strong>fork</strong> the
            repository by navigating to the repository GitHub page. Once forked,
            GitHub will redirect you to your own repository. Now you can{" "}
            <strong>Clone or Download</strong> it. Copy the link to your
            repository (it should end with <var>.git</var>)
          </p>
          <p>
            Open <strong>terminal</strong> and navigate to the directory where
            you would like to download your repository and then run this
            command:
          </p>
          <span className="code">git clone &lt;your repository url&gt;</span>
          <p>
            Make sure you replace &lt;your repository url&gt; with your own
            repository link.
          </p>
          <p>
            Now, install dependencies required for this project using the
            following command:
          </p>
          <span className="code">npm install</span>
          <h3 id="file-structure">File structure</h3>
          <p>
            The front end project is separated in various Functional and Class
            based React components. Most of these files are inside the{" "}
            <code>components</code> folder. In the root directory of the
            project, you will find <code>App.jsx</code>
          </p>
          <p>
            The <code>App.jsx</code> file contains the app itself, including the
            header, nav bar, all routes and the footer. All of the files,
            functions, classes and variables have been named as per the standard
            programming naming convention for the ease of understanding.
          </p>
          <p>
            All of the functional and class based components are located in the{" "}
            <code>components</code> folder.{" "}
          </p>
          <p>
            The main style sheet <code>App.css</code> is located in the root
            directory of the project. Page specific styling can be accessed from{" "}
            <code>components/css</code> folder. This project is fully responsive
            and can be viewed on a mobile device. To achieve responsiveness,{" "}
            <code>Flexbox</code> and <code>Grid styling</code> has been used. No
            external CSS framework or stylesheet has been used for this project.
          </p>
          <h3 className="run">Starting the project</h3>
          <p>
            To start the project locally, open your terminal and make sure you
            are in the project folder. Make sure all the dependencies are
            installed and then run the following command:
          </p>
          <span className="code">npm start</span>
          <p>
            The app should now open in your browser with the url{" "}
            <code>localhost:3000</code>. Any changes you make in the code will
            automatically show on the webpage as long as the development
            environment is running. If you wish to exit the dev environment,
            simply press <strong>Ctrl + C</strong> on Linux or{" "}
            <strong>command + C</strong> on Mac.
          </p>
          <h3>Author</h3>
          <p>
            <a href="https://github.com/aniketbadole" target="blank">
              Aniket Badole
            </a>
          </p>
        </div>
        <aside className="home-links">
          Useful Links
          <hr className="style-one" />
          <ul>
            <li>
              <a
                href="https://github.com/aniketbadole/fe-nc-news"
                target="blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aniketbadole/fe-nc-news"
                target="blank"
              >
                The frontend repo
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aniketbadole/be-nc-news"
                target="blank"
              >
                The backend repo
              </a>
            </li>
            <li>Online version</li>
            <li>Portfolio</li>
            <li>
              <a href="https://linkedin.com/in/aniketbadole" target="blank">
                LinkedIn
              </a>
            </li>
            <li>Twitter</li>
          </ul>
        </aside>
      </main>
    );
  }
}

export default Home;

# react-todos
This will house the code for the Intro To React workshop at HackWITus 2019 where we will be building a basic full-stack todos app with a working mock backend utilizing json-server to handle api routes.

# User Guide

## JSON-Server Implementation
- We chose to use the npm package [json-server](https://github.com/typicode/json-server) for our todo application's backend because it simplifies the process of creating persistant storage on refresh without having to setup a database, routes, and controllers, or using browser storage such as local storage.
- Json-server allows us to practically teach asynchronous front-end code without having to teach the logic behind the other end of the request.

## Running the Server
- To run the server, once you have cloned down the repo, first open a terminal and run `cd /server`
- Next install npm depencencies with the command `npm install`
- Once you've installed your dependencies, you can run the server with `npm start`
- This command will launch json server with `json-server --watch db.json --port 8080` creating a mock api which will use the `db.json` file as the persistent store in place of a database or browser storage.
- To see all the usable routes/queries/etc. [checkout json-server on github](https://github.com/typicode/json-server)

## Running the Client
- Similar to the backend the front-end also runs on node, with React as the framework.
- To start, open a terminal in the root directory and run `cd client`, if you are still in the server folder you can also run `cd ../client` to get into the folder.
- Now to install dependencies run `npm install` in the client directory.
- Finally we need to run the development server with the same command we used to run the backend `npm start`.
- The above command will run `react-scripts start` which compiles all of the React JSX code into plain js, css and html and serves it at `http://localhost:3000` using the package `webpack`

Once we have done all the above steps, both our backend server and our client frontend are running and communicating with eachother. 

*Happy Hacking*

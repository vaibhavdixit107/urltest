## System Requirements
This setup assumes that the machine has mongodb, nodejs installed.

To install the mongodb use this link [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/]
To install the nodejs use this link [https://nodejs.org/en/download]

To run the app, please make sure these ports are available to use. The app uses port 3000 for the client and port 5000 for the server.
## Available Scripts

In the project directory, there are two parts: Client(ReactJS App) and server(NodeJS and MongoDB for the Database)

To run this project, follow the following steps:

To run the server, use these following commands

### cd server
### npm install
### npm start

To run the client, use these following commands

### cd client
### npm install
### npm start



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The server will use port 5000 to run.

## Technologies Used
ReactJS
Material UI
NodeJS
Express
MongoDB

## Notes
The frontend validates the input using the validator package. Currently it only supports HTTP, HTTPS, FTP for the scheme. This can be extended to validate URI also.

The backend has been intentionally kept simple. Currently it generates a random short string for each URL and saves the mapping to mongodb. It takes care of de-duplication by querying DB.

Following things will help to make this a production ready software.
1. Adding caching on the backend(eg. Redis)
2. Adding analytics
3. Allowing users to choose custom short URL

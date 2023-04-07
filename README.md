Client Management App
=====================

This is a React-based web application that allows you to manage a list of clients. You can add and modify client information using this app. The app also includes a local storage feature for persistent data storage.

Installation
------------

To run this application on your local machine, please follow these steps:

1.  Clone the repository to your local machine.
2.  Install the necessary dependencies by running `npm install`.
3.  Start the application by running `npm start`.

Usage
-----

Once the application is running, you can run npm run dev to start in yout local machine. The home page will display a list of all clients that are currently stored in the app. You can add a new client by clicking the "Create Client" button, which will take you to a form where you can enter the client's information, this part is not builded yet.

To modify or delete an existing client, click on their card in the client list. This will take you to a page where you can view and edit their information.

Local Storage
-------------

This app uses local storage to persist client data between sessions. When you add, modify, or delete a client, the changes will be saved in a database. The next time you open the app, the client list will be loaded from local storage.

Technologies Used
-----------------

This app was built using the following technologies:

-   React.js
-   TypeScript
-   Vite
-   React Router DOM
-   JWT

Contributing
------------

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. We welcome all contributions, including bug fixes, feature additions, and documentation improvements.

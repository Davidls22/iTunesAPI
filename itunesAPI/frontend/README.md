
iTunes Search App

Description
This is a web application that allows users to search for music, movies, TV shows, and more from the iTunes Store using the iTunes Search API. Users can search by keyword and filter the results by media type. They can also add items to their favourites list and remove items from it.

This project is built using React for the front-end and Express.js for the back-end.

Installation
To install and run the application, follow these steps:

Clone the repository to your local machine using the following command:
git clone https://github.com/Davidls22/iTunesAPI.git

Change into the project directory:
cd itunesAPI

Install the dependencies for the back-end:
cd Backend
npm install

Start the back-end server:
npm start

In a new terminal window, install the dependencies for the front-end:
cd itunesAPI
cd frontend
npm install

Start the front-end server:
npm start

Open your web browser and go to http://localhost:3000 to view the application.


How to Use

Enter a search term in the search bar and select a media type from the dropdown menu.
Click the search button to retrieve the search results.
Click add to favourites to add it to your favourites list.
The favourites list is at the bottom of the page.
To remove an item from your favourites list, click the "Remove" button next to it.

Security

The following security measures have been taken to ensure the security of this application:

The back-end code uses the cors middleware to restrict access to the API to only authorized domains.
It uses the body-parser middleware to parse incoming request bodies.
It also uses the helmet module to set various security-related HTTP headers.

The front-end code uses the fetch API to send HTTP requests to the back-end, which then sends the requests to the iTunes Search API. 

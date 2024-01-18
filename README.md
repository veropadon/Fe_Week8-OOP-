# Movie Genre Management Application

## Introduction
Welcome to the Movie Genre Management application, a simple, console-based JavaScript application designed for managing movie genres and the movies within them. This application demonstrates basic CRUD functionalities and showcases object-oriented programming principles in JavaScript.

## Classes Overview
The application is structured around three main classes:

### `Movie`
- **Purpose**: Represents individual movies.
- **Properties**:
  - `title`: The title of the movie.
  - `description`: A brief description of the movie.
- **Methods**:
  - `describe()`: Outputs a string that combines the title and description of the movie.

### `Genre`
- **Purpose**: Represents a movie genre, capable of storing multiple movies.
- **Properties**:
  - `name`: The name of the genre.
  - `movies`: An array to hold instances of `Movie`.
- **Methods**:
  - `addMovie(movie)`: Adds a `Movie` instance to the genre.
  - `describe()`: Outputs the number of movies in the genre.

### `Menu`
- **Purpose**: Serves as the user interface of the application, allowing interaction through a console-based menu.
- **Properties**:
  - `genres`: An array to store different genres.
  - `selectedGenre`: Holds the genre currently selected by the user.
- **Methods**:
  - `start()`: Initiates the application.
  - `showMainMenuOptions()`: Displays the main menu options to the user.
  - `createGenre()`, `viewGenre()`, `deleteGenre()`, `displayGenre()`: Functions to manage genres.
  - `createMovie()`, `deleteMovie()`: Functions to manage movies within a selected genre.

## Demonstration
To demonstrate the functionality of the application, you can follow these steps:
1. Create a genre.
2. Add a movie to the genre.
3. View the genre and its movies.
4. Delete a movie from the genre.

## Conclusion
This Movie Genre Management application is a simple yet functional demonstration of object-oriented programming in JavaScript. It provides a basic structure that can be expanded and customized for more complex needs. Feel free to fork, modify, and use the code in your projects!



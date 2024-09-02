# TheMovieDB React Native App

## Description

This is a mobile application developed in React Native that uses the [TheMovieDB](https://www.themoviedb.org/) API to display movie posters. The app categorizes movies into three categories: **Most Popular**, **Top Rated**, and **Upcomming**. Users can click on any movie poster to view a brief description of the movie along with a list of the main actors. The app also utilizes design patterns like Mappers and Entities, an intuitive navigation system, and a fullscreen loader to enhance the user experience.

## Features

- **Movie Categorization**: Displays movies by categories: Most Popular, Top Rated, and Latest Releases.
- **Movie Details**: Shows detailed information about the selected movie, including its synopsis and actors.
- **Movie Carousel**: Horizontal carousel with InfiniteScroll to browse through movies.
- **Loading Screen**: Fullscreen loader while fetching data.
- **Design Patterns**: Use of Mappers and Entities patterns for code structure.
- **Environment Variables**: Configuration of TheMovieDB API Key through environment variables.

## Screen Navigation
   Navigation is managed using the @react-navigation/native package. The main flow includes the following screens:
   - **HomeScreen**: Displays movie categories in horizontal carousels.
   - **MovieDetailsScreen**: Shows detailed information about a selected movie, including its synopsis and actors (horizontal FlatList).

## Design Patterns
   - **Mapper Pattern**: The Mapper pattern is used to transform data fetched from the API into entities that are used within the application.
    - **Entity  Pattern**: The Entity pattern encapsulates specific data and behaviors of a movie.

## App Visualization
   - **Movie Carousel**: The movie carousel is implemented using a horizontal FlatList without additional dependencies, supporting InfiniteScroll.
   - **Fullscreen Loader**:  component displays a loading indicator while data is being fetched.

## Requirements

- Node.js >= 14.x
- npm or yarn
- React Native CLI
- API Key from [TheMovieDB](https://www.themoviedb.org/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/themoviedb-react-native-app.git
    cd themoviedb-react-native-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

   Create a `.env` file at the root of the project with the following configuration:

    ```env
    TMDB_API_KEY=your_api_key_here
    ```

4. **Run the application:**

    ```bash
    npx react-native run-android
    # or
    npx react-native run-ios
    ```



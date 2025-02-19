# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description

This project is a movie search application built with React and Vite. It uses TMDB's API to fetch movie data and Appwrite to store search counts. The application features an optimized search functionality with debouncing to improve performance and reduce unnecessary API calls. The search counts are stored in a database to display trending movies based on user searches.

## Features

- Fetches movie data using TMDB's API
- Optimized search with debouncing state
- Stores search counts using Appwrite to show trending movies

## Setup

1. **TMDB API**: 
   - Sign up at [TMDB](https://www.themoviedb.org/) to get your API key.
   - Create a `.env` file in the root of your project and add your API key:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

2. **Appwrite**:
   - Set up an Appwrite server by following the [Appwrite Getting Started Guide](https://appwrite.io/docs/getting-started-for-self-hosting).
   - Create a database and add a collection to store search counts.
   - Add your Appwrite credentials to the `.env` file:
     ```
     VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     VITE_APPWRITE_API_KEY=your_api_key
     ```

## Implementation Details

### TMDB API Integration

The project fetches movie data from TMDB's API. The API key is stored in the `.env` file and accessed via environment variables.

### Optimized Search with Debouncing

The search functionality is optimized using a debouncing state to minimize API calls and improve performance. This ensures that the API is called only after the user has stopped typing for a specified duration.

### Appwrite Integration

Appwrite is used to create a database and store search counts. This data is then used to display trending movies based on the number of searches.

## Running the Project

To run the project, use the following commands:

```bash
npm install
npm run dev
```

This will start the development server and you can view the application in your browser.

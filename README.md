# GitHub User Explorer

GitHub User Explorer is a simple React application that lets you search for a GitHub username and view public profile details along with that user's public repositories.

The project is built as a frontend practice app using React, Vite, Tailwind CSS, Zustand, and the GitHub REST API through Octokit.

## Features

- Search for a GitHub username
- Fetch public GitHub user profile data
- Fetch public repositories for the searched user
- Display profile information such as name, bio, followers, following, and public repository count
- Show repository cards with name, description, last updated date, language, and star count
- Manage app state with Zustand
- Persist selected state with Zustand middleware

## Tech Stack

- React
- Vite
- Tailwind CSS
- Zustand
- Octokit
- ESLint

## How It Works

1. The user enters a GitHub username in the search bar.
2. Clicking the search button triggers API requests for:
   - the user's public profile
   - the user's public repositories
3. The fetched data is stored in the global Zustand store.
4. Components read from the store and render the user overview and repository list.

## Project Structure

```text
src/
  assets/              Static images and icons
  components/
    atoms/             Small UI pieces like buttons, counters, and inputs
    molecules/         Combined UI blocks like Navbar and UserCard
    organism/          Larger sections like UserSection and RepositorySection
  Data/
    globalStore.js     Zustand global store
    mockData.js        Local mock user data used during development
  utils/
    fetchGithubData.js Fetches GitHub user profile data
    fetchRepoData.js   Fetches GitHub repository data
    addUserData.js     Helper utility
  App.jsx              Main application layout
  main.jsx             App entry point
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## State Management

The app uses Zustand for global state management. The main store currently tracks:

- `userInfo`
- `userInput`
- `userRepoInfo`

This helps keep the search flow and rendered UI in sync across components.

## API Notes

- The app uses public GitHub data.
- A GitHub token is not required for basic public profile and repository lookups.
- For production apps, sensitive tokens should never be stored in frontend code.
- If higher rate limits or private data access are needed, a backend or serverless function should be used.

## Current UI Sections

- Navbar with search input and search button
- User overview section
- Repository list section

## Future Improvements

- Loading and error states for API requests
- Better empty-state messaging
- Pagination or sorting for repositories
- Filtering repositories by language
- Responsive UI polish
- Serverless proxy for secure authenticated GitHub requests if needed

## Learning Goals Behind This Project

This project is useful for practicing:

- React component architecture
- Zustand state management
- API integration with async JavaScript
- Conditional rendering
- Tailwind CSS styling
- Structuring a frontend app into atoms, molecules, and organisms

## Author

Built by Anubhav Baghel.

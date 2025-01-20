# Vite React TypeScript Project

This is a React project setup using **Vite** and **TypeScript** for learning purposes. The project is initialized with
the latest versions of dependencies, providing a modern, fast, and optimized environment for development.

## Table of Contents

- [Project Setup](#project-setup)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

This project was created using **Vite** and **TypeScript** for rapid React development. The setup process was as
follows:

1. **Created the Vite project** using the latest Vite template for React and TypeScript:
    ```bash
    npm create vite@latest vite-react-ts-project
    ```

2. **Navigated to the project directory**:
    ```bash
    cd vite-react-ts-project
    ```

3. **Installed dependencies**:
    ```bash
    npm install
    ```

4. **Checked for latest versions of dependencies** using **`npm-check-updates (ncu)`**:
    ```bash
    ncu
    ```

5. **Updated all dependencies to their latest versions**:
    ```bash
    ncu -u
    ```

6. **Installed the updated dependencies**:
    ```bash
    npm install
    ```

Now you're all set up to start learning and building with React, TypeScript, and Vite!

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository** (if you haven’t already):
    ```bash
    git clone https://github.com/schinnappa/vite-react-ts-project.git
    cd vite-react-ts-project
    ```

2. **Install dependencies** (if you haven't installed them yet):
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

   This will start the Vite development server, and you can open the app in your browser
   at [http://localhost:5173](http://localhost:5173).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server and opens the app in the browser at [http://localhost:5173](http://localhost:5173). The
page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the
build for the best performance.

### `npm run preview`

Serves the production build locally to preview the app after a build.

## Dependencies

This project includes the following dependencies:

- **React**: JavaScript library for building user interfaces.
- **React DOM**: For DOM rendering of React components.
- **TypeScript**: Adds static typing to JavaScript, improving developer experience.
- **Vite**: A fast, modern build tool for faster development with hot module replacement.
- **npm-check-updates (ncu)**: Used for checking and updating the latest versions of dependencies.
- **Other useful dependencies** might include:
    - **react-router-dom**: For handling client-side routing.
    - **react-query**: For making HTTP requests.
    - **prettier**: Code formatting.
    - **eslint**: Code linting.
    - **husky**: For running scripts before commits. 
    - **Material UI (MUI)**: A popular React UI framework that provides a set of accessible, customizable, and responsive
        components.

## Project Structure

Here’s an overview of the folder structure for the project: TODO

## Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
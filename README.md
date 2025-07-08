# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


///////////////////////////////////////////// Forlder Structure \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
my‑website/
│
├─ public/                     # Static assets copied to the final build verbatim
│  ├─ index.html               # The single entry HTML
│  └─ favicon.svg
│
├─ src/
│  ├─ assets/                  # **All images, video, PDF, etc. live here**
│  │  ├─ images/
│  │  ├─ icons/
│  │  └─ fonts/
│  │
│  ├─ components/              # Truly reusable, presentation‑only pieces
│  │  ├─ Header/
│  │  │  ├─ Header.tsx
│  │  │  ├─ NavLink.tsx
│  │  │  └─ Header.module.scss
│  │  ├─ Footer/
│  │  │  ├─ Footer.tsx
│  │  │  └─ Footer.module.scss
│  │  └─ …                     # Button, Card, etc.
│  │
│  ├─ layouts/                 # Route‑level skeletons (Header + Outlet + Footer)
│  │  └─ MainLayout.tsx
│  │
│  ├─ pages/                   # One folder per **route** (lazy‑loaded chunks)
│  │  ├─ Home/
│  │  │  └─ Home.tsx
│  │  ├─ ContactUs/
│  │  │  └─ ContactUs.tsx
│  │  └─ Features/
│  │     └─ Features.tsx
│  │
│  ├─ routes/                  # All <Route> definitions, split out for clarity
│  │  └─ AppRoutes.tsx
│  │
│  ├─ context/                 # React Contexts + providers (e.g., Theme, Auth)
│  │  └─ ThemeProvider.tsx
│  │
│  ├─ hooks/                   # Reusable custom hooks
│  │  └─ useWindowSize.ts
│  │
│  ├─ utils/                   # Pure utility helpers/constants
│  │  └─ constants.ts
│  │
│  ├─ styles/                  # Global styles, variables, resets
│  │  ├─ _variables.scss
│  │  └─ globals.scss
│  │
│  ├─ App.tsx                  # Root component: mounts MainLayout + routes
│  └─ main.tsx                 # Vite/ReactDOM bootstrap
│
|
├─ package.json
└─ README.md

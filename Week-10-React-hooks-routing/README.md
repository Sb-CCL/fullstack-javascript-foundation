## useEffect

#### When to use:

- Fetch data from an API
- Update the DOM
- Set up timers/subscriptions

#### How it works:

- Runs after every render by default
- Control when it runs using a dependency array

```js
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  // Like a "setup" that runs once when component loads
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // <-- Empty array = run once

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### Key Points:

- `[]` = Run once (like component mount)
- No array = Run after every render
- `[variable]` = Run when variable changes

## React Router

Create a multi-page app with navigation by installing `npm install react-router-dom`.

#### Routes in `main.jsx`

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

#### Navigation in `Home.jsx`

```js
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/about">About Page</Link> {/* Like <a> but no page reload */}
    </div>
  );
}
```

#### Error Handling by creating `ErrorPage.jsx`

```jsx
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
```

```jsx
{ path: "/", element: <Home />, errorElement: <ErrorPage /> }
```

## localStorage

Browser storage that persists even after closing the browser.

#### Basic Usage

```jsx
// Save data
localStorage.setItem("theme", "dark");

// Get data
const theme = localStorage.getItem("theme"); // Returns 'dark'

// Remove data
localStorage.removeItem("theme");
```

#### Save User Preference

```jsx
function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Read saved theme on initial load
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    // Save theme when it changes
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Switch to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}
```

#### Important Notes:

- Stores only strings (use JSON.stringify() for objects)
- useEffect here ensures the theme is saved automatically
- Initial state reads from localStorage using a function

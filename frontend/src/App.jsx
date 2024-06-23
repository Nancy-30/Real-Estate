import Listpage from "./pages/ListPage/Listpage";
import HomePage from "./pages/homePage/HomePage"
import Layout from "./pages/layout/Layout";
import "./pages/layout/Layout.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Single from "./pages/singlePage/Single";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewPost from "./pages/NewPost/NewPost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/list",
          element: <Listpage />
        },
        {
          path: "/:id",
          element: <Single />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/newpost",
          element: <NewPost />
        },
      ]
    },

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
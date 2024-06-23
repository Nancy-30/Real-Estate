import Listpage from "./pages/ListPage/Listpage";
import HomePage from "./pages/homePage/HomePage"
import Layout from "./pages/layout/Layout";
import "./pages/layout/Layout.scss"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Single from "./pages/singlePage/Single";
import Profile from "./pages/Profile/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
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
      ]
    },

  ])
  return (


    <RouterProvider router={router} />
  )
}

export default App
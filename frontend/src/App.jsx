import Listpage from "./pages/ListPage/Listpage";
import HomePage from "./pages/homePage/HomePage"
import Layout from "./pages/layout/Layout";
import "./pages/layout/Layout.scss"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Single from "./pages/singlePage/Single";
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
      ]
    },

  ])
  return (


    <RouterProvider router={router} />
  )
}

export default App
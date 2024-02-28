import { createBrowserRouter } from "react-router-dom";
import DashbordLyout from "./dashbord/DashbordLyout.jsx";
import AddFlower from "./dashbord/components/AddFlower.jsx";
import App from "./App.jsx";
import EditFlower from "./dashbord/components/EditFlower.jsx";
import ManageFlowers from "./dashbord/components/ManageFlowers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashbord",
    element: <DashbordLyout />,
    children: [
      {
        path: "/dashbord/addflower",
        element: <AddFlower />,
      },
      {
        path: "/dashbord/editflower/:id",
        element: <EditFlower />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/api/flowers/${params.id}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error("Failed to fetch flower data");
              }
              return res.json();
            })
            .catch((error) => {
              console.error("Error fetching flower data:", error);
              return null; // Return null in case of error
            }),
      },
      {
        path: "/dashbord/manageflower",
        element: <ManageFlowers />,
      },
    ],
  },
]);

export default router;

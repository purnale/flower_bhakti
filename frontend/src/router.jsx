import { createBrowserRouter } from "react-router-dom";
import DashbordLyout from "./dashbord/DashbordLyout.jsx";
import AddFlower from "./dashbord/components/AddFlower.jsx";
import App from "./App.jsx";
import EditFlower from "./dashbord/components/EditFlower.jsx";
import ManageFlowers from "./dashbord/components/ManageFlowers.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContaactPage from "./pages/ContaactPage.jsx";
// import ProductDetails from "./productDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/productpage",
        element: <ProductPage />,
      },
      {
        path: "/contactpage",
        element: <ContaactPage />,
      },
    ],
  },
  // {
  //   path: "/product",
  //   element: <ProductDetails />,
  // },
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

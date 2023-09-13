import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { value } from "./utils/mockData";
import { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Introduction from "./components/paths/Introduction";
import Who from "./components/paths/Who";
import What from "./components/paths/What";

function App() {
  const [data, setData] = useState(null);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Introduction data={data} />,
    },
    {
      path: "/who",
      element: <Who data={data} />,
    },
    {
      path: "/what",
      element: <What data={data} />,
    },
  ]);
  // Simulating a fetch request with a promise
  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value);
        }, 1000); // Simulate a delay
      });
    };

    fetchData()
      .then((response) => {
        // Updating the state with the fetched data
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;

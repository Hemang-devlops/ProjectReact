import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { value } from "./utils/mockData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a fetch request with a promise
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value);
        }, 1000); // Simulate a delay
      });
    };

    fetchData()
      .then((response) => {
        // Update the state with the fetched data
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <NavBar data={data} />
      <Footer />
    </div>
  );
}

export default App;

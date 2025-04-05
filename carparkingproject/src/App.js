import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./AllRoutes/AllRoutes";
import gif from "../src/assets/parkgif.gif";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenGif = localStorage.getItem("hasSeenGif");

    if (!hasSeenGif) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasSeenGif", "true");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
            width: "100%",
          }}
        >
          <img
            src={gif} 
            alt="Loading..."
            style={{ width: "50%", margin: "auto" }}
          />
        </div>
      ) : (
        <div>
          {" "}
          <Navbar />
          <AllRoutes />
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
}

export default App;

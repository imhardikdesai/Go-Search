import Navbar from "./components/Navbar";
import { useState } from "react";
import PathRoutes from "./components/PathRoutes";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
        <div className="dark:bg-gray-800 dark:text-white min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <PathRoutes />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

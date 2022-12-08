import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </>
  );
}

export default App;

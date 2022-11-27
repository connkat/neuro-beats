// import { useState, useEffect } from "react";

import Nav from "./components/Nav";
// import DesktopHome from "./components/DesktopHome";
import MobileHome from "./components/MobileHome";

import "./App.css";

function App() {
  // const [state, setState] = useState({
  //   mobileView: false,
  // });
  // const { mobileView } = state;

  // useEffect(() => {
  //   const setResponsiveness = () => {
  //     return window.innerWidth < 600
  //       ? setState((prevState) => ({ ...prevState, mobileView: true }))
  //       : setState((prevState) => ({ ...prevState, mobileView: false }));
  //   };

  //   setResponsiveness();
  //   window.addEventListener("resize", () => setResponsiveness());

  //   return () => {
  //     window.removeEventListener("resize", () => setResponsiveness());
  //   };
  // }, []);
  return (
    <div className="App">
      <Nav />
      {/* {mobileView ? <MobileHome /> : <DesktopHome />} */}
      <MobileHome />
    </div>
  );
}

export default App;

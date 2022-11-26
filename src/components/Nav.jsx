import { useState, useEffect } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Nav.css";

function Nav() {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="Nav">
   {mobileView ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}

export default Nav;

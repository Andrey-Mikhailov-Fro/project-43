import open from "../../public/menuOpen.svg";
import close from "../../public/menuClose.svg";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Menu() {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const isDescktop =  width >= 1024;

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-header">
          <img alt="logo" src="/logo.svg" />
          <h3 className="menu-company">DiveSea</h3>
        </div>
        <button className="menu-showdown" onClick={() => handleShow()}>
          <img
            key={`${show}`}
            src={show ? close : open}
            alt="menu show"
            className="menu-showdown-icon"
          />
        </button>
        <div className={"menu-content" + (show || isDescktop ? "" : " collapse")}>
          <div className={"menu-links" + (show || isDescktop ? "" : " hidden")}>
            <a href="" className="menu-link">
              DISCOVER
            </a>
            <a href="" className="menu-link">
              CREATORS
            </a>
            <a href="" className="menu-link">
              SELL
            </a>
            <a href="" className="menu-link">
              STATS
            </a>
            <img src="/socials.svg" alt="socials" className="menu-socials" />
          </div>
          <button className={"menu-button" + (show || isDescktop ? "" : " hidden")}>
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

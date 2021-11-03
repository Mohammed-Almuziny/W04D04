import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import "./style.css";

const Nav = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <nav>
      <MdArrowBackIos className="icon" onClick={() => goBack()} />
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/Favorite" className="link">
        Favorite
      </Link>
      <Link to="/About" className="link">
        About
      </Link>
      <Link to="/Contact" className="link">
        Contact
      </Link>
      <Link to="/Cards" className="link">
        Cards
      </Link>
    </nav>
  );
};

export default Nav;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ButtonBlack from "../Buttons/ButtonBlack";
import ButtonPurple from "../Buttons/ButtonPurple";

const Navbar = ({ menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = (sectionId) => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-colorbghero">
      <div className={`text-lg font-bold ${styles.logo}`}>
        <h1 className="">Elixir</h1>
      </div>

      <div className="md:flex items-center">
        <ul className="flex md:ml-[20px]">
          {menuItems.map((item) => (
            <li className="mr-2" key={item.id}>
              <button
                onClick={() => handleMobileMenuToggle(item.id)}
                className="text-gray-800 hover:text-gray-600 md:px-6"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="block cursor-pointer"
          onClick={handleMobileMenuToggle}
        ></div>

        <div className="md:flex float-right">
          <div className="md:mx-4 md:mt-0 mt-2 ml-1">
            <ButtonBlack onClick={handleClickLogin}>
              Login
            </ButtonBlack>
          </div>
          <div className="mt-3 md:mt-0">
            <ButtonPurple onClick={handleClickRegister}>
              Signup
            </ButtonPurple>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar;

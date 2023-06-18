import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ButtonBlack from "../Buttons/ButtonBlack";
import ButtonPurple from "../Buttons/ButtonPurple";

const Navbar = ({ menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!menuItems || !Array.isArray(menuItems)) {
    // Handle case where menuItems prop is missing or not an array
    return <div>No menu items provided.</div>;
  }

  return (
    <nav className="py-4 px-6 bg-colorbghero">
      <div className="flex items-center justify-between">
        <div className={`text-lg font-bold ${styles.logo}`}>
          <h1 className="">Elixir</h1>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block md:ml-4`}
        >
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-gray-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="block md:hidden cursor-pointer"
            onClick={handleMobileMenuToggle}
          >
            {/* <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <ion-icon name="menu-outline"></ion-icon>
              ) : (
                <ion-icon name="close-outline"></ion-icon>
              )}
            </svg> */}
          </div>
          <div className="hidden md:flex">
            <div className="md:mx-4 ">
              <ButtonBlack>Login</ButtonBlack>
            </div>
            <div>
              <ButtonPurple>Signup</ButtonPurple>
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

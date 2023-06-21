import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ButtonBlack from "../Buttons/ButtonBlack";
import ButtonPurple from "../Buttons/ButtonPurple";

const Navbar = ({ menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate= useNavigate();
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!menuItems || !Array.isArray(menuItems)) {
    // Handle case where menuItems prop is missing or not an array
    return <div>No menu items provided.</div>;
  }
  const handleClicklogin=()=>{
    navigate("/login");
  }
  const handleClickRegister=()=>{
    navigate("/register");
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
          <ul className="flex space-x-4 md:ml-[20px]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="text-gray-800 hover:text-gray-600 md:px-6"
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
          {isMobileMenuOpen ? (
            <ion-icon name="menu-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </div>
        <div className="hidden md:flex">
          <div className="md:mx-4 ">
            <ButtonBlack>Login</ButtonBlack>
          </div>
<<<<<<< HEAD
          <div>
            <ButtonPurple>Signup</ButtonPurple>
=======
          <div className="hidden md:flex">
            <div className="md:mx-4 ">
              <ButtonBlack onClick={handleClicklogin}>Login</ButtonBlack>
            </div>
            <div>
              <ButtonPurple onClick={handleClickRegister}>Signup</ButtonPurple>
            </div>
>>>>>>> 289f0345ec52fa3444855c5f45a80aa56d789c7a
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
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ButtonPurple from "../../components/Buttons/ButtonPurple";
import maleDoctor from "../../assets/images/Male_doctor.png";

const Landing = () => {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Services", path: "/services" },
    { id: 3, title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <Navbar menuItems={menuItems} />

      <section id="/" className="bg-colorbghero">
        <div className="flex items-center pt-6 justify-end">
          <div>
            <div className="flex-1 px-8">
              <div>
                <h4 className="font-bold text-sm">EMBRACE A HEALTHY JOURNEY</h4>
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold text-colorbgbutton my-3">
                  Digitalize Your Health
                </h1>
              </div>
              <div className="md:text-md text-sm">
                <p>
                  Elixir is a powerful tool designed to help educational
                  institutions manage the health records of their students,
                  employees, and residents.
                </p>
              </div>
              <div className="mt-4 p-6">
                <ButtonPurple>Book Appointment</ButtonPurple>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-1 md:self-end">
              <img src={maleDoctor} alt="maleDoctor" />
            </div>
          </div>
        </div>
      </section>

      <section id="/services">
  <div className="flex flex-col items-center">
    <div className="py-10">
      <h2 className="text-3xl font-bold">OUR SERVICES</h2>
      <p className="text-lg">Here is a description of our services.</p>
    </div>
    <div className="flex justify-center mt-8">
      <div className="mx-4 bg-gray-200 p-4">
        <h3 className="text-xl font-semibold">PATIENT RECORD</h3>
        <p>
          Efficiently handle patient records and appointments with our comprehensive patient management system. Easily search for specific patient records, create new patient profiles, update existing records, and conveniently view past and upcoming appointments.
        </p>
      </div>
      <div className="mx-4 bg-gray-200 p-4">
        <h3 className="text-xl font-semibold">APPOINTMENT</h3>
        <p>
          Streamline your appointment scheduling process with our intuitive appointment management system. Create new appointments, effortlessly update upcoming appointments, and seamlessly cancel appointments when needed. Stay organized and stay on top of your schedule with the ability to easily view all your appointments in one place.
        </p>
      </div>
      <div className="mx-4 bg-gray-200 p-4">
        <h3 className="text-xl font-semibold">PRESCRIPTION</h3>
        <p>
          Simplify prescription management with our user-friendly system. Create new prescriptions with ease, access and view existing prescriptions, and conveniently update any necessary information. Our platform ensures accurate and efficient prescription management for optimal patient care.
        </p>
      </div>
    </div>
  </div>
</section>


      <section id="/contact">
        <h2>Contact Section</h2>
        {/* Add contact content here */}
      </section>
      <Footer />
    </div>
  );
};

export default Landing;

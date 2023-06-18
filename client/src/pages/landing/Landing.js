import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ButtonPurple from "../../components/Buttons/ButtonPurple";
import maleDoctor from "../../assets/images/Male_doctor.png";
import recordIcon from "../../assets/images/record_favicon.png";
import appointmentIcon from "../../assets/images/appointment_favicon.png";
import prescriptionIcon from "../../assets/images/prescription_favicon.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import iiitmLogo from "../../assets/images/iiitmLogo.jpeg";
import mailbox from "../../assets/images/mailbox_favicon.png"

const Landing = () => {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Services", path: "/services" },
    { id: 3, title: "Contact", path: "/contact" },
  ];

  const services = [
    {
      icon: recordIcon,
      title: "PATIENT RECORD",
      description:
        "Efficiently handle patient records and appointments with our comprehensive patient management system. Easily search for specific patient records, create new patient profiles, update existing records, and conveniently view past and upcoming appointments.",
    },
    {
      icon: appointmentIcon,
      title: "APPOINTMENT",
      description:
        "Streamline your appointment scheduling process with our intuitive appointment management system. Create new appointments, effortlessly update upcoming appointments, and seamlessly cancel appointments when needed. Stay organized and stay on top of your schedule with the ability to easily view all your appointments in one place.",
    },
    {
      icon: prescriptionIcon,
      title: "PRESCRIPTION",
      description:
        "Simplify prescription management with our user-friendly system. Create new prescriptions with ease, access and view existing prescriptions, and conveniently update any necessary information. Our platform ensures accurate and efficient prescription management for optimal patient care.",
    },
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
        <div className="flex flex-col items-center p-4">
          <div className="py-10 items-center text-center">
            <h2 className="text-3xl text-colorbgbutton font-bold p-4">
              OUR SERVICES
            </h2>
            <p className="text-sm text-slate-600">
              Simplify patient management, streamline appointments, and optimize
              prescription processes. Enhance efficiency, accuracy, and patient
              care with our comprehensive software. Experience seamless
              healthcare management with our advanced features.
            </p>
          </div>
          <div className="md:flex justify-center mt-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="/contact">
        <div className="bg-colorcontact">
          <h2 className="text-3xl text-colorbgbutton text-center font-bold p-8">
            CONTACTS US
          </h2>

          <div className="flex items-center justify-cent p-4">
            <div>
              <div className="font-bold px-8 pr-[4rem]">
                <p>
                  ABV-Indian Institute of Information Technology and Management
                  Gwalior (ABV-IIITM), Morena Link Road, Gwalior, Madhya
                  Pradesh, India,474015
                </p>
              </div>
              <div className="flex items-center my-3 p-4">
                <img className="h-10" src={mailbox} alt="mailbox" />
                <p>website@iiitm.ac.in</p>
              </div>
            </div>
            <div className="mr-10 p-2">
              <img className='md:h-[15rem] md:w-[15rem] shadow-2xl mb-8' src={iiitmLogo} alt="iiitmLogo" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;

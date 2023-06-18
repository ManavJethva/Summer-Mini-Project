import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col mx-4 p-4">
        <div className="m-4 bg-gray-200 text-center md:flex justify-center items-center rounded-md shadow-md">
          <div className="flex justify-center md:justify-start">
            <img className="h-10" src={icon} alt={`${title}Icon`} />
          </div>
          <div>
            <h3 className="md:text-lg text-md font-semibold p-3">{title}</h3>
          </div>
        </div>
        <div className="bg-gray-200 p-7 h-full rounded-sm shadow-md">
          <p>{description}</p>
        </div>
      </div>
    );
  };
export default ServiceCard

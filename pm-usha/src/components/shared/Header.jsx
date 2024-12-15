import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTools, faCogs, faTasks } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <header className="flex flex-col justify-center items-center mt-2 w-full px-4 text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-orange-500 uppercase">
          Gondwana University, Gadchiroli
        </h1>
        <p className="text-slate-600 mt-2 mb-3 text-sm md:text-base">
          MIDC Road Complex, Gadchiroli-442605, MH (India)
        </p>
      </header>

      <div className="flex items-center justify-between p-4 border border-slate-300 bg-white mx-4 md:mx-auto md:max-w-7xl rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          PM-USHA Dashboard
        </h2>
        <img
          alt="PM-USHA logo"
          className="h-10 md:h-12"
          src="https://pmusha.education.gov.in/pm-usha/assets/images/PM-UShA.png"
          width="100"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4 md:mx-auto md:max-w-7xl">
        <Card
          bgColor="bg-red-50"
          borderColor="border-red-500"
          ringColor="ring-red-100"
          iconColor="text-red-500"
          icon={faUsers}
          title="Construction"
          description="Details of Infrastructure proposed to be Constructed"
          onClick={() => navigate("/construction")}
        />
        <Card
          bgColor="bg-blue-50"
          borderColor="border-blue-500"
          ringColor="ring-blue-100"
          iconColor="text-blue-500"
          icon={faTools}
          title="Renovation"
          description="Details of Infrastructure proposed to be Renovated"
          onClick={() => navigate("/renovation")}
        />
       
        <Card
          bgColor="bg-green-50"
          borderColor="border-green-500"
          ringColor="ring-green-100"
          iconColor="text-green-500"
          icon={faCogs}
          title="Equipments"
          description="Details of Equipment to be Procured and Installed"
        />
        <Card
          bgColor="bg-orange-50"
          borderColor="border-orange-500"
          ringColor="ring-orange-100"
          iconColor="text-orange-500"
          icon={faTasks}
          title="Soft Components"
          description="Details of various Soft Component Activities"
        />
      </div>
    </div>
  );
};

const Card = ({ bgColor, borderColor, ringColor, iconColor, icon, title, description, onClick }) => {
  return (
    <div
      className={`${bgColor} ${borderColor} ${ringColor} ring-2 border p-4 rounded-lg shadow transition hover:ring-offset-2 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className={`text-2xl mr-2 ${iconColor}`} />
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 mt-2 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default Header;

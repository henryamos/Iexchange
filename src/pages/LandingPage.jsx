import React, { useState } from "react";
import backgroundImg from '../assets/img/zk-passImg.webp'
import Login from "./LoginModal";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Crypto World
        </h1>
        <button
          onClick={openModal}
          className="bg-blueLight text-black py-2 px-6 rounded hover:bg-b transition duration-300"
        >
          Login
        </button>
      </div>
      {showModal && <Login closeModal={closeModal} />}
    </div>
  );
};

export default LandingPage;

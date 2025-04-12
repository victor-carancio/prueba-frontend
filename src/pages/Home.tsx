import { useState } from "react";

import Modal from "../components/modal/Modal";
import Button from "../components/ui/button/Button";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
      {!isModalOpen && <Button text="Abrir modal" onClick={toggleModal} />}
    </>
  );
};

export default Home;

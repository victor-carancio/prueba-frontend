import { useState } from "react";
import EnterpriseForm from "./forms/EnterpriseForm";
import PersonalForm from "./forms/PersonalForm";
import { IoMdClose } from "react-icons/io";
import {
  CloseModal,
  FormHeader,
  FormTitle,
  ModalContainer,
  ModalTab,
} from "./Modal.styles";

interface ModalProps {
  toggleModal: () => void;
}

const Modal = ({ toggleModal }: ModalProps) => {
  const [isEnterpriseActive, setIsEnterpriseActive] = useState(true);

  const handleToggleForm = () => {
    setIsEnterpriseActive(!isEnterpriseActive);
  };

  return (
    <ModalContainer>
      <CloseModal>
        <IoMdClose onClick={toggleModal} />
      </CloseModal>
      <ModalTab>
        <h1>SINCRONIZA TU SII Y AGILIZA TUS OPERACIONES</h1>

        <FormHeader>
          <FormTitle $active={isEnterpriseActive} onClick={handleToggleForm}>
            <span>SII Empresa</span>
          </FormTitle>

          <FormTitle $active={!isEnterpriseActive} onClick={handleToggleForm}>
            <span>SII Personal</span>
          </FormTitle>
          <FormTitle $active={false} $disabled={true}>
            <span></span>
          </FormTitle>
        </FormHeader>
      </ModalTab>
      {isEnterpriseActive ? <EnterpriseForm /> : <PersonalForm />}
    </ModalContainer>
  );
};

export default Modal;

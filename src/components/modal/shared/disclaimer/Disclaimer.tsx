import Button from "../../../ui/button/Button";
import { MdLockOutline } from "react-icons/md";
import {
  ButtonSection,
  DisclaimerContainer,
  DontShowText,
} from "./Disclaimer.styles";

const Disclaimer = () => {
  return (
    <>
      <DisclaimerContainer>
        <div>
          <MdLockOutline />
        </div>

        <p>
          Tus credenciales estarán encriptadas y solo podremos leer información,
          sin realizar ningún cambio. Además en cualquier momento podrás
          desactivarla desde el menú Sincronizaciones
        </p>
      </DisclaimerContainer>
      <ButtonSection>
        <div>
          <Button text="Cerrar" containerSize btnStyle="secondary" />
          <Button text="Sincronizar" containerSize btnType="submit" />
        </div>

        <DontShowText>No volver a mostrar</DontShowText>
      </ButtonSection>
    </>
  );
};

export default Disclaimer;

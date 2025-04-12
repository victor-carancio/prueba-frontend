import {
  FormStyles,
  InputContainer,
  ModalBody,
  ModalText,
} from "./Form.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../ui/inputField/InputField";
import Disclaimer from "../shared/disclaimer/Disclaimer";

interface FormValues {
  rut: string;
  passwordSII: string;
}

const validationSchema = Yup.object({
  rut: Yup.string()
    .required("Este campo es obligatorio")
    .matches(/^\d{7,8}-[kK\d]$/, "Rut inválido, xxxxxxxx-x"),
  passwordSII: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "El largo mínimo es de 8"),
});

const EnterpriseForm = () => {
  const initialValues: FormValues = { rut: "", passwordSII: "" };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    resetForm();
  };
  return (
    <ModalBody>
      <ModalText>
        Vincula tu cuenta del SII Empresa para sincronizar automáticamente tus
        facturas, recibir ofertas en cuanto las emitas y evita requisitos
        adicionales en tus operaciones.
      </ModalText>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyles>
          <InputContainer>
            <InputField name="rut" type="text" label="Rut Empresa" />
            <InputField
              name="passwordSII"
              type="password"
              label="Contraseña SII"
            />
          </InputContainer>
          <Disclaimer />
        </FormStyles>
      </Formik>
    </ModalBody>
  );
};

export default EnterpriseForm;

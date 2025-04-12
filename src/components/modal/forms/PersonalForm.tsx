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
  passwordPersonalSII: string;
}

const validationSchema = Yup.object({
  rut: Yup.string()
    .required("Este campo es obligatorio")
    .matches(/^\d{7,8}-[kK\d]$/, "Rut inválido, xxxxxxxx-x"),
  passwordSII: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "El largo mínimo es de 8"),
  passwordPersonalSII: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "El largo mínimo es de 8"),
});

const PersonalForm = () => {
  const initialValues: FormValues = {
    rut: "",
    passwordSII: "",
    passwordPersonalSII: "",
  };
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
        Vincula tu cuenta SII Personal para sincronizar automáticamente tus
        facturas y recibir ofertas en cuanto las emitas.
      </ModalText>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormStyles>
          <InputContainer>
            <InputField name="rut" type="text" label="Rut Empresa" />
            <InputField
              name="passwordSII"
              type="password"
              label="Contraseña SII"
            />
            <InputField
              name="passwordPersonalSII"
              type="password"
              label="Contraseña Personal SII"
            />
          </InputContainer>

          <Disclaimer />
        </FormStyles>
      </Formik>
    </ModalBody>
  );
};

export default PersonalForm;

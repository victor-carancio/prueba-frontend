import { Field, ErrorMessage } from "formik";
import { InputContainer } from "./InputField.styles";

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
}

const InputField = ({ label, name, type }: InputFieldProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} />
      <div>
        <ErrorMessage name={name} />
      </div>
    </InputContainer>
  );
};

export default InputField;

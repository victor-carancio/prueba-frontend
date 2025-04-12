import { Form } from "formik";
import styled from "styled-components";
import { device } from "../../../styles/media";

const ModalBody = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BasePadding = styled.div`
  padding: 0 12px;
  @media ${device.md} {
    padding: 0 32px;
  }
`;
const ModalText = styled(BasePadding).attrs({ as: "p" })`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const FormStyles = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled(BasePadding)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export { ModalText, FormStyles, ModalBody, InputContainer, BasePadding };

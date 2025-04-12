import styled from "styled-components";
import colors from "../../../styles/colors";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  label {
    color: ${colors.labelFont};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
  div {
    color: red;
    font-size: 12px;
  }
`;
export { InputContainer };

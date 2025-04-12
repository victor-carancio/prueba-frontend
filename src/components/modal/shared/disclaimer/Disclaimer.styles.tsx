import styled from "styled-components";
import colors from "../../../../styles/colors";
import { BasePadding } from "../../forms/Form.styles";
import { device } from "../../../../styles/media";

const DisclaimerContainer = styled(BasePadding)`
  margin: 32px 0 24px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  div {
    width: 24px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${colors.disclaimerFont};
  }
`;

const ButtonSection = styled.div`
  border-top: 1px solid ${colors.buttonSectionBorder};
  height: 154px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${device.md} {
    height: 72px;
    padding: 16px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${device.md} {
      flex-direction: row;
      width: 50%;
      order: 2;
    }
  }
`;

const DontShowText = styled.p`
  cursor: pointer;
  color: ${colors.dontShowFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: underline solid;
  transition: color 100ms ease-in;
  &:hover {
    color: ${colors.disclaimerFont};
  }
`;

export { DontShowText, ButtonSection, DisclaimerContainer };

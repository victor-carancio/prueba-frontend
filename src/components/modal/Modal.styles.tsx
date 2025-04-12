import styled from "styled-components";
import colors from "../../styles/colors";
import { device } from "../../styles/media";

const ModalContainer = styled.div`
  width: 95%;
  width: 343px;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.modalBg};
  border-radius: 16px;
  text-align: left;

  @media ${device.md} {
    width: 600px;
    max-width: 600px;
  }
`;

const CloseModal = styled.div`
  height: 56px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  svg {
    cursor: pointer;
    transition: scale 100ms ease-in;
    &:hover {
      scale: 1.2;
    }
  }
`;

const ModalTab = styled.div`
  padding: 16px 12px 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.md} {
    padding: 16px 32px 0px 32px;
  }
`;
const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

interface FormTitleProps {
  $active: boolean;
  $disabled?: boolean;
}

const FormTitle = styled.div<FormTitleProps>`
  cursor: ${({ $disabled, $active }) =>
    $disabled || $active ? "normal" : "pointer"};
  width: 135px;
  padding: 12px 24px;
  height: 48px;
  border-bottom: ${({ $active }) =>
    $active ? "none" : "1px solid " + colors.modalHeaderBorder};
  border-top: ${({ $active }) =>
    $active ? "1px solid " + colors.modalHeaderBorder : "none"};
  border-left: ${({ $active }) =>
    $active ? "1px solid " + colors.modalHeaderBorder : "none"};
  border-right: ${({ $active }) =>
    $active ? "1px solid " + colors.modalHeaderBorder : "none"};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  &:hover {
    span {
      color: ${({ $disabled, $active }) =>
        $disabled || $active ? colors.titleFont : colors.disclaimerFont};
    }
  }
  span {
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
    letter-spacing: 0.1px;
    white-space: nowrap;
    color: ${({ $active }) =>
      $active ? colors.titleFont : colors.modalHeaderBorder};

    transition: color 100ms ease-in;
  }

  &:last-child {
    width: 100%;
    span {
      white-space: normal;
    }
  }
`;

export { CloseModal, FormHeader, FormTitle, ModalContainer, ModalTab };

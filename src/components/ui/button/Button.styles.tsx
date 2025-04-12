import styled from "styled-components";
import colors from "../../../styles/colors";
import { ButtonStylesTypes } from "./Button";

interface ButtonStylesProps {
  $containerSize?: boolean;
  $btnStyle?: ButtonStylesTypes;
}

const btnStyles = {
  primary: {
    bg: colors.buttonBg,
    font: colors.buttonFont,
    hover: colors.buttonBgHover,
  },
  secondary: {
    bg: colors.buttonFont,
    font: colors.buttonBg,
    hover: colors.bodyBg,
  },
};
const ButtonStyles = styled.button<ButtonStylesProps>`
  width: ${({ $containerSize }) => ($containerSize ? "100%" : "143px")};
  height: 40px;
  padding: 10px 24px;
  background-color: ${({ $btnStyle }) =>
    $btnStyle ? btnStyles[$btnStyle].bg : btnStyles.primary.bg};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ $containerSize }) =>
    $containerSize ? "2px solid " + colors.buttonBg : "none"};
  transition: background-color 200ms ease-in, color 200ms ease-in;

  &:hover {
    border: ${({ $containerSize }) =>
      $containerSize ? "2px solid " + colors.buttonBgHover : "none"};

    background-color: ${colors.buttonBgHover};
    p {
      color: ${colors.buttonFont};
    }
  }
  &::selection {
    border: none;
  }
  p {
    color: ${({ $btnStyle }) =>
      $btnStyle ? btnStyles[$btnStyle].font : btnStyles.primary.font};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
`;

export { ButtonStyles };

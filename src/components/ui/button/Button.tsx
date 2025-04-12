import { ButtonStyles } from "./Button.styles";

export type ButtonStylesTypes = "primary" | "secondary";

interface ButtonProps {
  text: string;
  containerSize?: boolean;
  btnType?: "button" | "submit" | "reset";
  btnStyle?: ButtonStylesTypes;
  onClick?: () => void;
}

const Button = ({
  text,
  containerSize,
  btnType,
  btnStyle,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={btnType ? btnType : "button"}
      $containerSize={containerSize}
      $btnStyle={btnStyle}
      onClick={onClick}
    >
      <p>{text}</p>
    </ButtonStyles>
  );
};

export default Button;

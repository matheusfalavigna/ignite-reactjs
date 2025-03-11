import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant: ButtonVariant;
}

export default function Button({ variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>Button</ButtonContainer>;
}

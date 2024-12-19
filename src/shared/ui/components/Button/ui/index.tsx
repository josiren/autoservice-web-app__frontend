import { StyledButton } from './styled';

type PrimaryButtonProps = {
  onClick?: () => void;
  text: string;
  primary?: boolean;
};

export const Button = ({ onClick, text, primary = false }: PrimaryButtonProps) => {
  return (
    <StyledButton
      primary={primary}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

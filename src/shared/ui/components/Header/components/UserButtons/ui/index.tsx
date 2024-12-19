import { StyledUserButtons } from './styled';
import { Button } from '@/shared/ui/components';

export const UserButtons = () => {
  return (
    <StyledUserButtons>
      <Button
        primary
        text="Вход"
      />
      <Button text="Регистрация" />
    </StyledUserButtons>
  );
};

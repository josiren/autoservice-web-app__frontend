import { Fonts } from '@/shared/ui/styles/fonts/fonts';
import styled from '@emotion/styled';

const { montserrat } = Fonts;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding: 0 4rem;
  box-sizing: border-box;
  font-family: ${montserrat.style.fontFamily};
`;

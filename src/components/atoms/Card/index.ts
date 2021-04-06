import styled from "styled-components";

type CardProps = {
  width?: string
}

export default styled.div<CardProps>`
  min-width: max-content;
  width: ${(({ width }) => width ?? '')};
  border-radius: 10px;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.shadow};
  padding: 50px 60px;
  background-color: ${({ theme }) => theme.colors.card.background};
`;
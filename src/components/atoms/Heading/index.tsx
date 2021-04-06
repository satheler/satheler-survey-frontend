import styled, { css } from 'styled-components';

type HeadingTypes = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'

type HeadingProps = {
  as: HeadingTypes
}

 export default styled.div<HeadingProps>`
  ${({ as }) =>
    ({
      h1: css`
        font-size: 2.3rem;
      `,
      h2: css`
        font-size: 1.8rem;
        font-weight: bold;
      `,
      h3: css`
        font-size: 1.5rem;
      `,
      h4: css`
        font-size: 1.3rem;
        text-transform: uppercase;
        font-weight: bold;
      `,
      h5: css`
        font-size: 1.2rem;
      `,
      h6: css`
        font-size: 1rem;
      `,
    }[as])}
`;

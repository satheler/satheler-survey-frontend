import styled from 'styled-components'

type ButtonProps = {
  width?: string
  height?: string
  borderStyle?: string
  borderWidth?: string
  borderRadius?: string
  fontWeight?: string
}

export default styled.button<ButtonProps>`
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '50px'};
  border-style: ${({ borderStyle }) => borderStyle ?? 'none'};
  border-width: ${({ borderWidth }) => borderWidth ?? '0px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? 'none'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'none'};

  background-color: ${({ theme }) => theme.colors.background.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondaryColor};
  }
`
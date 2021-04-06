import styled from "styled-components"

type SpaceDividerProps = {
  space?: string
}

export default styled.div<SpaceDividerProps>`
  &:not(:first-child) {
    margin-left: ${({ space }) => space ?? '15px'}
  }
`
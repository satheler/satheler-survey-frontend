import styled from 'styled-components';

/**
 * 
 * Type based on "A Complete Guide to Flexbox" (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
 */
type FlexProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexFlow?: `${Required<FlexProps>['flexDirection']} ${Required<FlexProps>['flexWrap']}`;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline';
}

type MiscProps = {
  display?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  padding?: string
  textAlign?: string
  width?: string
}

type ContainerProps = FlexProps & MiscProps

export default styled.div<ContainerProps>`
  display: ${({ display }) => display ?? 'flex'};
  text-align: ${({ textAlign }) => textAlign ?? ''};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? ''};
  flex-flow: ${({ flexFlow }) => flexFlow ?? ''};
  justify-content: ${({ justifyContent }) => justifyContent ?? ''};
  align-items: ${({ alignItems }) => alignItems ?? ''};
  align-content: ${({ alignContent }) => alignContent ?? ''};
  margin-top: ${({ marginTop }) => marginTop ?? ''};
  margin-right: ${({ marginRight }) => marginRight ?? ''};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? ''};
  margin-left: ${({ marginLeft }) => marginLeft ?? ''};
  width: ${({ width }) => width ?? ''};
  padding: ${({ padding }) => padding ?? ''}
`;


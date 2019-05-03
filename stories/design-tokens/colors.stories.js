import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

// Extras import
import { FONT_M } from '../../src'
// Main colors import
import {
  DAWN,
  LIGHT_PURPLE,
  PURPLE,
  DARK_PURPLE,
  LIGHT_PINK,
  PINK,
  DARK_PINK,
  WHITE,
  LIGHT_CHARCOAL,
  CHARCOAL,
  DARK_CHARCOAL,
  NEUTRAL,
  POSITIVE,
  NEGATIVE,
  WARNING,
} from '../../src'

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props => (props.columns ? props.columns : '3')},
    1fr
  );
  grid-gap: 1rem;
`

const ColorExample = styled.div`
  color: ${props => (props.color ? props.color : DARK_CHARCOAL)};
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.bgColor};
  border: 1px solid black;
  ${FONT_M}
`

storiesOf('Design Tokens', module).add('Colors', () => (
  <div>
    <span>Brand Colors</span>
    <ColorGrid>
      <div>
        <ColorExample bgColor={DAWN}>Dawn: {DAWN}</ColorExample>
      </div>
      <div>
        <ColorExample bgColor={LIGHT_PURPLE}>
          Light Purple: {LIGHT_PURPLE}
        </ColorExample>
        <ColorExample bgColor={PURPLE}>Purple: {PURPLE}</ColorExample>
        <ColorExample bgColor={DARK_PURPLE} color={WHITE}>
          Dark Purple: {DARK_PURPLE}
        </ColorExample>
      </div>
      <div>
        <ColorExample bgColor={LIGHT_PINK}>
          Light Pink: {LIGHT_PINK}
        </ColorExample>
        <ColorExample bgColor={PINK}>Pink: {PINK}</ColorExample>
        <ColorExample bgColor={DARK_PINK}>Dark Pink: {DARK_PINK}</ColorExample>
      </div>
    </ColorGrid>

    <span>Greys</span>
    <ColorGrid columns={2}>
      <div>
        <ColorExample bgColor={WHITE}>White: {WHITE}</ColorExample>
      </div>
      <div>
        <ColorExample bgColor={LIGHT_CHARCOAL} color={WHITE}>
          Light Charcoal: {LIGHT_CHARCOAL}
        </ColorExample>
        <ColorExample bgColor={CHARCOAL} color={WHITE}>
          Charcoal: {CHARCOAL}
        </ColorExample>
        <ColorExample bgColor={DARK_CHARCOAL} color={WHITE}>
          Dark Charcoal: {DARK_CHARCOAL}
        </ColorExample>
      </div>
    </ColorGrid>

    <span>UI</span>
    <ColorGrid columns={4}>
      <ColorExample bgColor={NEUTRAL}>Neutral: {NEUTRAL}</ColorExample>
      <ColorExample bgColor={POSITIVE}>Positive: {POSITIVE}</ColorExample>
      <ColorExample bgColor={NEGATIVE}>Negative: {NEGATIVE}</ColorExample>
      <ColorExample bgColor={WARNING}>Warning: {WARNING}</ColorExample>
    </ColorGrid>
  </div>
))

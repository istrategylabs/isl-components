import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import {
  FONT_JUMBO,
  FONT_XXL,
  FONT_XL,
  FONT_L,
  FONT_M,
  FONT_S,
  FONT_XS,
  FONT_XXS,
} from '../../src'

const FontSizeExample = styled.div`
  ${props => props.fontSize}
  padding: 0.5rem 0;
`

storiesOf('Design Tokens', module).add('Font Sizes', () => (
  <div>
    <FontSizeExample fontSize={FONT_JUMBO}>Jumbo: 72px</FontSizeExample>
    <FontSizeExample fontSize={FONT_XXL}>XXL: 48px</FontSizeExample>
    <FontSizeExample fontSize={FONT_XL}>XL: 40px</FontSizeExample>
    <FontSizeExample fontSize={FONT_L}>L: 32px</FontSizeExample>
    <FontSizeExample fontSize={FONT_M}>M: 24px</FontSizeExample>
    <FontSizeExample fontSize={FONT_S}>S: 18px</FontSizeExample>
    <FontSizeExample fontSize={FONT_XS}>XS: 16px</FontSizeExample>
    <FontSizeExample fontSize={FONT_XXS}>XXS: 14px</FontSizeExample>
  </div>
))

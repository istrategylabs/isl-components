import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import {
  JUMBO,
  XXL,
  XL,
  L,
  M,
  S,
  XS,
  XXS,
} from '../../src/design-tokens/font-sizes'

const FontSizeExample = styled.div`
  ${props => props.fontSize}
  padding: 0.5rem 0;
`

storiesOf('Design Tokens', module).add('Font Sizes', () => (
  <div>
    <FontSizeExample fontSize={JUMBO}>Jumbo: 72px</FontSizeExample>
    <FontSizeExample fontSize={XXL}>XXL: 48px</FontSizeExample>
    <FontSizeExample fontSize={XL}>XL: 40px</FontSizeExample>
    <FontSizeExample fontSize={L}>L: 32px</FontSizeExample>
    <FontSizeExample fontSize={M}>M: 24px</FontSizeExample>
    <FontSizeExample fontSize={S}>S: 18px</FontSizeExample>
    <FontSizeExample fontSize={XS}>XS: 16px</FontSizeExample>
    <FontSizeExample fontSize={XXS}>XXS: 14px</FontSizeExample>
  </div>
))

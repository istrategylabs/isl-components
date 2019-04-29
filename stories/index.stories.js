import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { ExampleComponent, StyledExample } from '../src'

storiesOf('Example', module).add('Example Component', () => {
  return <ExampleComponent text={text('Content', 'Hi')} />
})

storiesOf('Example', module).add('Styled Example', () => (
  <StyledExample>{text('Content', 'Hi')}</StyledExample>
))

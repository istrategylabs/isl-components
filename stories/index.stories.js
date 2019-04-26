import React from 'react'

import { storiesOf } from '@storybook/react'

import { ExampleComponent, StyledExample } from '../src'

storiesOf('Example', module).add('Example Component', () => (
  <ExampleComponent>Hi</ExampleComponent>
))

storiesOf('Example', module).add('Styled Example', () => (
  <StyledExample>Hi</StyledExample>
))

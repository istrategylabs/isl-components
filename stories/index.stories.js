import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, optionsKnob as options } from '@storybook/addon-knobs'

import { ExampleComponent, StyledExample } from '../src'

storiesOf('Example', module).add('Example Component', () => (
  <ExampleComponent text={text('Content', 'Hi')} />
))

storiesOf('Example', module).add('Styled Example', () => (
  <StyledExample>{text('Content', 'Hi')}</StyledExample>
))

storiesOf('Example', module).add('Styled Example w/ Blocks', () => {
  const label = 'Blocks'
  const valuesObj = {
    Example1: 1,
    Example2: 2,
    Example3: 3,
  }
  const optionsObj = {
    display: 'multi-select',
  }
  const values = options(label, valuesObj, '1', optionsObj)

  return (
    <StyledExample>
      {values &&
        Array.from(values).map(val => {
          switch (Number(val)) {
            case 1:
              return <ExampleComponent text="I'm number 1" />
            case 2:
              return <ExampleComponent text="I'm number 2" />
            case 3:
              return <ExampleComponent text="I'm number 3" />
          }
        })}
    </StyledExample>
  )
})

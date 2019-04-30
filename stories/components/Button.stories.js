import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Button } from '../../src'

storiesOf('Components', module).add('Button', () => {
  return <Button disabled={boolean('Disabled', false)}>I'm a button</Button>
})

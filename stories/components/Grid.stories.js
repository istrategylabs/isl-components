import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { Grid, Column } from '../../src'

const GrayCol = styled(Column)`
  background: #eee;
  padding: 4px;
`

storiesOf('Components', module).add('Grid', () => {
  const columnWidth = number('Column width', 3, {
    range: true,
    min: 1,
    max: 12,
    step: 1,
  })
  const numColumns = Math.floor(12 / columnWidth)
  let columns = []

  for (let i = 0; i < numColumns; i++) {
    columns.push(
      <GrayCol width={columnWidth} key={i}>
        Dynamic: {columnWidth}
      </GrayCol>
    )
  }

  return (
    <div>
      <Grid>
        <GrayCol width={12}>Column: Width 12</GrayCol>
      </Grid>
      <Grid>{columns}</Grid>
    </div>
  )
})

import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Grid, Column } from '../../src'

const GrayCol = styled(Column)`
  background: #eee;
  padding: 4px;
`

storiesOf('Components', module).add('Grid', () => {
  return (
    <div>
      <Grid>
        <GrayCol width={12}>Column: Width 12</GrayCol>
      </Grid>
      <Grid>
        <GrayCol width={3}>Column: Width 3</GrayCol>
        <GrayCol width={3}>Column: Width 3</GrayCol>
        <GrayCol width={3}>Column: Width 3</GrayCol>
        <GrayCol width={3}>Column: Width 3</GrayCol>
      </Grid>
    </div>
  )
})

import React, { useState } from 'react'
import { useCall } from 'src/utils/hooks'
import { Grid, useGrid } from '../common'
import './Root.scss'

const Root = (props: Props) => {
  const grid = useGrid({ columnDefs, defaultColDef, className: 'ag-theme-alpine' })
  const [data, setData] = useState()

  useCall(loadData, [])

  return <Grid model={grid} rowData={data} />

  async function loadData() {
    const res = await fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    const data = await res.json()

    setData(data)
  }
}

const defaultColDef = {
  resizable: true,
  sortable: true,
  flex: 1
}

const columnDefs = [
  { field: 'athlete' },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' }
]

export { Root }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Root {
  export { Props }
}

interface Props {}

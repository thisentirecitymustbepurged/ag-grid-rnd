import React, { useState } from 'react'
import { useCall } from 'src/utils/hooks'
import { Grid, useGrid } from 'src/views/common'
import './Root.scss'

const Root = (props: Props) => {
  const grid = useGrid(config)
  const [data, setData] = useState()

  useCall(loadData, [])

  return <Grid model={grid} rowData={data} />

  async function loadData() {
    const res = await fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    const data = await res.json()

    setData(data)
  }
}

const config = {
  className: 'ag-theme-alpine',

  defaultColDef: {
    resizable: true,
    sortable: true,
    flex: 1
  },

  columnDefs: [
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
}

export { Root }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Root {
  export { Props }
}

interface Props {}

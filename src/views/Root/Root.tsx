import { observer } from 'mobx-react'
import React from 'react'
import { agGridApi } from 'src/apis'
import { useXhrState } from 'src/models/common'
import { Grid, useGrid } from 'src/views/common'
import './Root.scss'

const Root = observer((props: Props) => {
  const { data } = useXhrState(agGridApi.getOlympicWinners, [])
  const grid = useGrid({ ...gridConfig })

  return (
    <>
      <Grid model={grid} rowData={data} />
    </>
  )
})

const gridConfig = {
  className: 'ag-theme-alpine-dark',

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

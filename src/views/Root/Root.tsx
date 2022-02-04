import React, { FC } from 'react'
import { Grid, useGrid } from '../common'

const Root: FC<P> = p => {
  const grid = useGrid({ className: ['inline', { object: true }] })

  console.log(grid)

  return <Grid model={grid} />
}

export { Root }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Root {
  export { P }
}

interface P {}

import React, { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { Grid as Model } from './models'

const Grid = (props: Props) => {
  if (props.model) return <AgGridReact {...props.model.props} />

  const model = useGrid(props) // eslint-disable-line react-hooks/rules-of-hooks

  return <AgGridReact {...model.props} />
}

const useGrid = (config?: Model.Config) => useMemo(Model.create.bindArgs(config), [])

export { Grid, useGrid }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Grid {
  export { Props }
}
interface Props extends Omit<R.AgGridReactProps, 'className'> {
  className?: Clsx.ClassValue
  model?: Model
}

import type * as A from '@ag-grid-enterprise/all-modules'
import type * as R from '@ag-grid-community/react'
import type * as Clsx from 'clsx'

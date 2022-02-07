import React, { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { Grid as Model } from './models'
import './Grid.scss'

const Grid = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { model = useGrid(props) } = props

  return <AgGridReact {...Model.normalizeProps(props)} {...model.props} />
}

const useGrid = (config?: Model.Config) => useMemo(() => new Model(config), [])

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

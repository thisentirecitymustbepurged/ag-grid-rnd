import clsx from 'clsx'

class Grid {
  constructor(config = { ...defaultConfig }) {
    const { className: pClassName, ...rest } = config
    const className = clsx(pClassName)

    this.config = config
    this.props = {
      ...rest,
      className
    }
  }

  static create = (config?: Config) => new Grid(config)
}

const defaultConfig = {} as Config

export { Grid }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface Grid {
  config: Config
  props: R.AgGridReactProps
}

declare namespace Grid {
  export { Config }
}

interface Config extends Omit<View.Props, 'model'> {}

import type { Grid as View } from '../../Grid'
import type * as R from '@ag-grid-community/react'

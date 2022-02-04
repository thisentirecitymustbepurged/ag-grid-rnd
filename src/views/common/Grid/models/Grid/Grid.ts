import { AllModules } from '@ag-grid-enterprise/all-modules'
import clsx from 'clsx'

class Grid {
  constructor(config?: Config) {
    this.config = config
    this.props = Grid.normalizeProps(config)
  }

  static create = (config?: Config) => new Grid(config)

  static normalizeProps = (props = defaultProps) => {
    const { model, className: pClassName, ...rest } = props
    const className = clsx(pClassName)

    return {
      ...defaultProps,
      ...rest,
      className
    }
  }
}

const defaultProps = { reactUi: true, modules: AllModules } as View.Props

export { Grid }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface Grid {
  config?: Config
  props: R.AgGridReactProps
}

declare namespace Grid {
  export { Config }
}

interface Config extends Omit<View.Props, 'model'> {}

import type { Grid as View } from '../../Grid'
import type * as R from '@ag-grid-community/react'

import clsx from 'clsx'

class Input {
  constructor(config?: Config) {
    this.config = config
    this.props = Input.normalizeProps(config)
  }

  static create = (config?: Config) => new Input(config)

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

const defaultProps = {} as View.Props

export { Input }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface Input {
  config?: Config
  props: View.HtmlProps
}

declare namespace Input {
  export { Config }
}

interface Config extends Omit<View.Props, 'model'> {}

import type { Input as View } from '../../Input'

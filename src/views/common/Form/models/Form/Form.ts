import clsx from 'clsx'

class Form {
  constructor(config?: Config) {
    this.config = config
    this.props = Form.normalizeProps(config)
  }

  static create = (config?: Config) => new Form(config)

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

export { Form }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface Form {
  config?: Config
  props: View.HtmlProps
}

declare namespace Form {
  export { Config }
}

interface Config extends Omit<View.Props, 'model'> {}

import type { Form as View } from '../../Form'

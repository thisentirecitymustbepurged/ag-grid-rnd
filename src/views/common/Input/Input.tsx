import React, { useMemo } from 'react'
import { Input as Model } from './models'
import './Input.scss'

const Input = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { model = useInput(props) } = props

  return <div {...Model.normalizeProps(props)} {...model.props} />
}

const useInput = (config?: Model.Config) => useMemo(() => new Model(config), [])

export { Input, useInput }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Input {
  export { Props, HtmlProps }
}

interface Props extends Omit<HtmlProps, 'className'> {
  className?: Clsx.ClassValue
  model?: Model
}

type HtmlProps = React.HtmlProps<HTMLDivElement>

import type * as Clsx from 'clsx'

import React, { useMemo } from 'react'
import { Form as Model } from './models'
import './Form.scss'

const Form = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { model = useForm(props) } = props

  return <div {...Model.normalizeProps(props)} {...model.props} />
}

const useForm = (config?: Model.Config) => useMemo(() => new Model(config), [])

export { Form, useForm }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Form {
  export { Props, HtmlProps }
}

interface Props extends Omit<HtmlProps, 'className'> {
  className?: Clsx.ClassValue
  model?: Model
}

type HtmlProps = React.HtmlProps<HTMLDivElement>

import type * as Clsx from 'clsx'

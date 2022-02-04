import React, { FC } from 'react'

const Root: FC<P> = p => {
  return <></>
}

export { Root }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

declare namespace Root {
  export { P }
}

interface P {}

import { DependencyList, useEffect } from 'react'

const useCall = <A extends any[]>(fn: Fn<A>, deps: DependencyList, ...args: A) => {
  useEffect(() => { fn(...args) }, deps) // prettier-ignore
}

export { useCall }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

type Fn<A extends any[]> = (...args: A) => any

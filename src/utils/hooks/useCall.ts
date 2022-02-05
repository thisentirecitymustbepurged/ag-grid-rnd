import { DependencyList, useEffect } from 'react'

const useCall = <A extends any[]>(callable: Callable<A>, deps: DependencyList, ...args: A) => {
  useEffect(() => { callable(...args) }, deps) // prettier-ignore
}

export { useCall }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

type Callable<A extends any[]> = (...args: A) => any

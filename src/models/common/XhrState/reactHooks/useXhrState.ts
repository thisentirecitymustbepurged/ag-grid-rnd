import { DependencyList, useMemo } from 'react'
import { useCall } from 'src/utils/reactHooks'
import { XhrState } from '../XhrState'

const useXhrState = <OD, ED, RD>(loader: XhrState.Loader<OD, ED, RD>, deps: DependencyList) => {
  const config = { loader }
  const xhrState = useMemo(() => new XhrState(config), [])

  useCall(xhrState.load, deps)

  return xhrState
}

export { useXhrState }

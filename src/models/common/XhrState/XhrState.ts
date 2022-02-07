import { action, makeObservable, observable } from 'mobx'
import { Xhr } from 'src/models/common'

class XhrState<OD, ED, RD> {
  constructor(config: Config<OD, ED, RD>) {
    this.config = config
    this.isResolving = false
    this.res = undefined
    this.data = undefined

    makeObservable(this, {
      isResolving: observable.ref,
      res: observable.ref,
      data: observable.ref,
      assign: action
    })
  }

  assign = (assignable: Partial<Assignable<OD, ED, RD>>) => Object.assign(this, assignable)

  load = async () => {
    this.assign({ isResolving: true })

    const res = await this.config.loader()

    this.assign({
      res,
      data: res.data,
      isResolving: false
    })
  }
}

export { XhrState }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface XhrState<OD, ED, RD> extends Assignable<OD, ED, RD> {
  config: Config<OD, ED, RD>
}

declare namespace XhrState {
  export { Config, Loader }
}

interface Assignable<OD, ED, RD> {
  isResolving: boolean
  res: Xhr.Response<OD, ED, RD> | undefined
  data: OD | undefined
}

interface Config<OD, ED, RD> {
  loader: Loader<OD, ED, RD>
}

type Loader<OD, ED, RD> = () => Xhr.Promise<Xhr.Response<OD, ED, RD>>

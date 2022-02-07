import axios from 'axios'

/* RD - Request Data, OD - Okay Response Data, ED - Error Response Data */

class Xhr {
  constructor(config: InstanceConfig) {
    this.config = config
    this.axios = axios.create(config)
  }

  private axios: AxiosInstance

  exec = <RD, OD, ED = unknown>(url: string, data: RD, config: ReqConfig<RD> = {}) => {
    const mutatedConfig = config as MutatedConfig<RD>
    const { signal } = mutatedConfig

    if (!signal) {
      mutatedConfig.abortController = new AbortController()
      mutatedConfig.signal = mutatedConfig.abortController.signal
    }

    if (!mutatedConfig.execCount) mutatedConfig.execCount = 0

    mutatedConfig.execCount += 1
    mutatedConfig.url = url
    mutatedConfig.data = data

    const promise = new window.Promise(resolve =>
      this.axios(mutatedConfig)
        .then(res => resolve(new Response(res)))
        .catch(err => resolve(new Response(err)))
    ) as Promise

    promise.abort = mutatedConfig.abortController.abort

    return promise

    type Promise = Xhr.Promise<Response<OD, ED, RD>>
  }

  get = <OD, ED = unknown>(url: string, config?: ReqConfig<unknown>) => this.exec<unknown, OD, ED>(url, undefined, config)
  post = <RD, OD, ED = unknown>(url: string, data: RD, config?: ReqConfig<RD>) => this.exec<RD, OD, ED>(url, data, config)
}

class Response<OD, ED, RD> {
  constructor(seed: Response.Seed<OD, ED, RD>) {
    if (axios.isAxiosError(seed)) Object.assign(this, seed, seed.response)
    //
    else Object.assign(this, seed)

    this.seed = seed
  }

  get ok() {
    return !this.isAxiosError
  }

  get errData() {
    return this.data as unknown as ED
  }
}

export { Xhr }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface Xhr {
  config: InstanceConfig
}
declare namespace Xhr {
  export { InstanceConfig, ReqConfig, Response, Promise }
}

interface Response<OD, ED, RD> extends AxiosResponse<OD, RD>, AxiosError<ED, RD> {
  seed: Response.Seed<OD, ED, RD>
}
declare namespace Response {
  type Seed<OD, ED, RD> = AxiosResponse<OD, RD> | AxiosError<ED, RD>
}

interface InstanceConfig extends ReqConfig<unknown> {}

interface MutatedConfig<RD> extends ReqConfig<RD> {
  abortController: AbortController
  execCount: number
}

interface ReqConfig<RD> extends AxiosRequestConfig<RD> {
  abortController?: AbortController
}

interface Promise<T> extends globalThis.Promise<T> {
  /**
   * Invoking this method will set AbortSignal's aborted flag, cancel the request and signal to any observers that the associated activity is to be aborted.
   */
  abort(): void
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

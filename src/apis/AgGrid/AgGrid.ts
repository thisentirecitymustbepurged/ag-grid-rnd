import { Xhr } from 'src/models/common'

class AgGridApi {
  constructor() {
    this.xhr = new Xhr({ baseURL: 'https://www.ag-grid.com' })
  }

  getOlympicWinners = () => this.xhr.get<OlympicWinner[]>('/example-assets/olympic-winners.json')
}

const agGridApi = new AgGridApi()

export { AgGridApi, agGridApi }

/*-------------------------------------------------------------*/
/*                            TYPES                            */
/*-------------------------------------------------------------*/

interface AgGridApi {
  xhr: Xhr
}

declare namespace AgGridApi {
  export { OlympicWinner }
}

interface OlympicWinner {
  age: number
  athlete: string
  bronze: number
  country: string
  date: string
  gold: number
  silver: number
  sport: string
  total: number
  year: number
}

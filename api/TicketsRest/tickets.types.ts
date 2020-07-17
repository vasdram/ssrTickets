export type TTikets = {
    status: string,
    data: Array<any>,
    error: string | null,
    guiid: string,
    cityFrom: string,
    cityTo: string,
    filtersPriceMinMax: number[],
    airLines: Array<{code: string, name: string}>
    aircraft: any[]
  }
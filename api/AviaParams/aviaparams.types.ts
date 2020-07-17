export type TAviaParams = {
    params: {
        origin: {
          cityName: string,
          cityCode: string,
        },
        destination: {
          cityName: string,
          cityCode: string,
        },
      },
      dates: {
        startDate: Date | null, 
        endDate: Date | null, 
      }
      selectWay: string
}
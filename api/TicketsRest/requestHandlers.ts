import {filters, rest, restTickets} from "../../service/restConnection";
import {RequestStatuses} from "../../constants/API";



// filters

//*GET* https://cache.cfapps.io/api/v1/cache/find/id/{taskId}/filter/{page}/{count}?price=priceMin&price=priceMax&transfer=transfer&date=date&date=timeMin&date=timeMax&airline=SU&airline=U6&aircraft=734


//price=priceMin&price=priceMax&transfer=transfer&date=date&date=timeMin&date=timeMax&airline=SU&airline=U6&aircraft=734



// const qoury{
//     price: {priceMin, priceMax},
// }

export const getFilteredData = ( taskId: string, params :string  ) => filters.get(`cache/find/id/${taskId}/filter/0/10/`, params).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});

export const sortTicketsPrice = ( taskId: string ) => filters.get(`cache/find/id/${taskId}/0/10/`).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});


export const getRangePriceValue = ( taskId: string ) => filters.get(`cache/find/id/${taskId}/price/`).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});

export const getAirlines = ( taskId: string ) => filters.get(`cache/find/id/${taskId}/thereFlight.airline/`).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});

export const getAircraft = ( taskId: string ) => filters.get(`cache/find/id/${taskId}/thereFlight.aircraft/`).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});

//--------------------------------------


export const getTickets = (uiid: string, window: number) => restTickets.get(`task/poll/${uiid}/${window}`).then(res => {
    if(res.status === 200 &&  res.data !== "" ) {
        return res
    }
});

export const ticketRequest = (data: any) => restTickets.post('task/new', data).then(res => {
    if(res.status === 200 ) {
        return {
            guiId: res.data,
            status : RequestStatuses.success
        }
    }
});
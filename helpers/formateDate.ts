import {DAY, MONTH} from "../constants/DATE";

export const formateDate = (date: Date) => {

    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${year}-${month}-${day}`;
};
//10 сен 2020, чт

export const getDate = (date: any) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = MONTH[d.getMonth()];
    const dayWeek = DAY[d.getDay()];

    return `${day} ${month} ${year}, ${dayWeek}`

};

export const getClock = (date: any) => {
    const d = new Date(date);
    const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

    return `${hour}:${min}`
};

export const getTimeDiff = (arrivalTime: string, departTime: string) => {
    // const arrivalTime = 

    // 2020-06-19T04:05:00
    const diff = (new Date(Date.parse(arrivalTime)) as any) - (new Date(Date.parse(departTime)) as any);
    const d = new Date(diff);
   console.log()
    //const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    const hour = Math.round(diff / 60000 / 60);
    const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    // return `Время в полете ${hour} часов ${min} минут`
    return `${hour} ч. ${min} м.`
};


export const formatTime = (n: number) => {
    const hour = Math.floor(n/60) < 10 ?  `0${Math.floor(n/60)}` : Math.floor(n/60);
    const min = Math.floor(n%60) < 10 ? `0${Math.floor(n%60)}` : Math.floor(n%60)
    return `${hour}:${min}`
}

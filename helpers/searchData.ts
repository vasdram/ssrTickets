import {formateDate} from "./formateDate"

export type searchData = {
    "@c": string,
    // "taskId": string,
    "searchOptions": {
        "adult": number,
        "children": number,
        "infants": number,
        "flightClass": number,
        "stopFlightCount": number
    },
    "firstDirection": {
        "from": string,
        "to": string,
        "departTime": any
    }
}

export type searchDataTwoTrip = {
    from: string,
    to: string,
    departTime: Date,
    departTimeTwo: Date,
    adult: number,
    children: number,
    infants: number,
    flightClass: number,
    stopFlightCount: number
}
export type searchOptions = {
    from: string,
    to: string,
    departTime: Date,
    departTimeTwo: Date,
    adult: number,
    children: number,
    infants: number,
    flightClass: number,
    stopFlightCount: number
    guiid: string
}

export const oneWaySearchEvent = (options: searchOptions): searchData => {
    return {
        "@c": ".OneWaySearchEvent",
        // "taskId": options.guiid,
        "searchOptions": {
            "adult": options.adult,
            "children": options.children,
            "infants": options.infants,
            "flightClass": options.flightClass,
            "stopFlightCount": options.stopFlightCount
        },
        "firstDirection": {
            "from": options.from,
            "to": options.to,
            "departTime": formateDate(options.departTime)
        },
    }
};

export const roundTripSearchEvent = (options: searchOptions) => {
    return {
        "@c": ".RoundTripSearchEvent",
        // "taskId": options.guiid,
        "searchOptions": {
            "adult": options.adult,
            "children": options.children,
            "infants": options.infants,
            "flightClass": options.flightClass,
            "stopFlightCount": options.stopFlightCount
        },
        "firstDirection": {
            "from": options.from,
            "to": options.to,
            "departTime": formateDate(options.departTime)
        },
        "backDirection": {
            "from": options.to,
            "to": options.from,
            "departTime": formateDate(options.departTimeTwo)
        },
    }
};
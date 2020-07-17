const REST = {
  URL: 'https://api-rest-web.cfapps.io/api/v1',
  HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

const AUTOCOMPLETE = {
  URL: 'https://autocomplete-service2.cfapps.io/api/v1/place',
  HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}


const TICKETS = {
  URL: 'https://coordinator2.cfapps.io/api/v1',
  HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

const FILTERS = {
  URL: 'https://cache.cfapps.io/api/v1',
  HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

const WS = {
  url: 'wss://api-gateway-web.cfapps.io:4443/ws',
  options: {
    reconnectInterval: 1000,
    maxReconnectInterval: 1000,
  }
}


export const RequestStatuses = {
  inactive: 'INACTIVE',
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export { REST, WS, AUTOCOMPLETE, TICKETS, FILTERS }
import { WS } from "../constants/API";
import store from "../store/store";
import { getTicketsSuccess, getTicketsRequest } from "../api/Tickets";

class Ws {
    url: string;
    options: { reconnectInterval: number, maxReconnectInterval: number };
    ws: WebSocket;
    reconnectInterval: number;
    maxReconnectInterval: number;
    data: any;

    constructor(url: string, options: { reconnectInterval: number, maxReconnectInterval: number }) {
        this.url = url
        this.options = options
        this.ws = new WebSocket(url);
        this.reconnectInterval = options.reconnectInterval || 1000;
        this.maxReconnectInterval = options.maxReconnectInterval || 3000;
        this.data = [];
    }



    public webSocketsConnect = () => {

        this.ws.onopen = () => {
            // Restart reconnect interval
            this.reconnectInterval = this.options.reconnectInterval || 1000
        };

        this.ws.onmessage = (event) => {
            //console.log(event)
            this.handleNotification(event)
        };

        this.ws.onclose = (event) => {
            if (event) {
                // Event.code 1000 is our normal close event
                if (event.code !== 1000) {

                    setTimeout(() => {
                        if (this.reconnectInterval < this.maxReconnectInterval) {
                            // Reconnect interval can't be > x seconds
                            this.reconnectInterval += 1000
                        }
                        this.webSocketsConnect()
                    }, this.reconnectInterval)
                }
            }
        };

        this.ws.onerror = (error) => {
            console.log(error);
            this.ws.close()
        }
    }

    public webSocketsDisconnect = () => {
        this.ws.close()
    };

    public webSocketsSend = (data: {}) => {
        store.dispatch(getTicketsRequest());
        this.ws.send(JSON.stringify(data))
    };

    public handleNotification = (params: any) => {
        const data = JSON.parse(params.data);
        store.dispatch(getTicketsSuccess(data));
    }
}

const ws = new Ws(WS.url, WS.options)

export { ws }


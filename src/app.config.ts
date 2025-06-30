import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import { MyRoom } from "./rooms/MyRoom";
export default config({
    initializeGameServer: (gameServer) => {
        gameServer.define('my_room', MyRoom);
    },
    initializeExpress: (app) => {
        app.use("/cx-mtx", monitor());
    },
    beforeListen: () => {
    }
});

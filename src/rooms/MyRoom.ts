import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";
import { Player } from "./schema/PlayerState";
import { MovementMessage } from "../messages/MovementMessage";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 16;
  onCreate(options: any) {
    this.state = new MyRoomState();
    this.onMessage("m", (client, message: MovementMessage) => {
      if (this.state.players.has(client.sessionId)) {
        const player = this.state.players.get(client.sessionId);
        if (player) {
          player.x = message.x;
          player.y = message.y;
          player.z = message.z;
          player.r = message.r;
          console.log(`Player ${client.sessionId} moved to (${player.x}, ${player.y})`);
        }
      } else {
        console.warn(`Player ${client.sessionId} not found in the state.`);
      }
    });
  }

  onJoin(client: Client, options: any) {
    var player = new Player();
    player.name = options.name || "Anonymous";
    player.avatar = options.avatar || "default_avatar.png";
    player.x = 0;
    player.y = 0;
    player.z = 0;
    player.r = 0;
    this.state.players.set(client.sessionId, player);
    console.log(client.sessionId, "joined", this.roomId);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left", this.roomId);
    this.state.players.delete(client.sessionId);
  }
  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}

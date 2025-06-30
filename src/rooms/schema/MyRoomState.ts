import { MapSchema, Schema, type } from "@colyseus/schema";
import { Player } from "./PlayerState";

export class MyRoomState extends Schema {
  @type({ map: Player }) players: MapSchema<Player> = new MapSchema<Player>();
}

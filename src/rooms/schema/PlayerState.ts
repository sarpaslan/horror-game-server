import { Schema, type } from "@colyseus/schema";

export class Player extends Schema {
    @type("string") name: string;
    @type("string") avatar: string;
    @type("number") x: number;
    @type("number") y: number;
    @type("number") z: number;
    @type("number") r: number;
}
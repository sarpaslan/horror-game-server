export class MovementMessage {
    constructor(
        public x: number,
        public y: number,
        public z: number = 0, // Default to 0 if not provided
        public r: number = 0 // Default to 0 if not provided
    ) { }
}
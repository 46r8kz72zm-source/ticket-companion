export type MoveType =
  | "DRAW_FACE_UP_CARD"
  | "DRAW_BLIND_CARD"
  | "CLAIM_ROUTE"
  | "DRAW_DESTINATION_TICKETS"
  | "KEEP_DESTINATION_TICKETS"
  | "BUILD_STATION"
  | "END_TURN";

export interface GameMove {
  type: MoveType;

  playerId: string;
}
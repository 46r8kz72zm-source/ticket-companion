const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateRoomCode(length = 6): string {
  let code = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * CHARS.length);
    code += CHARS[index];
  }

  return code;
}
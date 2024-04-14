/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}


export interface RawUser {
  id: number;
  name: string;
  surname: string;
  lastUpdate: string;
}

export type NewUser = Omit<User, "id" | "lastUpdate">;
export type UserId = User | number;
export type PartialUser = Partial<User> & { id: number };
export type SayHello = { hello: string };
export type HelloReply = { hello: string };

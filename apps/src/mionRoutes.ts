/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { type Routes, route } from "@mionjs/router";
import { User, SimpleUser } from "./models";

export const routes = {
  hello: route((): string => "world"),
  updateUser: route((ctx, user: User): User => {
    // Update timestamps
    user.updatedAt = new Date();
    user.lastLoginAt = new Date();
    // Update profile modification
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }),
  updateSimpleUser: route((ctx, user: SimpleUser): SimpleUser => {
    user.lastUpdate = new Date();
    return user;
  }),
} satisfies Routes;

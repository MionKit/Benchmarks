import { NewUser, PartialUser, RawUser, User, UserId } from "./models";
export declare const usersStore: {
    create: (user: NewUser) => User;
    get: (userId: UserId) => User | undefined;
    update: (user: PartialUser) => User | undefined;
    delete: (userId: UserId) => User | undefined;
};
export declare const hasUnknownKeys: (knownKeys: string[], input: any) => boolean;
export declare const isUserId: (input: any) => input is UserId;
export declare const isNewUser: (input: any) => input is NewUser;
export declare const isPartialuser: (input: any) => input is PartialUser;
export declare const deserializeUser: (jsonParseResult: RawUser) => User;
//# sourceMappingURL=usersStore.d.ts.map
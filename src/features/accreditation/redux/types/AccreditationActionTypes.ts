type EnumLiteralsOf<T extends object> = T[keyof T];

export type IAccreditationTypes = EnumLiteralsOf<typeof AccreditationActions>;

export const AccreditationActions = Object.freeze({
    SET_USER: '@user/set_user' as '@user/set_user',
})
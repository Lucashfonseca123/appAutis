type EnumLiteralsOf<T extends object> = T[keyof T];

export type IAccreditationTypes = EnumLiteralsOf<typeof AccreditationActions>;

export const AccreditationActions = Object.freeze({
    SET_USER: '@user/set_user' as '@user/set_user',
    SET_STATUS: "@user/set_status" as "@user/set_status",
    SET_TOTAL_STAGE: "@user/set_total_stage" as "@user/set_total_stage",
    SET_DECREMENT_STAGE: '@user/set_decrement_stage' as '@user/set_decrement_stage'
})
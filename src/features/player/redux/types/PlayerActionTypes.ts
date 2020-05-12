type EnumLiteralsOf<T extends object> = T[keyof T];

export type IPlayerActionsTypes = EnumLiteralsOf<typeof PlayerActions>;

export const PlayerActions = Object.freeze({
    SET_ANSWER: '@player/set_answer' as '@user/set_answer',
    GET_ALTERNATIVES: '@player/get_alternatives' as '@player/get_alternatives'
})
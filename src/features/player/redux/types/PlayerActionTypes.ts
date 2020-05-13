type EnumLiteralsOf<T extends object> = T[keyof T];

export type IPlayerActionsTypes = EnumLiteralsOf<typeof PlayerActions>;

export const PlayerActions = Object.freeze({
    SET_ANSWER: '@player/set_answer' as '@player/set_answer',
    SET_INITIAL_ANSWER: '@player/set_initial_answer' as '@player/set_inital_answer',
    SET_INFOS: '@player/set_infos' as '@player/set_infos',
    SET_MENU_OPTION: '@menu/set_menu_option' as '@menu/set_menu_option',
})
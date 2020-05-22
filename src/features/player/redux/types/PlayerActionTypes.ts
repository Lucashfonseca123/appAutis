type EnumLiteralsOf<T extends object> = T[keyof T];

export type IPlayerActionsTypes = EnumLiteralsOf<typeof PlayerActions>;

export const PlayerActions = Object.freeze({
    GET_INFOS: '@player/get_infos' as '@player/get_infos',
    SET_ANSWER: '@player/set_answer' as '@player/set_answer',
    SET_INITIAL_ANSWER: '@player/set_initial_answer' as '@player/set_inital_answer',
    SET_INITAL_STATE_PLAYER: '@player/set_inital_state' as '@player/set_initial_state',
    RESET_DONE: '@player/reset_done' as '@player/reset_done',
    SET_PROGRESS: '@menu/set_progress' as '@menu/set_progress',
    SET_INITAL_STATE_MENU: '@menu/set_initial_state' as '@menu/set_initial_state',
    SET_STAGE_DONE: '@menu/set_stage_done' as '@menu/set_stage_done'
})
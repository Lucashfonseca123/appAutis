export interface IPlayerState {
    menu: string;
    answer: string;
    type: string;
    alternatives: object | string[];
    answered: boolean | undefined;
}

export interface IMenuState {
    type: object[];
    menuSelected: string;
}
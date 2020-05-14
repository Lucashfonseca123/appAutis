export interface IPlayerState {
    id: number;
    type: string;
    alternatives: object | string[];
}

export interface IMenuState {
    type: object[];
    currentStage: object[];
}
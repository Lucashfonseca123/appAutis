export interface IPlayerState {
    id: number;
    type: string;
    alternatives: object | string[];
    done: boolean;
}

export interface IMenuState {
    type: object[];
    currentStage: object[];
}
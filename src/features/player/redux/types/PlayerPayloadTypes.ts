export interface ISetAnswer {
    answer: string;
    id: number;
    progress: number;
}

export interface IGetInfos {
    id: number;
    progress: number;
}

export interface ISetProgress {
    id: number;
    progress: number;
}

export interface ISetInitialState {
    id: number;
}
export interface ISetStageDone {
    id: number;
    progress: number;
}
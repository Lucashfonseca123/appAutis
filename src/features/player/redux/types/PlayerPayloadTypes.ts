export interface ISetAnswer {
    answer: string;
}

export interface ISetMenu {
    type: string;
}

export interface ISetInfos {
    id: number;
    options: object | object[] | string[];
    answer: string;
}
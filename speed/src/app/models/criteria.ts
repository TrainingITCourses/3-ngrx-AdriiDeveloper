export class ResultCriteria {
    constructor(public id: number = null,
                public name: string = '') { }
}

export interface SearchCriteria {
    name: string;
    value: string;
}
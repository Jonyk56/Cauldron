export interface aiInstance{
    round: number;
    children?: object[];
    GetBest?: (child_1: object, child_2: object, comparison?: (a:any, b:any) => number ) => object[];
}


export interface ChildInstance{
    ID:number;
    reward?: (input_data: object) => boolean;
    punish?: (input_data: object) => null;
    die?: () => null;
    survive?: (Parent: aiInstance) => boolean;
}
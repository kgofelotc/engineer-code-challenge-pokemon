import { Result } from "./result.model";

export class Pokemon {
    public count: number;
    public next: string;
    public previous: string;
    public results: Result[];

    constructor(count: number,next: string,previous: string,results: Result[]){
        this.count = count;
        this.next = next;
        this.previous =previous;
        this.results = results;
    }
}
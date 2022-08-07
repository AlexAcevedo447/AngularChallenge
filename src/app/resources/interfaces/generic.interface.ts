export interface RequestAll{
    searchResults: Array<searchResultsAll>
}

export interface searchResultsAll{
    name:string,
    results:Array<Meal>,
    totalResults:number,
    totalResultsVariants:number,
    type:string
}

export interface Meal{
    content:string,
    dataPoints:Array<any>,
    id:number,
    image:string,
    link:string,
    name:string,
    relevance:number,
    type:string
}
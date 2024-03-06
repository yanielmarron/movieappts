export interface SearchCriteriaInterface {
    title: string;
    genre: string;
    actorName: string;
}
  
export interface SearchCriteriaInterfaceWithPagination extends SearchCriteriaInterface {
    pageNumber: number;
    pageSize: number;
}
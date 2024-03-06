import http from "./CommonHttp";

const controller = 'actor';

interface ActorServiceInterface {
  getAll: (queryParams: any) => Promise<any>;
}

const getAll = async ({ queryParams }: { queryParams: any }) => {
  return http.get(controller);
};

const ActorService: ActorServiceInterface = {
  getAll,
};

export default ActorService;
import http from "./CommonHttp";

const controller = 'movie';

interface MovieServiceInterface {
  getAll: (queryParams: any) => Promise<any>;
  getById: (id: number) => Promise<any>;
  addMovie: (movie: any) => Promise<any>;
  updateMovie: (id: number, movie: any) => Promise<any>;
  softDelete: (id: number) => Promise<any>;
}

const getAll = async (queryParams: any) => {
  return http.get(controller, { params: queryParams });
};

const getById = async (id: number) => {
  return http.get(`${controller}/${id}`);
};

const addMovie = async (movie: any) => {
  return http.post(controller, movie);
};

const updateMovie = async (id: number, movie: any) => {
  return http.put(`${controller}/${id}`, movie);
};

const softDelete = async (id: number) => {
  return http.delete(`${controller}/${id}`);
};

const MovieService: MovieServiceInterface = {
  getAll,
  getById,
  addMovie,
  updateMovie,
  softDelete
};

export default MovieService;
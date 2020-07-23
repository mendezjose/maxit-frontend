import http from "./httpService";

const apiEndpoint = "http://52.91.203.11/api/jobs";

export function getJob(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

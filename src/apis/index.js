import axios from '../utils/axios';

export function CreateTask(params) {
  return axios.request({
    url: '/gantt',
    method: 'POST',
    data: params,
  });
}

export function GetAllTask() {
  return axios.request({
    url: '/gantt',
    method: 'GET',
  });
}

export function DeleteTask(id) {
  return axios.request({
    url: '/gantt',
    method: 'DELETE',
    data: {
      id: id
    }
  });
}

export function UpdateTask(task) {
  return axios.request({
    url: '/gantt',
    method: 'PUT',
    data: task
  });
}

export function GetTaskById(id) {
  return axios.request({
    url: `/gantt?id=${id}`,
    method: 'GET',
  });
}

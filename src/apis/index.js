import axios from '../utils/axios';

export function CreateTask(params) {
  return axios.request({
    url: '/listview',
    method: 'POST',
    data: params,
  });
}

export function GetAllTask() {
  return axios.request({
    url: '/listview',
    method: 'GET',
  });
}

export function DeleteTask(id) {
  return axios.request({
    url: '/listview',
    method: 'DELETE',
    data: {
      id: id
    }
  });
}

export function UpdateTask(task) {
  return axios.request({
    url: '/listview',
    method: 'PUT',
    data: task
  });
}

export function GetTaskById(id) {
  return axios.request({
    url: `/listview?id=${id}`,
    method: 'GET',
  });
}

export function GetUserInfo(id) {
  return axios.request({
    url: `/user?id=${id}`,
    method: 'GET',
  });
}
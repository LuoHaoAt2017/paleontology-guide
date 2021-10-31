import fetch from '@/utils/axios';

export function Login(params) {
  return fetch.request({
    url: '/login',
    method: 'POST',
    data: {
      username: params.username,
      password: params.password,
    },
  });
}

export function Logout(params) {
  return fetch.request({
    url: `'/logout/userId=${params}'`,
    method: 'GET',
  });
}

export function Register(params) {
  return fetch.request({
    url: '/register',
    method: 'PUT',
    data: {
      username: params.username,
      password: params.password,
    },
  });
}
import fetch from '@/utils/axios';

export function loginByPassWord(params) {
  return fetch.request({
    url: '/loginByPassword',
    method: 'POST',
    data: {
      username: params.username,
      password: params.password,
    },
  });
}

export function loginByScanCode(params) {
  return fetch.request({
    url: '/loginByScancode',
    method: 'POST',
    data: {
      username: params.username,
      password: params.scancode,
    },
  });
}
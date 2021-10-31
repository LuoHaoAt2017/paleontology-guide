export const token_key = 'token';

export function getToken() {
  return window.localStorage.getItem(token_key);
}

export function setToken(token) {
  return window.localStorage.setItem(token_key, token);
}

export function delToken() {
  window.localStorage.clear(token_key);
}
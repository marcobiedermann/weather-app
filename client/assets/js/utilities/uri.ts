/* eslint-disable import/prefer-default-export */

export function param(obj) {
  return Object.entries(obj)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
}

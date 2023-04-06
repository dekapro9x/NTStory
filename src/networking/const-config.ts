export const app_id = '3';
export const baseUrl = 'http://222.252.27.138:46488/api/';
export const baseFileUrl = 'https://tms-v2-dev.247post.vn/files/';

export const ApiTypeDomain = {
  tms: 'TMS',
  chat247: 'Chat247',
  pms: 'PMS2',
};

export const ApiConfigs = {
  baseURL: baseUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    timeout: 5000,
  },
};

const ERROR_CODE_REQUEST_SUCCESS = 200;
const ERROR_CODE_UPDATE_SUCCESS = 201;
const ERROR_CODE_DELETE_SUCCESS = 204;

export const ERROR_CODE_SUCCESS = [
  ERROR_CODE_REQUEST_SUCCESS,
  ERROR_CODE_UPDATE_SUCCESS,
  ERROR_CODE_DELETE_SUCCESS,
];

const ERROR_CODE_400 = 400;
const ERROR_CODE_401 = 401;

export const API_ERROR_CODE = {
  request_error_400: {
    CODE: ERROR_CODE_400,
    MESSAGE: 'request api error!',
  },
  request_error_401: {
    CODE: ERROR_CODE_401,
    MESSAGE: 'expired token!',
  },
};

export function isSuccess(statusResponse: number) {
  return ERROR_CODE_SUCCESS.indexOf(statusResponse) > -1;
}

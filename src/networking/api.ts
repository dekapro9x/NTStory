import NetInfo from '@react-native-community/netinfo';
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {ApiConfigs, ApiTypeDomain, isSuccess} from './const-config';
import {Options, responseRequestInstance, typeRequest} from './type';
let expiredAccount = false;
const defaultHeaders: {[x: string]: string} = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const instance: AxiosInstance = axios.create(ApiConfigs);

const getTokenHeader = () => {
  const tokenUser = '7234872384723847823748324';
  return 'ApiToken ' + tokenUser;
};

instance.interceptors.request.use(
  async (request: any) => {
    //Khởi tạo request gắn token user vào header:
    if (getTokenHeader()) {
      request.headers = {
        Authorization: getTokenHeader(),
      };
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    const {response, request} = error;
    if (response) {
      return handleErrorOnResponse(response);
    } else {
      if (request) {
        NetInfo.fetch().then(connect => {
          if (!connect.isConnected) {
            console.log('Không kết nối được internet');
          } else {
            console.log('Vẫn kết nối với internet, kiểm tra lại');
          }
          return Promise.reject(error);
        });
      } else {
        handleErrorOnRequest(error);
      }
    }
    return Promise.reject(error);
  },
);

const handleErrorOnResponse = (response: any) => {
  if (response.status >= 400 && response.status < 600) {
    // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi và ghi log:
    console.log('Lỗi xảy ra khi nhận phản hồi từ server', response.status);
  }
};

const handleErrorOnRequest = (error: AxiosError) => {
  console.log('Lỗi xảy ra trong quá trình gọi API');
};

//Hàm gắn thông tin header:
const getOptionsRequest = (
  url: string,
  params: any,
  options: Options,
  apiTypeRequestDomain: string,
) => {
  const newOptions: Options = {...options};
  const headers: {[x: string]: string} = {
    ...defaultHeaders,
    ...options.headers,
  };
  if (newOptions.headers) {
    Object.assign(headers, newOptions.headers);
  }
  newOptions['url'] = url;
  newOptions['data'] = params;
  headers['DeviceID'] = '0e001af06401695c';
  headers['DeviceOS'] = 'android';
  if (apiTypeRequestDomain == ApiTypeDomain.tms) {
    headers['Accept'] = 'application/json';
    headers['ApiKey'] = 'APPS';
    headers['ApiSecretKey'] = 'DRIVER';
    headers['Content-Type'] = 'application/json';
    headers['VehicleID'] = '7571';
    headers['VehicleNo'] = '51C-874.00';
    // headers['UserID'] = '';
    // headers['VehicleID'] = '';
    // headers['JourneyID'] = '';
  }
  //PMS Domain:
  if (apiTypeRequestDomain == ApiTypeDomain.pms) {
  }
  //Chat 247 Domain:
  if (apiTypeRequestDomain == ApiTypeDomain.chat247) {
  }

  return {
    ...newOptions,
    headers,
  };
};

//Hàm request với tất cả các loại phương thức :
const requestInstanceWithResponse = async (
  url: string,
  params: any,
  options: Options,
  apiTypeRequestDomain: string,
) => {
  try {
    const requestOptions: AxiosRequestConfig = getOptionsRequest(
      url,
      params,
      options,
      apiTypeRequestDomain,
    );
    console.log('requestOptions', requestOptions);
    // const response = await axios.post(url,params,requestOptions);
    // console.log('response', response);
    const response = await axios.request(requestOptions);
    console.log('response', response);
    // axios
    //   .post(
    //     'http://222.252.27.138:46488/api/Account/LoginToPhone',
    //     {
    //       UserName: 'CNB-99-9999',
    //       Password: '12345Aa@',
    //     },
    //     {
    //       headers: {
    //         Accept: 'application/json',
    //         ApiKey: 'APPS',
    //         ApiSecretKey: 'DRIVER',
    //         ['Content-Type']: 'application/json',
    //         DeviceID: '0e001af06401695c',
    //         DeviceOS: 'android',
    //         VehicleID: '51C-874.00',
    //       },
    //     },
    //   )
    //   .then(function (response) {
    //     // handle success
    //     alert(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log('Lỗi', error);
    //     // handle error
    //     alert(error.message);
    //   });
    // console.log('response', response);
    // console.log('response', response);
    // return response.data;
  } catch (error) {}
};

//Hàm request với từng loại phương thức:
const requestInstanceWithMethod = async (
  url: string,
  params: any,
  options: Options,
  apiType: string,
  apiTypeDomain: string,
) => {
  try {
    let response: responseRequestInstance = {};
    const requestOptionsHeader: AxiosRequestConfig = getOptionsRequest(
      url,
      params,
      options,
      apiTypeDomain,
    );
    switch (apiType) {
      case typeRequest.GET: {
        response = await instance.get(url, {params: params});
        break;
      }
      case typeRequest.POST: {
        response = await instance.post(url, params, requestOptionsHeader);
        break;
      }
      case typeRequest.PUT: {
        response = await instance.put(url, params, requestOptionsHeader);
        break;
      }
      case typeRequest.DELETE: {
        response = await instance.delete(url, {params: params});
        break;
      }
      default: {
        return null;
      }
    }
    if (response && response?.status) {
      let status = response.status;
      let responsesData = response;
      if (isSuccess(status)) {
        // dispatch(actions.hideLoading());
        return responsesData;
      } else {
        // dispatch(actions.hideLoading());
        // showAlertError(messageError);
        return response;
      }
    }
  } catch (error) {
    //   dispatch(actions.hideLoading());
    return error.response;
  }
};

//Danh sách các phương thức:
const getRequestInstance = async (
  url: string,
  params: any,
  options: Options,
  ApiTypeDomain: string,
) => {
  const responseMethodPost = await requestInstanceWithMethod(
    url,
    params,
    options,
    typeRequest.GET,
    ApiTypeDomain,
  );
  return responseMethodPost;
};

const postRequestInstance = async (
  url: string,
  params: any,
  options: Options,
  ApiTypeDomain: string,
) => {
  const responseMethodPost = await requestInstanceWithMethod(
    url,
    params,
    options,
    typeRequest.POST,
    ApiTypeDomain,
  );
  return responseMethodPost;
};

const pushRequestInstance = async (
  url: string,
  params: any,
  options: Options,
  ApiTypeDomain: string,
) => {
  const responseMethodPost = await requestInstanceWithMethod(
    url,
    params,
    options,
    typeRequest.POST,
    ApiTypeDomain,
  );
  return responseMethodPost;
};

const deleteRequestInstance = async (
  url: string,
  params: any,
  options: Options,
  ApiTypeDomain: string,
) => {
  const responseMethodPost = await requestInstanceWithMethod(
    url,
    params,
    options,
    typeRequest.POST,
    ApiTypeDomain,
  );
  return responseMethodPost;
};

export {
  getRequestInstance,
  postRequestInstance,
  pushRequestInstance,
  deleteRequestInstance,
  requestInstanceWithResponse,
  requestInstanceWithMethod,
};

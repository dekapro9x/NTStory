import {LoginRequest} from 'src/type/api/login';
import {requestInstanceWithMethod, requestInstanceWithResponse} from './api';
import {ApiConfigs, ApiTypeDomain, baseUrl} from './const-config';
import {typeRequest} from './type';

class clientApp {
  Login = async (request: LoginRequest) => {
    const data = await requestInstanceWithResponse(
      `${baseUrl}Account/LoginToPhone`,
      request,
      {method: 'post', body: JSON.stringify(request)},
      ApiTypeDomain.tms,
    );
    return data;

    // const data = await requestInstanceWithMethod(
    //   `${baseUrl}Account/LoginToPhone`,
    //   request,
    //   typeRequest.POST,
    //   ApiTypeDomain.tms,
    // );
  };
}
const AppClient = new clientApp();

export {AppClient};

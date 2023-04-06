import { LoginRequest } from 'src/type/api/login';
import { postRequestInstance } from './api';
import { ApiTypeDomain, baseUrl } from './const-config';

class clientApp {
  Login = async (request: LoginRequest) => {
    // const data = await requestInstanceWithResponse(
    //   `${baseUrl}Account/LoginToPhone`,
    //   request,
    //   {method: 'post', body: JSON.stringify(request)},
    //   ApiTypeDomain.tms,
    // );
    // return data;

    const data = await postRequestInstance(
      `${baseUrl}Account/LoginToPhone`,
      request,
      {method: 'post', body: JSON.stringify(request)},
      ApiTypeDomain.tms,
    );
    return data
  };
}
const AppClient = new clientApp();

export { AppClient };


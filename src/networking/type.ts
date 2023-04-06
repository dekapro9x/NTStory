export const typeRequest = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export type Options = {
  headers?: {[x: string]: string};
  method?: string;
  url?: string;
  body?: any;
  data?: any;
  // credentials?: 'omit' | 'same-origin' | 'include'; //Chỉ dùng trong fetch
};

export type responseRequestInstance = {
  status?: number;
};

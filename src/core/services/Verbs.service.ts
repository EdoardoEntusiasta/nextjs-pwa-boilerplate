import axios from 'axios';
import { CoreResponseModel } from '../models/Response.model';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


export class CoreVerbsService {

    // todo setup degli headers

    constructor() {}
    
      formatErrors(error) {
        return error.error;
      }
    
      url(path) {
        return `${BASE_ENDPOINT}${path}`;
      }

      get(path, params = null, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'get',
          params,
          url: `${serviceUrl}${path}`,
          responseType:'stream'
        })
        .then(response => {
          return new CoreResponseModel(response) as CoreResponseModel;
        })
        .catch(err => console.log(err));
      }

      post(path, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'post',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
		  //console.log(response);	
          return new CoreResponseModel(response);
        })
        .catch(err => console.log(err));
      }

      put(path, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'put',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => console.log(err));
      }
    
      delete(path, data?: any | null, serviceUrl: any = BASE_ENDPOINT) {
        return axios({
          method: 'delete',
          url: `${serviceUrl}${path}`,
          data,
          responseType:'stream'
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => console.log(err));
      }
    
      patch(path, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'patch',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => console.log(err));
      }
    
}
import axios from 'axios';
import { CoreStorageService } from './Storage.service';
import { CoreResponseModel } from '../Models/Response.model';
import { Environment } from '../../Setup';


export class CoreVerbsService {

    // todo setup degli headers

    constructor(
        Storage
        ) {
      }
    
      formatErrors(error) {
        return error.error;
      }
    
      url(path) {
        return `${Environment.serviceUrl}${path}`;
      }

      get(path, params = null, serviceUrl = Environment.SERVICE_URL) {
        return axios({
          method: 'get',
          params,
          url: `${serviceUrl}${path}`,
          responseType:'stream'
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => console.log(err));
      }

      post(path, body = {}, serviceUrl = Environment.SERVICE_URL) {
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

      put(path, body = {}, serviceUrl = Environment.SERVICE_URL) {
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
    
      delete(path, data, serviceUrl = Environment.SERVICE_URL) {
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
    
      patch(path, body = {}, serviceUrl = Environment.SERVICE_URL) {
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
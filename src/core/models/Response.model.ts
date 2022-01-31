
import { IResponse } from '@core/interfaces/IResponse';
import { CoreResultInstanceModel } from './ResultInstance.model';

// !Axios format ready

/**
 * Slug which refers to user data received at login
 * it is used as a key for storing user data after logging in
 */
export const USERDATA_SLUG = 'userdata';

/**
 * Response Model
 * If the server's response is modified this model is the only file to modify (and ResponseInterface )
 */
export class CoreResponseModel implements IResponse {

  errors; // any[] | any
  data; // any
  headers; // any
  type; // string
  blob; // any
  status;

  constructor(response) {
    if (response) {
        //Object.assign(this, response);
		  this.data = response.data;
    }
  }

  hasData() {
    const data = this.getData();
    return (data ? Array.isArray(data) ? data.length ? true : false : false : false);
  }

  getData(forceArray = false, mapFilter = null) {
    let output;
    if (forceArray) {
      output = [];
      Object.keys(this.data).forEach(key => {
        output.push(this.data[key]);
      });
      return output;
    }
    output = this.data;
    if(mapFilter && Array.isArray(output)) {
      output.map(mapFilter);
    }
    return output;
  }

  getDataModel(forceArray = false, mapFilter = null) {
    if (forceArray) {
      let data: Array<any> = [];
      Object.keys(this.data).forEach(key => {
        data.push(this.data[key]);
      });
      return new CoreResultInstanceModel(data);
    }
    if(mapFilter && Array.isArray(this.data)) {
      this.data.map(mapFilter);
    }
    return new CoreResultInstanceModel(this.data);
  }

  logData() {
    console.log(this.data);
    return this;
  }

  hasErrors() {
    if (!this.errors) {
      return false;
    }
    if (Array.isArray(this.errors)) {
      return this.errors.length ? true : false;
    }
    for (const key in this.errors) {
      if (this.errors.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  getErrors() {
    return this.hasErrors() ? this.errors : null;
  }

  hasError(term) {
    const keys = Object.keys(this.errors);
    for (const key in keys) {
        if (key === term) {
            return this.errors[key];
        }
    }
    return null;
  }

  download(fileName) {
    if (this.blob) {
      const dataType = this.blob.type;
      const binaryData: Array<any> = [];
      binaryData.push(this.blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      downloadLink.setAttribute('download', fileName);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    } else {
      console.error('ResponseModel.download: no blob available')
    }
  }

}

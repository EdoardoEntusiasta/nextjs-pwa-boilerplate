
/**
 * Service error Model
 */
export class CoreServiceErrorModel {

    errors = [];
    message = null; // string;
    code = null; // number;
    headers = null; // any;
    data = null // any;
  
    constructor(message, errors = [], code = null, headers = null, data = null) {
      this.errors = errors;
      this.message = message;
      this.code = code;
      this.headers = headers;
      this.data = data;
    }
  
    getData() {
      return this.data;
    }
  
    getErrorByKey(key, uppercase = false) {
      let value = '';
      if (isNaN(key)) {
        value = Object.keys(this.errors).find(itemKey => itemKey === key);
      } else {
        if (typeof this.errors[key] === 'undefined') {
          value = '';
        } else {
          value = this.errors[key];
        }
      }
      if (uppercase) {
        value = value.toUpperCase();
      }
      return value;
    }
  
    getCode() {
      return this.code;
    }
  
    getMessage() {
      return this.message;
    }
  
    getHeaders() {
      return this.headers;
    }
  
    getErrors() {
      return this.errors;
    }
  
  }
  
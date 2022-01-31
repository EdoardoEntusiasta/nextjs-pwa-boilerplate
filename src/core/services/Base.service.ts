
import { CoreVerbsService } from './Verbs.service';
import { CoreServiceErrorModel } from '../Models/ServiceError.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { CoreResponseModel } from '@core/models/Response.model';


/**
 * CoreBaseService
 * please note that:
 * Response is expected in the format:
 *  
 * {
 *  data: [] | {} | string | number
 * }
 * 
 */
export class CoreBaseService {

    apiService: CoreVerbsService;
    T: any;
    path = '';
    tempModel;
    reactState;
    cacheEnabled = [];
    cacheData = [];
    configuration = {
      errors: {
        unhautorized: {
          // Clear auth data when 401 or 403 (UNAUTHORIZED or FORBIDDEN)
          clear: true,
          // Redirect to login when 401 or 403 (UNAUTHORIZED or FORBIDDEN)
          redirectToLogin: true,
        },
        // Callbacks
        '403': null
      }
    };
  
    constructor(T, subSlug: any | null = '') {
      this.apiService = new CoreVerbsService();
      if (T === null) {
        this.T = null;
        this.path = subSlug;
      } else {
        if (T && T.getResourceName()) {
          this.T = T;
          if (!subSlug) {
            this.path = T.getResourceName();
          } else {
            this.path = subSlug;
          }
        }
      }
    }
    
    /**
     * Change temporary output model
     * ex: usersService->as(AnimalModel)->get();
     * @param {*} outputModel 
    */
    as(outputModel) {
      this.tempModel = this.T;
      this.T = outputModel;
      return this;
    }
    
    /**
     * Sub
     * INFO: T should be NULL if you dont want to instantiate the response's data
     * otherwise the responso will be instantiate using the default model
    */
    sub(subSlug, T = null) {
      return new CoreBaseService(
        typeof T !== 'undefined' ? T : this.T,
        `${this.path}/${subSlug}`
      );
    }
    
    /**
     * A custom call with free path/route
     * @param {*} url 
     * @param {*} T 
     */
    customCall(url, T = null) {
      return new CoreBaseService(
        typeof T !== 'undefined' ? T : this.T,
        url
      );
    }

    /**
     * Get action
     * @param {*} data 
    */
    get(code?, query = null, raw = false, deleteEmpty = false) {
      const getParams: {params} = {params: null};
      if (query) {
        getParams.params = query;
      }
      if (deleteEmpty) {
        Object.keys(getParams.params).forEach(key => {
          if (!getParams.params[key]) {
            delete getParams.params[key];
          }
        });
      }
      return this.apiService.get(this.getGetterPath(code), getParams.params)
        .then((item: CoreResponseModel) => {
          if (raw) {
            return item;
          }
          let dataRes = item.data;
          if (this.T) {
            if (Array.isArray(dataRes)) {
              const list: Array<any> = [];
              for (const record of dataRes) {
                let model = null;
                if (this.T) {
                  model = new this.T(record);
                  this.instantiateSubObjects(this.T, model);
                }
                list.push(model);
              }
              item.data = list;
            } else {
              dataRes = new this.T(dataRes);
              this.instantiateSubObjects(this.T, dataRes);
            }
          }
          this.afterCall(item.getData());
          return item;
        }).catch(catchError(this.errorHandl));
    }

    /**
     * Patch action
     * @param {*} data 
     * @param {*} code
    */
    update(data, code = -1) {
      return this.apiService.patch(this.getUpdatePath(data, code), data)
      .then((item: CoreResponseModel) => {
        if (this.T) {
          item.data = new this.T(item.data);
          this.instantiateSubObjects(this.T, item.data);
        }
        this.afterCall(item.getData());
        return item;
      }).catch(catchError(this.errorHandl));
    }

    /**
     * Delete action
     * @param {*} data 
    */
    delete(data = null, idSlug = true) {
      return this.apiService.delete(this.getDeletePath(data, idSlug), data )
      .then((item: CoreResponseModel) => {
        return item;
      }).catch(catchError(this.errorHandl));
    }

    /**
     * Delete action
     * @param {*} data 
    */
    deleteById(path, id) {
      return this.apiService.delete(path + id)
      .then((item: CoreResponseModel) => {
        return item;
      }).catch(catchError(this.errorHandl));
    }

    /**
     * Create action
     * @param {*} data 
    */
    create(data) {
      return this.apiService.post(this.getCreatePath(), data)
      .then((item: CoreResponseModel) => {
        if (this.T) {
          if (Array.isArray(item.data)) {
            const list: Array<any> = [];
            for (const record of item.data) {
              let model = null;
              if (this.T) {
                model = new this.T(record);
                this.instantiateSubObjects(this.T, model);
              }
              list.push(model);
            }
            item.data = list;
          } else {
            item.data = new this.T(item.data);
            this.instantiateSubObjects(this.T, item.data);
          }
        }
        this.afterCall(item.getData());
        return item;
      }).catch(catchError(this.errorHandl));
    }

    /**
     * Put action
     * @param {*} data 
    */
    put(data, code = null) {
      return this.apiService.put(this.getCreatePath(/*data, code*/), data)
      .then((item: CoreResponseModel) => {
        if(item.data.risultato == 'ko') {
          return item;
        }
        if (this.T) {
          if (Array.isArray(item.data)) {
            const list: Array<any> = [];
            for (const record of item.data) {
              let model = null;
              if (this.T) {
                model = new this.T(record);
                this.instantiateSubObjects(this.T, model);
              }
              list.push(model);
            }
            item.data = list;
          } else {
            item.data = new this.T(item.data);
            this.instantiateSubObjects(this.T, item.data);
          }
        }
        this.afterCall(item.getData());
        return item;
      }).catch(catchError(this.errorHandl));
    }
    
    /**
     * Instantiate response objects based on their models
     * @param {*} T 
     * @param {*} modelInstance 
    */
    instantiateSubObjects(T, modelInstance) {
      if (T.getSubTypesList) {
        if (T.getSubTypesList()) {
          T.getSubTypesList().forEach(item => {
            if (modelInstance[item.object]) {
              if(Array.isArray(modelInstance[item.object])) {
                modelInstance[item.object].forEach((z_item, z_index) => {
                  if(item.test) {
                    if(!item.test(modelInstance[item.object][z_index])) {
                      console.error(`${this.T.getResourceName()}: failed test for response property "${item.object}" at index ${z_index}`);
                    }
                  }
                  modelInstance[item.object][z_index] = new item.model(z_item);
                  try {
                    this.instantiateSubObjects(item.model, modelInstance[item.object][z_index]);
                  } catch (e) {
                    console.error('BaseService.instantiateSubObjects: possible redundancy. Ex: user<userModel>.data<userModel>');
                  }
                });
              } else {
                if(item.test) {
                  if(!item.test(modelInstance[item.object])) {
                    console.error(`${this.T.getResourceName()}: failed test for response property "${item.object}"`);
                  }
                }
                if(item.object) {
                  modelInstance[item.object] = new item.model(modelInstance[item.object]);
                }
                try {
                  this.instantiateSubObjects(item.model, modelInstance[item.object]);
                } catch (e) {
                  console.error('BaseService.instantiateSubObjects: possible redundancy. Ex: user<userModel>.data<userModel>');
                }
              }
            }
          });
        }
      }
    }

    /**
     * Format create path url
    */
    getCreatePath() {
      return `${this.path}`;
    }
    
    /**
     * Format get path url
    */
    getGetterPath(code) {
      return `${this.path}/${code ? code : ''}`;
    }
    
    /**
     * Format find path url (pagination)
    */
    getFindPath() {
      return `${this.path}`;
    }
    
    /**
     * Format update path url
    */
    getUpdatePath(data, code: any | null = null) {
      return `${this.path}/${code == -1 ? '' : code ? code : data.getId()}`;
    }
    
    /**
     * Format delete path url
    */
    getDeletePath(data, idSlug = true) {
      if (!data || !idSlug) {
        return `${this.path}`;
      }
      return `${this.path}/${data.getId()}`;
    }
  
    /**
     * Error handler
     * todo da finire
     * @param {*} error 
     */
    errorHandl = (error) => {
      // todo qui  bisogna standardizzare: vd. error.error
      this.afterCall();
      const errorData: any = {};
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorData.message = error.error.message;
      } else {
        // Get server-side error
        console.error(error);
        // UNAUTHORIZED or FORBIDDEN ?
        if (error.status === 401 /*|| error.status === 403*/) {
          // ? clear SESSION?
        }
        // Custom callbacks
        if (this.configuration.errors.hasOwnProperty(error.status)) {
          if (this.configuration.errors[error.status]) {
            this.configuration.errors[error.status](error);
          }
        }
      }
      // todo qui  bisogna standardizzare: vd. error.error
      return throwError(new CoreServiceErrorModel(error.message, error.error ? error.error.errors : error.errors, error.status, error.headers, error.error.data));
    }
  
    /**
     * After call
     * It is performed at each end of the call
    */
    afterCall(data?: any) {
      // Back to default model
      if (this.tempModel) {
        this.T = this.tempModel;
        this.tempModel = null;
      }
      if(this.reactState) {
        this.reactState(data);
      }
    }
  }
  
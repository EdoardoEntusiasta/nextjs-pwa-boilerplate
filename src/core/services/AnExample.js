

import { CoreBaseService } from '-core-'; 
import { EmployerModel } from '-my employer model-';
import { CoreVerbsService } from '-core verbs service-';

export class EmployerService extends CoreBaseService {

    constructor() {
        super(EmployerModel);
    }
      
    /**
     * CUSTOM EXTENSIONS
     * .....
     */
    getEmployers() {
        return this.apiService.get('/good?limit=4', null);
    }
  
  }
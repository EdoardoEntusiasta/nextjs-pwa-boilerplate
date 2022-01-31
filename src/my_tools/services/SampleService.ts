

import { CoreBaseService } from '@core/services/Base.service';
import { UserModel } from '@mytools/models/SampleModel';


export class UsersService extends CoreBaseService {

    constructor() {
        super(UserModel);
    }
      
    /**
     * CUSTOM EXTENSIONS
     * .....
     */
    getEmployers() {
        // return this.apiService.get('/good?limit=4', null);
    }
  
  }
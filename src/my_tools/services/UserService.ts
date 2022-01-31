import { CoreBaseService } from '@core/services/Base.service';

// Reference model
import { UserModel } from '@mytools/models/UserModel';

/**
 * An example of service
 * This service is linked to a model and the data returned by the verbs 
 * will be instantiated according to the reference model.
 * 
 * For more information look at CoreBaseService
 */
export class UsersService extends CoreBaseService {

    constructor() {
        super(UserModel);
    }


    // You can simply call UserService.get | .put | .create | .update | .delete 
    // or you can create your own methods as exposed below...


    /**
     * An example of a sub-route of the endpoint users
     * This translates as: GET API_ENDPOINT + /users/most-beautiful
     * As a second argument, you can specify a reference model other than the UserModel
     */
    getUserRoute() {
        return this.sub('most-beautiful').get(/** code, queryJson */);
    }

    /**
     * An example of custom call
     * This translates as: GET API_ENDPOINT + /my-endpoint
     */
    custom() {
        return this.customCall('my-endpoint').get();
    }
  
  }
import { CoreBaseModel } from '@core/models/Base.model';
import UserCertificationModel from './UserCertificationModel';

/**
 * Example model class
 * This class represents the object obtained through the Users endpoint
 * Methods for property manipulation can be added to this class.
 */
export class UserModel extends CoreBaseModel {
    
    /*
    name;
    surname;
    birthdate;
    certifications: Array<UserCertificationModel>;
    */

    /**
     * Service resource name (api endpoint)
     * process.env.NEXT_PUBLIC_API_ENDPOINT + '/users'
     */
    static getResourceName() {
        return 'users';
    }


    /**
     * Sub objects
     * These items will be instantiated following the associated reference models in the following array
     * In this example, the certifications object of the User object will be an instance of the UserCertificationsModel
     */
    static getSubTypesList() {
        return [
            { object: 'certifications', model: UserCertificationModel },
        ];
    }


    /**
     * In this example method we see how to get the age from the birthdate contained in the User object
     * @returns 
     */
    getAge() {
        // ! todo
        // return this.birthdate;
    }

}
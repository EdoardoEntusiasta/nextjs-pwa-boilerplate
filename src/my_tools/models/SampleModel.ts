import { CoreBaseModel } from '@core/models/Base.model';
import UserCertificationModel from './UserCertificationModel';

/**
 * Example model class
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
     */
    static getResourceName() {
        return  'users'; //'users';
    }

    /**
     * Sub objects
     */
    static getSubTypesList() {
        return [
            {object: 'certifications', model: UserCertificationModel},
        ];
    }

}
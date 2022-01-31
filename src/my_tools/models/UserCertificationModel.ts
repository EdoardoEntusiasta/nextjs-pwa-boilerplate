import { CoreBaseModel } from '@core/models/Base.model';

/**
 * Example model class
 */
export default class UserCertificationModel extends CoreBaseModel {
/*
    name;
    date;
*/
    /**
     * Service resource name (api endpoint)
     */
    static getResourceName() {
        return  'certifications'; //'users';
    }

}
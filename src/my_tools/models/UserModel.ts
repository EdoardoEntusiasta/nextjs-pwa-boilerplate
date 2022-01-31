import { CoreBaseModel } from '@core/models/Base.model';
import { IUser } from '@mytools/interfaces/IUser';
import UserCertificationModel from './UserCertificationModel';

/**
 * Example model class
 * This class represents the object obtained through the Users endpoint
 * Methods for property manipulation can be added to this class.
 */
export class UserModel extends CoreBaseModel implements IUser {
    
    /*
    name
    surname;
    birthdate;
    certifications;
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
        var today = new Date();
        var birthDate = new Date(this.birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    totalCerts() {
        return this.certifications.length;
    }

}
import { CoreBaseModel } from '@core/models/Base.model';

/**
 * Example model class
 */
export class UserModel extends CoreBaseModel {

    nome_cognome;
    iniziali;
    utente_id;
    nome;
    cognome;
    ruoli;
    unita;
    unita_primaria;
    unita_secondaria;
    dispo_rol_giorni;
    rol_usati;
    dispo_ferie_giorni;
    ferie_usati;
    dispo_altri_giorni;
    altri_usati;

    /**
     * Service resource name (api endpoint)
     */
    static getResourceName() {
        return  ''; //'users';
    }

    /**
     * Sub objects
     */
    static getSubTypesList() {
        return [
            /*{object: 'roles', model: MyRolesClassModel},*/
        ];
    }

}
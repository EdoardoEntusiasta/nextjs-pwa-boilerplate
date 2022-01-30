import { CoreBaseModel } from '- core base model -';
import { Model1 } from '.- my model 1-';
import { Model2 } from '- my model 2-';

/**
 * Example model class
 */
export class EmployerModel extends CoreBaseModel {

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
        return 'dipendenti';
    }

    /**
     * Sub objects
     */
    static getSubTypesList() {
        return [
            {object: 'ruoli', model: Model1},
            {object: 'unita', model: Model2}
        ];
    }

}
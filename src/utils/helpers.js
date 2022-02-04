

/**
 * TODO move to ./index
 */


import { fontTypes } from '@theme/Variables';

/**
 * IdGenerator
 */
export class IdGenerator {

    // ! never use this properties driectly
    static id = 0;
    static randIds = [];

    /*
     ** Generate uniq  
    */
    static getId() {
        return this.id++;
    }

    /*
     ** Generate uniq random id 
    */
    static randId(min = 1, max = 1000) {
        let randId = Math.floor(Math.random() * (max - min) + min);
        while(this.randIds.includes(randId)) {
            randId = Math.floor(Math.random() * (max - min) + min);
        }
        this.randIds.push(randId);
        return this.randIds[
            this.randIds.length - 1
        ];
    }
}

/**
 * Location
 */
export class Location {

    static getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

}

/**
 * String
 */
export class String {

    static slug (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
        // remove accents, swap ñ for n, etc
        let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        let to   = "aaaaeeeeiiiioooouuuunc------";
        for (let i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return str;
    }

    static random(length = 5) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

}


export const placeholderImages = {
    r11: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt4b69e24a7c3fafe9/616d4709ab14514f7620ec31/1-1.jpg',
        width: 1200,
        height: 1200,
    },
    r85: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt6d1c37236fa852f2/616d470a7f64554d7ba43fb0/8-5.jpg',
        width: 1600,
        height: 1000,
    },
    r54: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blta09b29dc2d96d40a/616d4709b938f14e336d5053/5-4.jpg',
        width: 1000,
        height: 800,
    },
    r43: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blt9cbaef04c2ae8a3e/616d470aaebd59598f329212/4-3.jpg',
        width: 1200,
        height: 900,
    },
    r169: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/bltb695134fca36ecc2/616d470a16c4734f77d10b1f/16-9.jpg',
        width: 3200,
        height: 1800,
    },
    r169i: {
        src: 'https://images.contentstack.io/v3/assets/blt7ce533d75511ae7b/blte6564daf8218001d/616d470a6bd2194efdbec17a/16-9-inverted.jpg',
        width: 3200,
        height: 1800,
    },
};

export const getModifiers = (array, objects) => {
    let modObject = {};

    if (!!objects) {
        modObject = { ...objects };
    }

    if (!!array && array.constructor === Array && array.length > 0) {
        array.forEach((mod) => {
            modObject = { ...modObject, [mod]: 'true' };
        });
    }

    return modObject;
};

export const remCalc = (px) => {
    return px / fontTypes.sm.bodySmall + 'rem';
};


import { Mode } from '../../Setup';
import { USERDATA_SLUG } from '../Models/Response.model';


export class CoreStorageService {

  /**
   * Alternative to localStorage
   */
  Store = {};

  /**
   * Data that must be saved only in localStorage
   */
  sessionData = [
    'userdata',
    'phpsessid',
    'bearer',
    'userversion',
    'lastupdatecheck'
  ];

  constructor(
    ) {
  }

  /**
   * Put in storage
   */
  get(key, forceLocalStorage = false) {
    if (Mode.STORAGE_DRIVER === 'localStorage' || this.sessionData.includes(key) || forceLocalStorage) {
      try {
        const value = localStorage.getItem(key);
        if (value) {
          return JSON.parse(localStorage.getItem(key));
        } else {
          return null;
        }
      } catch (e) {
        console.error(`StorageService. Invalid data for key: ${key}. Try to empty the storage`);
      }
    } else {
      if (this.Store.hasOwnProperty(key)) {
        return this.Store[key];
      } else {
        return null;
      }
    }
  }

  /**
   * Get all
   * return all memorized objects
   */
  getAll(onlyInLocalStorage = false) {
    if (Mode.STORAGE_DRIVER === 'localStorage' || onlyInLocalStorage) {
      const archive = {};
      const keys = Object.keys(localStorage);
      let i = keys.length;
      while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
      }
      return archive;
    } else {
      return JSON.parse(JSON.stringify(this.Store));
    }
  }

  /**
   * Get from storage
   */
  set(key, data, forceLocalStorage = false) {
    if (Mode.STORAGE_DRIVER === 'localStorage' || this.sessionData.includes(key) || forceLocalStorage) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      this.Store[key] = data;
    }
  }

  /**
   * Forget value
   */
  forget(key, forceLocalStorage = false) {
    if (Mode.STORAGE_DRIVER === 'localStorage' || this.sessionData.includes(key) || forceLocalStorage) {
      localStorage.removeItem(key);
    } else {
      delete this.Store[key];
    }
  }

  /**
   * Clear session's data
   */
  clearSession() {
    if (Mode.AUTH_TYPE.toLowerCase() === 'bearer') {
      this.forget('bearer');
    } else if (Mode.AUTH_TYPE.toLowerCase() === 'phpsessid') {
      this.forget('phpsessid');
    }
    this.forget(USERDATA_SLUG);
  }

}

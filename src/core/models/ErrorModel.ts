

/**
 * Error's model
 * * todo
 * for a better error management
 */

export class CoreErrorModel {

  /*
  status:
  error: 
  */

  constructor(data) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
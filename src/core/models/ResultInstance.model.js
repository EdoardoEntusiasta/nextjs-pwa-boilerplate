/**
 * Response Model
 * If the server's response is modified this model is the only file to modify (and ResponseInterface )
 */
export class CoreResultInstanceModel  {

    data = null;
  
    constructor(response) {
      this.data = response;
    }
  
    // todo orderby con proprietà alternative vd. esempio quil
    /*ì
      function compare( a: TeamModel, b:TeamModel ) {
          if ( (a.nickname ? a.nickname : a.firstname) < (b.nickname ? b.nickname : b.firstname) ) {
              return -1;
          }
          if ( (a.nickname ? a.nickname : a.firstname) > (b.nickname ? b.nickname : b.firstname) ) {
              return 1;
          }
          return 0;
      }
    */
  
    orderByProperty(property) {
        // todo order type DESC ASC
        if(Array.isArray(this.data)) {
          function compare(a, b) {
              if ( a[property] < b[property] ) {
                  return -1;
              }
              if ( a[property] > b[property] ) {
                  return 1;
              }
              return 0;
          }
          this.data.sort(compare);
        } else {
            console.warn('ResultInstanceModel.orderBy: not array')
        }
        return this;
    }
  
    log() {
        console.log(this.data);
    }
  
    clone() {
        // note: the instances will be lost
        return JSON.parse(JSON.stringify(this.data)); 
    }
  
    filter(filterFunc = null) {
        return this.data.filter(filterFunc);
    }
  
  }
  
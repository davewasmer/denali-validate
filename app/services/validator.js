import tv4 from 'tv4';
import { inject, Service, Errors } from 'denali';
import forEach from 'lodash/collection/forEach';

export default Service.extend({

  validators: inject('validator:*'),

  init() {
    this._super(...arguments);
    forEach(this.validators, (validator, name) => {
      tv4.addFormat(name, validator);
    });
  },

  validate(data, schema) {
    let result = tv4.validateResult(data, schema);
    if (result.error) {
      let error = new Errors.UnprocessableEntity(result.error.message);
      if (typeof result.error.dataPath === 'string') {
        error.source = {
          pointer: result.error.dataPath
        };
      }
      result.error = error;
    }
    return result;
  }

});

import { Filter, Errors, inject } from 'denali';
import isEmpty from 'lodash/lang/isEmpty';

export default Filter.extend({

  validator: inject('service:validator'),

  before(params) {
    let schema = this.expect;
    if (schema) {
      if (isEmpty(params)) {
        return this.render(new Errors.BadRequest('Your request is missing a request body, which is required for this endpoint.'));
      }

      let result = this.validator.validate(this.request.body, schema);
      if (!result.valid) {
        return this.render(new Errors(422, result.error.message, {
          code: 'ValidationFailed',
          source: {
            pointer: result.error.source.pointer
          }
        }));
      }
    }
  }

});

import React, {PropTypes} from 'react';

const renderField = field => (
  <fieldset className="form-group">
    <label>{field.placeholder}</label>
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="alert alert-danger" role="alert"><span>{field.error}</span></div>}
  </fieldset>
);

export default renderField;
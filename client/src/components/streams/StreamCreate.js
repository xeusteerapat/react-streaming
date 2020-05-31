import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    return (
      <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
        <label htmlFor=''>{label}</label>
        <input {...input} autoComplete='off' />
        <div className='ui error message'>
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <h1>Create New Stream</h1>
        <form
          className='ui form error'
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name='title'
            label='Enter Title'
            component={this.renderInput}
          />
          <Field
            name='description'
            label='Enter Description'
            component={this.renderInput}
          />
          <button className='ui button primary'>Create</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter stream title';
  }
  if (!formValues.description) {
    errors.description = 'Please enter stream description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

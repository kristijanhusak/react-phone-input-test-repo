import React from 'react';
import Phone from 'react-phone-number-input';
import { Field, reduxForm } from 'redux-form';

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field
          name="phone"
          component={ Phone } />
      </div>
      <div>
        <label htmlFor="phone_default">Phone Default</label>
        <Field
          name="phone_default"
          component="input" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'contact'
})(ContactForm);

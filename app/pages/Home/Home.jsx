import React from 'react';
import MyForm from './MyForm';

export default class Home extends React.Component {
  render() {
    return (
      <div className="app-home">
        <MyForm
          initialValues={{
            firstName: 'test',
            phone: '+441632960661',
            phone_default: '+441632960661'
          }}/>
      </div>
    );
  }
}

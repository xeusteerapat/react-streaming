import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {
  handleSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create New Stream</h3>
        <StreamForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

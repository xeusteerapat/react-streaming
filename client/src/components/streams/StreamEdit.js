import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

export class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  renderSteam() {
    if (!this.props.stream) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui large text loader'>Loading</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderSteam()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

export class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

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
        <h1>{this.props.stream.title}</h1>
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Edit The Stream</h1>
        {this.renderSteam()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

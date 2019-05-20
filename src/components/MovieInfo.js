import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="dark" onClick={this.toggle}>More Info</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <h5>{this.props.title}</h5>
          <h5>({this.props.date.substring(0, 4)})</h5>
          </ModalHeader>
          <ModalBody>
          <p>{this.props.overview}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MovieInfo;
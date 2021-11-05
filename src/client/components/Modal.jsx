import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Modal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Abstract</Modal.Title>
          </Modal.Header>
          <Modal.Body>External Article</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Modal;
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import axios from 'axios'

export default class SimpleModal extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {
        name : '',
        type : '',
        price: '',
        rating : '',
        years : '',
        available : false,
        showModal : false,
     }
    }
    handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

     handleOpen = () => {
     this.setState({
      showModal : true
     })
    };
  
     handleClose = () => {
      this.setState({
        showModal : false
      }) 
    };

    handleSubmit = () => {
      const { name, type, price, rating, years } = this.state
      const sendData = { name: name , type: type , price: price , rating: rating , years: years } 
      axios
      .post("http://localhost:3000/product" , sendData )
      .then(response => {
        console.log(response , 'data send');
        
      })
      .catch(error => console.log(error));
    }

    render() {
        const { name, type, price, rating, years, available , showModal } = this.state
        return (
        <div>
          <button type="button" onClick={this.handleOpen}>
           Création nouveau produit
          </button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={showModal}
            >
            <div>
              <form noValidate autoComplete="off">
              <TextField
                name='name'
                id="standard-name"
                label="Model"
                value={name}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="standard-name"
                name='type'
                label="type"
                value={type}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
              id="standard-number"
              name ='price'
              label="Price"
              value={price}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
              shrink: true,
              }}
              margin="normal"
              />
              <TextField
              id="standard-number"
              name ='rating'
              label="Rating"
              value={rating}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
              shrink: true,
              }}
              margin="normal"
              />
              <TextField
              id="standard-number"
              name ='years'
              label="Years"
              value={years}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
              shrink: true,
              }}
              margin="normal"
              />
              </form>
              <button onClick = {this.handleClose}>X</button>
              <button onClick = {this.handleSubmit}>Send</button>
              <SimpleModal />
            </div>
          </Modal>
        </div>
        
          );
        }        
    }
  

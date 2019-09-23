import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class SimpleModal extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {
        name : '',
        type : '',
        price: '',
        rating : '',
        years : '',
        available: '',
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
      const {name, type, price, rating, years , available } = this.state
      const sendData = { name: name , type: type , price: price , rating: rating , years: years , available : available} 
      axios
      .post("http://localhost:3000/product" , sendData )
      .then(response => {
        console.log(response , 'data send');
      })
      .catch(error => console.log(error));
    }

    render() {
        const { name, type, price, rating, years, available, showModal } = this.state
        return (
        <div style={style.open}>
          <Button type="button" onClick={this.handleOpen}>
           Création nouveau produit
          </Button>
          <Modal style = {{width : 500}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={showModal}>
            <div>
              <form style={style.modal} noValidate autoComplete="off">
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
              margin="normal"
              />
              <TextField
              id="standard-number"
              name ='rating'
              label="Rating"
              value={rating}
              onChange={this.handleChange}
              type="number"
              margin="normal"
              />
              <TextField
              id="standard-number"
              name ='years'
              label="Years"
              value={years}
              onChange={this.handleChange}
              type="number"
              margin="normal"
              />
              <FormControl>
              <InputLabel htmlFor="available">Disponibilité</InputLabel>
                <Select
                  value={available}
                  onChange={this.handleChange}
                  inputProps={{
                   name: 'available',
                   id: 'available',
                  }}
                    >
                  <MenuItem value='Oui'>Oui</MenuItem>
                  <MenuItem value='Non'>Non</MenuItem>
                </Select>
              </FormControl>
              </form>
              <div style = {style.button}>
                <Button size="large" color="secondary"  onClick = {this.handleClose}>Close</Button>
                <Button size="large" color="primary" onClick = {this.handleSubmit}>Send</Button>
              </div>
            </div>
          </Modal>
        </div>
          );
        }        
      }
  

    const style = {
    open : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      marginLeft: '500px',
      width : '108%'
    },
      modal: {
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height : '300px',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        marginLeft: '500px',
        marginTop: '100px',
        },
    }

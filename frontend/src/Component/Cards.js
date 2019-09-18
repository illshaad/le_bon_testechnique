import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modals from './Modals'
import axios from 'axios';


export default class Cards extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {
          showModal: false
        }
    } 

    handleDelete =  (id) => {
       axios
      .delete(`http://localhost:3000/product/:${id}`)
      .then(response => {
        console.log(response,'delete product');
        
      })
      .catch(error => console.log(error));
    }

    handleClick = (event) => {  // switch the value of the showModal state
      this.setState({
        showModal: !this.state.showModal
      });
    }

    getComponent = () =>  {
      const { id, name, type, price, years, rating } = this.props
      console.log('state',this.state)
      if (this.state.showModal) {  // show the modal if state showModal is true
        return <Modals />
       } else {
        return null;
      }
    }
 
    render() {
      console.log('props', this.props)
        return (
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Model : {this.props.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Type : {this.props.type}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Price : {this.props.price} euros
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Note : {this.props.rating}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Garantie : {this.props.years}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={this.handleClick} label="Modifier"/>
                  {this.getComponent}
                <Button size="small" color="primary" onClick={()=>this.handleDelete(this.props.id)}>
                  Supprimer
                </Button>
              </CardActions>
            </Card>
          );
        }        
    }
  

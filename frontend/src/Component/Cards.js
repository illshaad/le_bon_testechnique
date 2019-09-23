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

    handleDelete = (id) => {
       axios
      .delete(`http://localhost:3000/product/:${id}`)
      .then(response => {
        console.log(response,'delete product');
      })
      .catch(error => console.log(error));
    }

  //   handleModify = (id) => {
  //     axios
  //    .put(`http://localhost:3000/product/:${id}`)
  //    .then(response => {
  //      console.log(response,'Modif product');
  //    })
  //    .catch(error => console.log(error));
  //  }

  //   getComponent = () =>  {
  //     console.log('state',this.state)
  //     if (this.state.showModal) {  // show the modal if state showModal is true
  //       return <Modals />
  //      } else {
  //       return null;
  //     }
  //   }
 
    render() {
      console.log('props', this.props)
        return (
            <Card style={style.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5"  component="h2">
                    Model : {this.props.name}
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                   Type : {this.props.type}
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                  Price : {this.props.price} euros
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                  Note : {this.props.rating}
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                   Garantie : {this.props.years}
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                   Disponibilité : {this.props.available}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Modifier
                </Button>
                <Button size="small" color="secondary" onClick={()=>this.handleDelete(this.props.id)}>
                  Supprimer
                </Button>
              </CardActions>
            </Card>
          );
        }        
    }
  
    const style = ({
      card: {
        maxWidth: '500px',
        marginBottom : '20px',
        marginTop : '20px',
        marginLeft : '500px',
        backgroundColor : 'rgb(27, 33, 80)',
        color : 'white'
      },
    });
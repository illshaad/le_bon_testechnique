import React , { Component } from 'react';
import Cards from './Component/Cards'
import Modals from './Component/Modals'

import './App.css';
import axios from "axios";

 class App extends Component {
  constructor(props){ 
    super(props) 
    this.state = {
        dataFetch : [] ,
       }
    }

    componentDidMount(){
      axios
      .get("http://localhost:3000/products")
      .then(response => {
      this.setState({
        dataFetch : response.data
        })
      })
      .catch(error => console.log(error));
    }

  render() {
    console.log(this.state.dataFetch , 'mon state');
    const CardList = this.state.dataFetch.map((data , i ) => {

      return (
      <Cards key = {i}
        id = {data._id}
        available = {data.available}
        name = {data.name}
        price = {data.price}
        rating = {data.rating}
        type = {data.type}
        years = {data.warranty_years}
      />
    )
    })
    return(
      <div className='app'>
        <Modals/>
        {CardList}
      </div>
    )
  }
}

export default App
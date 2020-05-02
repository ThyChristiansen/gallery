import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList';


class App extends Component {
  state = {
    galleryItems : [],
    currentPicture: {
      path:'',
      description:'',
      like: ''
    }
  }

  componentDidMount(){ //append data from getPictureData to DOM
    console.log('App load!');
    this.getPictureData();
  }

  handleClickPicture =() =>{
    console.log('picture clicked!');
  }

  getPictureData = () =>{ // send the GET request to get pictures data from server-side 
    console.log('in GET picture data');
    axios({ // use axios to get data
      url: '/gallery', // get data from /gallery link address
      method: 'GET' //use GET method to get data
    }).then(response =>{//if get data successful run the code in the function below
      console.log(response); //log out what we got
      this.setState({  
        galleryItems: response.data,// set the galleryItems array inside the state above that we have as a empty array to the array have data from server  
      })
    }).catch(err =>{ //if get resquest is not successful, log out the err
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList 
        galleryItems= {this.state.galleryItems}
        handleClickPicture = {this.handleClickPicture}
        /> 
      </div>

    );
  }
}

export default App;


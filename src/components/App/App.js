import React, { Component } from 'react';
import axios from 'axios'
import '../vendors/bootstrap.css';
import './App.css';

import GalleryList from '../GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


class App extends Component {
  state = { //save all of data in state object
    galleryItems: [],
    currentPicture: {
      path: '',
      description: '',
      likes: ''
    },
  }

  componentDidMount() { //append data from getPictureData to DOM
    console.log('App load!');
    this.getPictureData();
  }

  //using POST to allow user add new picture in DOM
  addPicture = () => {
    console.log('in POST picture');
    axios({
      url: '/gallery',
      method: 'POST',
      data: this.state.currentPicture, // send the data of properties in currentPicture object
    }).then((response) => {
      console.log(response);
      this.getPictureData(); //refest the DOM after post
    }).catch((err) => {
      console.log('Error in POST picture', err)
    })
  }

  updateLike = (picture, derection) => {
    let newCount = picture.likes; //create an newCount variable and set it equal new like
    if (derection === true) {
      newCount += 1; // if parameter is true -> new count will increment 1
    } else {
      newCount -= 1 //if parameter is false -> new count will decrement 1
    }
    console.log('in PUT like data');
    axios({
      url: `/gallery/like/${picture.id}`,//update the data in this address 
      method: 'PUT', //using PUT to update like counting
      data: { likes: newCount }, //update the object data like to be newCount  
    }).then(response => {
      console.log(response);
      this.getPictureData();//call the get request to update DOM right of the bat after we update
    }).catch(err => {
      console.log('Error in update data', err);
    })
  }

  getPictureData = () => { // send the GET request to get pictures data from server-side 
    console.log('in GET picture data');
    axios({ // use axios to get data
      url: '/gallery', // get data from /gallery link address
      method: 'GET' //use GET method to get data
    }).then(response => {//if get data successful run the code in the function below
      console.log(response); //log out what we got
      this.setState({
        galleryItems: response.data,// set the galleryItems array inside the state above that we have as a empty array to the array have data from server  
      })
      console.log(this.state.galleryItems);

    }).catch(err => { //if get resquest is not successful, log out the err
      console.log('Error in get data', err);
    })
  }

  deletePicture = (id) => { //when delete button is clicked, it will delete picture by id
    axios({
      url: `/gallery/${id}`,
      method: 'DELETE'
    })
      .then(response => {
        console.log(response);
        this.getPictureData(); //refest the DOM after delete
      }).catch(err => {
        console.log(err)
      })
  }

  handleChangeFor = (event, property) => { //create handleChangeFor function and call it when the input field changes
    this.setState({
      currentPicture: {
        ...this.state.currentPicture,
        [property]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => { // called when the add new picture is pressed
    console.log('submit clicked!');
    event.preventDefault();
    this.addPicture();
    this.clearUrlFields();
  }


  clearUrlFields = () => {// clear the field of the form reseting the url
    this.setState({
      currentPicture: {
        path: '',
        description: '',
        likes: ''
      },
    });
  }


  render() {
    return (//return what we want to show in DOM
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <main>
          {/* Placing the form here */}
          <GalleryForm
            handleChangeFor={this.handleChangeFor}
            handleSubmit={this.handleSubmit}
            currentPicture={this.state.currentPicture}
          />
          {/* <h1>{JSON.stringify(this.state.currentPicture.description)}</h1> */}

          {/* Placing the picture data here */}
          <div className="list-picture">
            <GalleryList
              galleryItems={this.state.galleryItems}
              updateLike={this.updateLike}
              addPicture={this.addPicture}
              deletePicture={this.deletePicture}
            />
          </div>

        </main>
      </div>
    );
  }
}

export default App; //export the date of App component


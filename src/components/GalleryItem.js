import React, { Component } from "react";
import { Button } from '@material-ui/core';

import swal from 'sweetalert';


class GalleryItem extends Component {
    state = {
        descriptionVisible: false, // set the description to be false to hind it
    }

    handleClickPicture = () => {
        console.log('picture clicked!');
        this.setState({
            // descriptionVisible: true // when the picture have been click,descriptionVisible will switch to true and show it up 
            descriptionVisible: !this.state.descriptionVisible // when the picture have been click,descriptionVisible will switch to true and show it up 
            // and the picture will go away when the user click on the picture again.
        })
    }

    handleDelete = () => { //when user click on delete button, this function will run

        console.log('delete clicked');
        console.log('id of picture to delete', this.props.pictureData.id);
        this.props.deletePicture(this.props.pictureData.id)
    }

    swal = ()=>{
        swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this picture!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! The picture has been deleted!", {
            icon: "success",
          });
          this.handleDelete();
        } else {
          swal("Picture is safe!");
        }
      });
    }

    render() {
        // console.log('in state: ', this.state.descriptionVisible); // log out the statut of descriptionVisible
        let detailDescription; // create a variable named detailDescription
        if (this.state.descriptionVisible) { // use the condition if to show picture's description if the user click on that picture
            detailDescription = ( //set detailDescription that we just create above to show the description
                <>
                    <p>Description: {this.props.pictureData.description}</p>
                </>
            )
        }

        return (//return what we want to show in DOM
            <div className="picture-data">
                <p>Click on picture for description.</p>
    
                <p className= "description">
                {detailDescription}
                 </p>

                <img
                    src={this.props.pictureData.path}
                    alt="my_picture"
                    width='200px'
                    height='200px'
                    onClick={this.handleClickPicture}
                />
                <div className="deleteBtn">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        // startIcon={<DeleteIcon />}

                        onClick={this.swal}
                    >
                        Delete</Button>
                </div>

                <div className="likeField">
                    <p className="countLike">
                        {this.props.pictureData.likes}
                    </p>
                    <div className="likeBtn">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => this.props.updateLike(this.props.pictureData, true)}
                        >
                            Like
                    </Button>
                    </div>

                </div>
            </div>
            //{detailDescription} is the description data after change event work
            // {countlike} is the like data will change after event work
        )
    }
}

export default GalleryItem;
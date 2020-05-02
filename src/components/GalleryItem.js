import React, { Component } from "react";

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

    handleLikeBtn = () => { //handle like button 
        console.log('like button clicked!')
        this.setState({
        })
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
        // let countlike;
        // if(this.state.like){ //if the user click on the like button the like property like in state will switch to true 
        //     this.props.pictureData.likes += 1; // and if like is true, like data will increment 1
        // }else {
        //     this.props.pictureData.likes = 0 // if the user click like button again, it will switch to false and set the like data to be 0 
        // }

        return (//return what we want to show in DOM
            <>
                <img
                    src={this.props.pictureData.path}
                    alt="my_picture"
                    width='300px'
                    height='300px'
                    onClick={this.handleClickPicture}
                />
                <button>Delete</button>

                {detailDescription}
                <div>
                    Like: {this.props.pictureData.likes}
                    <button onClick={() => this.props.updateLike(this.props.pictureData, true)}>Like</button>



                </div>
            </>
            //{detailDescription} is the description data after change event work
            // {countlike} is the like data will change after event work


        )
    }
}

export default GalleryItem
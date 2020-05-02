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

    render() {
        console.log('in state: ', this.state.descriptionVisible); // log out the statut of descriptionVisible
        let detailDescription; // create a variable named detailDescription
        if (this.state.descriptionVisible) { // use the condition if to show picture's description if the user click on that picture
            detailDescription = ( //set detailDescription that we just create above to show the description
                <>
                    <p>Description: {this.props.pictureData.description}</p>
                </>
            )
        }

        return (//return what we want to show in DOM
            <>
                <img src={this.props.pictureData.path} width='300px' height='300px' onClick={this.handleClickPicture} />
                <p>Like: {this.props.pictureData.likes}</p>
                {detailDescription}
            </>
        )
    }
}

export default GalleryItem
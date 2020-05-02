import React, { Component } from "react";

class GalleryItem extends Component {
    render() {
        return (
            <>
                <img src={this.props.pictureData.path} width='300px' height='300px' onClick = {this.props.handleClickPicture}/>
                <p>Description: {this.props.pictureData.description}</p>
                <p>Like: {this.props.pictureData.likes}</p>
            
            </>
        )
    }
}

export default GalleryItem
import React, { Component } from "react";

class GalleryList extends Component { //create an class to store data
    render() { //append data to DOM with render
        return (
            //    <h4>{JSON.stringify(this.props.galleryItems)}</h4> 
            <>
                {this.props.galleryItems.map((picture) => { //loop though the array galleyItems with paramether is picture to display pictures in DOM
                    return (
                        <div key={picture.path}>
                            <img src= {picture.path} width='300px' height='300px' />}
                            <p>Description: {picture.description}</p>
                            <p>Like: {picture.likes}</p>
                        </div>
                    )
                })}
            </>
        )

    }
}

export default GalleryList;
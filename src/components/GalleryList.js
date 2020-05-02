import React, { Component } from "react";
import GalleryItem from './GalleryItem';

class GalleryList extends Component { //create an class to store data
    render() { //append data to DOM with render
        return (
            //    <h4>{JSON.stringify(this.props.galleryItems)}</h4> 
            <>
                {this.props.galleryItems.map((picture) => { //loop though the array galleyItems with paramether is picture to display pictures in DOM
                    return (
                        <>

                            <GalleryItem
                                key={picture.path}
                                pictureData={picture}
                                galleryItems={this.props.galleryItems}
                            />

                        </>
                    )
                })}
            </>
            //line 11 - 14 I save the data from GalleryItem component there. Also send the stuffs that GalleryItem need to display the data
        )
    }
}

export default GalleryList;
import React, { Component } from "react";
import PropTypes from 'prop-types'

class Picture {
    constructor(picture = '') {
        this.path= picture;
    }
};

class GalleryForm extends Component {
    state = new Picture();

    handleChangeFor = (event) => { //create handleChangeFor function and call it when the input field changes
        this.setState(new Picture(event.target.value));
    }

    handleSubmit = (event) => { // called when the add new picture is pressed
        event.preventDefault();
        this.props.addPicture(this.state);
        // this.clearUrlFields();

    }

    // clearUrlFields = () => {// clear the field of the from reseting the url
    //     this.setState(
    //         new Picture()
    //     );
    // }
    render() {
        return (
            <>
                <h1>hello from form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.path}
                        placeholder='Add url'
                        onChange={this.handleChangeFor}
                        name= "path"
                    />
                    <input type="submit" value="Add picture" />
                </form>

            </>
        )
    }
}

GalleryForm.propTypes = {
    path: PropTypes.func.isRequired,
};


export default GalleryForm;
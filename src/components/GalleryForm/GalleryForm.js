import React, { Component } from "react";
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';



import '../App/App.css';



class GalleryForm extends Component {
    render() {
        return (
            < div >
                <form onSubmit={this.props.handleSubmit}
                    className="SubmitForm">
                    <p className="form-title"> Add picture here: </p>

                    <Input
                        value={this.props.currentPicture.path}
                        placeholder='Add url'
                        onChange={(event) => this.props.handleChangeFor(event, 'path')}
                        name="path"
                        className="input input-url"
                        id="mui-theme-provider-standard-input"

                    /><br />
                    
                    <TextField
                        value={this.props.currentPicture.description}
                        onChange={(event) => this.props.handleChangeFor(event, 'description')}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                        className="input-description"
                    /><br />

                    <button variant="contained"
                        type="submit"
                        value="Add picture"
                        className="add-btn btn">
                        Add
                        </button>
                    <p className="note">* Click on picture to show description.<br />
                        <span>* Click on description to swap back the picture.</span></p>


                </form>


            </div >
        )
    }
}

GalleryForm.propTypes = {
    path: PropTypes.func.isRequired,
};

export default GalleryForm;
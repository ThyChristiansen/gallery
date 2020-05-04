import React, { Component } from "react";
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';



import '../App/App.css';



class GalleryForm extends Component {
    render() {
        //effect mouse enter and mouse leave for add button
        function mouseEnter(e) {
            e.target.style.background = '#b2a69d';
            e.target.style.boxShadow = '1px 2px 2px gray';

          }
          function mouseLeave(e) {
            e.target.style.background = '#c7b7a7';
            e.target.style.boxShadow = '1px 2px 2px lightgray';

          }
          
        return (
            < div >
                <form onSubmit={this.props.handleSubmit}
                    className="SubmitForm">
                    <p className="form-title"> Add picture here: </p>

                    <Input
                        value={this.props.currentPicture.path}
                        placeholder='url'
                        onChange={(event) => this.props.handleChangeFor(event, 'path')}
                        name="path"
                        className="input input-url"
                        id="mui-theme-provider-standard-input"
                    /><br />
                    
                   

                    <TextField
                        value={this.props.currentPicture.description}
                        onChange={(event) => this.props.handleChangeFor(event, 'description')}
                        id="outlined-multiline-static"
                        label=" Description"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                        className="input-description"
                    /><br />

                    <button variant="contained"
                        type="submit"
                        value="Add picture"
                        className="add-btn btn"
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}

                        >
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
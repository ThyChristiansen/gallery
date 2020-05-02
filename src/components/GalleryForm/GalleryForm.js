import React, { Component } from "react";
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import '../App/App.css';


class GalleryForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}
                    className="SubmitForm">
                    <p className="form-title"> Add more picture here</p>

                    <input
                        value={this.props.currentPicture.path}
                        placeholder='Add url'
                        onChange={(event) => this.props.handleChangeFor(event, 'path')}
                        name="path"
                        className="input-field"
                    />
                    <input
                        value={this.props.currentPicture.description}
                        placeholder='Add description'
                        onChange={(event) => this.props.handleChangeFor(event, 'description')}
                        name="description"
                        className="input-field-description"
                    />

                    <Button variant="contained"
                        type="submit"
                        value="Add picture"
                        className="root">
                        Add
                        </Button>
                </form>

            </div>
        )
    }
}

GalleryForm.propTypes = {
    path: PropTypes.func.isRequired,
};

export default GalleryForm;
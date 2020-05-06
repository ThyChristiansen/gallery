import React, { Component } from "react";

import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';





class GalleryItem extends Component {
    state = {
        pictureVisible: true, // set the description to be true to show it frist
        descriptionVisible: false, // set the description to be false to hind it
    }

    useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    handleClickPicture = () => {
        console.log('picture clicked!');
        this.setState({
            // descriptionVisible: true // when the picture have been click,descriptionVisible will switch to true and show it up 
            descriptionVisible: !this.state.descriptionVisible, // when the picture have been click,descriptionVisible will switch to true and show it up 
            // and the picture will go away when the user click on the picture again.
            pictureVisible: !this.state.pictureVisible, // the same with description
        })
    }

    handleDelete = () => { //when user click on delete button, this function will run

        console.log('delete clicked');
        console.log('id of picture to delete', this.props.pictureData.id);
        this.props.deletePicture(this.props.pictureData.id);
    }

    swal = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your picture has been deleted.',
                    'success'
                )
                this.handleDelete();

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your picture is safe :)',
                    'error',
                )
            }
        })
    }

    render() {
        // console.log('in state: ', this.state.descriptionVisible); // log out the statut of descriptionVisible
        let detailDescription; // create a variable named detailDescription
        let picture;
        if (this.state.descriptionVisible) { // use the condition if to show picture's description if the user click on that picture
            detailDescription = ( //set detailDescription that we just create above to show the description
                <p className="text-description" onClick={this.handleClickPicture} //when the user click on description, it will show the picture
                >Description: {this.props.pictureData.description}</p>
            )
        }
        if (this.state.pictureVisible) {//when the user click on picture, it will show the description
            picture = (
                <img
                    src={this.props.pictureData.path}
                    alt="my_picture"
                    width='200px'
                    height='200px'
                    onClick={this.handleClickPicture}
                />
            )
        }

        //effect mouse over and mouse leave to pictures
        function mouseEnter(e) {
            e.target.style.boxShadow = '1px 2px 4px gray';
        }
        function mouseLeave(e) {
            e.target.style.boxShadow = '1px 2px 2px lightgray';
        }

        const classes = this.useStyles;



        return (//return what we want to show in DOM
            <div className="picture-data">
                <div>
                    <p className="description"
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        {detailDescription}
                        {picture}

                    </p>

                </div>


                <div className="deleteBtn">
                    <span
                        onClick={this.swal}
                    >
                        {/* <img src="images/bin.png" width="30" height="30" ></img> */}
                        <IconButton aria-label="delete"
                            className={classes.margin}>
                            <DeleteIcon />
                        </IconButton>
                    </span>

                </div>



                <div>

                </div>
                <div className="likeField">
                    <span className="icon-heart"
                        onClick={() => this.props.updateLike(this.props.pictureData, true)}
                    >
                        <img src="images/heart.png" width="20" height="20" ></img>
                    </span>

                    <p className="countLike">
                        {this.props.pictureData.likes}
                    </p>

                    {/* <div className="likeBtn"> //this is the piece of code of the like button that I created before by Material-UI
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => this.props.updateLike(this.props.pictureData, true)}
                        >
                            Like
                    </Button> */}
                    {/* </div> */}

                </div>
            </div>
            //{detailDescription} is the description data after change event work
            // {countlike} is the like data will change after event work
        )
    }
}

export default GalleryItem;
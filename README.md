# React-gallery

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?
* : problem
- : how I solve it

*  Retrieve (`GET`) data from to `/gallery` and store it in `App.js`.
    -  Frist, I go to the file `gallery.data.js` in modules folder to save my pictures the data in server. 
    -  Then I go to `App.js` file to show my pictures with tag pair <img>.
    -  And to get my picture data. I have to create an GET request inside the component class to get my picture data from server. Beside send the GET request, I also create an state object to save / store my data which I will pull from server over.

* Passing the gallery data stored in `App` via `props` to `GalleryList` component.
    - To do this, I create a component name `GalleryList`. Using import and export to connect component App with component GalleryList.
    - Then I pass `galleryItems` from app to GalleryList via `props`.

* Display all of the images on the screen.
    - To display pictures, I use .map() to loop though the galleryItems array then append display all of them from GalleryList`file.

* Use new child component to store the individual gallery
    - I create a file named `GalleryItem.js`. Then I also will connect them by import and export. 

* Swap the image with the description on click.
    - To do this, I will use Conditional Rendering. I create a function `handleClickPicture` in the `GalleryItem.js` file to when the user click on each picture, it's description will show up.

* Like button on click
    - I make it the same way with the description.

* When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`. Update the gallery each time a like button is clicked.
    - In file App.js, I will create a function to update like data. Then I do the condition to when the button is clicked, the like data will have been updated.

* Create a database table 
    - I use Postico to create my database table.

* Add an new component to user can add new pictures
    - To to this, I create an new component name GalleryForm.js to create a form for the user can input new picture. 
        - In the form I have an input field and an button.
    -After setup the form. In the `App.js` file, I create functions take data from the input feild send it to server and from server send it to database. 
    - I create a `pool.js` file to setup conecting server with my database. Then I create GET, POST, PUT route in `gallery.router.js` to get data, send data, and update data between database and server.

* Ability to delete a gallery item
    - First, I create delete button for each of the picture in `galleryItem.js`
    -  Then I also have to setup DELETE route in `gallery.router.js to remove the picture from the database.
    - To delete item from the client side, I create an handle delete function to delete.
    


     


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

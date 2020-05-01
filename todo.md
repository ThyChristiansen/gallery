### Setup
 [x] Adding picture to `public/images folder
 [x] Running the server code requires `nodemon` or npm install nodemon --global
 [x] npm install  +   npm run server
 [x] start the react client app: npm run client

## Base
   create a gallery page to share pictures of things that are important. Visitors can click on an image to see a description and use a button to "like" an image.

  # Task List
    [] Retrieve (`GET`) data from to `/gallery` and store it in `App.js`.

    [] Building the gallery using mulitple components:
      [] `App` - represents the overall application or site 
      [] `GalleryList` 
         [] pass the gallery data stored in `App` via `props`.
         [] Iterate (loop over) the list of gallery data.
         [] Display all of the images on the screen.
     [] `GalleryItem` 
        [] Pass the individual gallery item via `props`. 
        [] Update the `GalleryList` to use this component to display an image.
        [] Swap the image with the description on click.
        [] Display the number likes for each item and include a like button.
        [] When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
        [] Update the gallery each time a like button is clicked.

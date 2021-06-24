import Masonry from "masonry-layout/masonry";

// vanilla JS
// init with element
var grid = document.querySelector('.info-boxes.masonry .info-boxes__repeater');

if(grid){
    var msnry = new Masonry( grid, {
    // options...
    itemSelector: '.info-box',
    gutter: 30,
    horizontalOrder: true,

    });
} else {}

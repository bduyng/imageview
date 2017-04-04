var AvImageview = require("av.imageview");

//Defining URLs
var photos = [
    "http://www.gstatic.com/webp/gallery/1.webp",
    "http://www.gstatic.com/webp/gallery/2.webp",
    "http://www.gstatic.com/webp/gallery/3.webp",
    "http://www.gstatic.com/webp/gallery/4.webp",
    "http://www.gstatic.com/webp/gallery/5.webp",
    "https://media.giphy.com/media/km2mais9qzYI/giphy.gif",
    "https://media.giphy.com/media/pX4qCZekYXTYQ/giphy.gif",
    "https://media.giphy.com/media/l3vReGzswwHM71OBq/giphy.gif",
    "https://media.giphy.com/media/y9puj0xl8PIbu/giphy.gif",
    "https://media.giphy.com/media/SpHGOPeYkb5ao/giphy.gif",
    "https://media.giphy.com/media/scHQba6DM2rJu/giphy.gif",
    "https://media.giphy.com/media/l41lMMzTCBvXqtEUU/giphy.gif",
    "https://media.giphy.com/media/3ornjZLITGcFQVRbxK/giphy.gif",
    "https://media.giphy.com/media/3oz8xurtPJtYF8yynm/giphy.gif",
    "https://media.giphy.com/media/DGI3Vtv0IFtfO/giphy.gif",
    "https://media.giphy.com/media/26FLayL40fnlyboSA/giphy.gif",
    "https://media.giphy.com/media/efqBQ5OOnQehq/giphy.gif",
    "https://media.giphy.com/media/zhjOHjn10IUTe/giphy.gif",
    "https://media.giphy.com/media/3o6YghZV15YGZoOtIk/giphy.gif",
    "https://media.giphy.com/media/734AHlfXt8Fos/giphy.gif",
    "https://media.giphy.com/media/UGGfKrZOxcBdm/giphy.gif",
    "https://media.giphy.com/media/B4rnulXkCQlpu/giphy.gif",
    "https://media.giphy.com/media/NP5xy5955cfMk/giphy.gif",
    "http://www.nationalgeographic.com/content/dam/photography/photos/000/060/6018.ngsversion.1467254523217.adapt.1900.1.jpg",
    "http://www.italiangoodnews.com/wp-content/uploads/2014/11/italy-04.jpg",
    "http://wp-admin.goldenbird-italy.com/wp-content/uploads/2015/07/italy_2631046a.jpg",
    "http://www.travelviaitaly.com/wp-content/uploads/2015/12/Rome-Italy.jpg",
    "http://an.example.of.broken.link.image/"
];

//and creating data source for listview
var source = (function() {
    var array = [];

    photos.forEach(function(photo) {
        array.push({
            photo: {
                image: photo
            }
        });
    });

    return array;
})();

//UI
var default_template = {
    properties: {
        height: 160,
    },
    childTemplates: [{
        type: 'AvImageview.ImageView',
        bindId: 'photo',
        properties: {
            width: Ti.UI.FILL,
            height: 160,
            loadingIndicator: true,
            defaultImage: "/placeholder.png",
            brokenLinkImage: "/broken.png",
            contentMode: AvImageview.CONTENT_MODE_ASPECT_FILL
        }
    }]
};

var window = Ti.UI.createWindow({
    backgroundColor: "white"
});

var list_view = Ti.UI.createListView({
    defaultItemTemplate: 'default',
    templates: {
        'default': default_template
    }
});

var list_section = Ti.UI.createListSection();

list_section.items = source;
list_view.sections = [list_section];

window.add(list_view);
window.open();

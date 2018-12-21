var loadFile = function(event) {
var image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
};
var loadFile = function(event) {
var video = document.getElementById('output');
video.src = URL.createObjectURL(event.target.files[0]);
};
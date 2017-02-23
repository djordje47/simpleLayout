var i = 0;
var images = [];
var time = 4500;

images[0] = '../img/simpleSlider/image1.jpg';
images[1] = '../img/simpleSlider/image2.jpg';
images[2] = '../img/simpleSlider/image3.gif';

function changeImg(){
  var image = document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
    // ToDo Add a class to each image to have a transition
  }else{
    i = 0;
  }
  setTimeout('changeImg()', time);
}
window.onload = changeImg;
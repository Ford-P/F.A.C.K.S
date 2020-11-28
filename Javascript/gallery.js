var ImgSlides = [1,1];
var ImgId = ["Img1", "Img2"]
var PreviewId=["hovering", "hovering2"]
ShowImg(1,0);
ShowImg(1,1);

function Slides(index, num) {
  ShowImg(ImgSlides[num] += index, num);
}

function ViewSlide(index, num) {
  ShowImg(ImgSlides[num] += index, num);
}

function ShowImg(index, num) {
  var count;
  var next = document.getElementsByClassName(ImgId[num]);
  var thumbnail = document.getElementsByClassName(PreviewId[num]);

  if (index > next.length) {ImgSlides[num] = 1}
  if (index < 1) {ImgSlides[num] = next.length}
  for (count = 0; count <next.length; count++) {
      next[count].style.display = "none";
  }
  if (index > thumbnail.length) {ImgSlides[num] = 1}    
  if (index < 1) {ImgSlides[num] = thumbnail.length}
  for (count = 0; count < thumbnail.length; count++) {
    thumbnail[count].className = thumbnail[count].className.replace(" active", "");
  }
  next[ImgSlides[num]-1].style.display = "block";
  thumbnail[ImgSlides[num]-1].className += " active";

}


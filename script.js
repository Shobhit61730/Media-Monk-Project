// Javascript logic here
// querySelector is used for select the class name.
var slideimage=document.querySelector('.slideimg');
var images=['Fifth.png','firstimage.png','Fourth.png','second.png','Third.png'];
// This is an array
var i=0;//Current index of an array basically image start here.
// I used two buttons one of them is previous button all logic are here.
function previous(){
    if(i<=0) i = images.length;
    i--;
    return setImg();
}
// This is next button.
function Next(){
 if(i>=images.length-1) i=-1;
 i++;
 return setImg();
}
// I used setImg function for carousel the images.
function setImg(){
    return slideimage.setAttribute('src','images/'+images[i]);
    // I used setAttribute,it is provided by Javascript language.
    // In this we provide the source of the images or anything. 

}
// Javascript Ends here.
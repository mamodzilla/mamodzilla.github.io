var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.png') {
      myImage.setAttribute ('src','images/alert.jpg');
    } else {
      myImage.setAttribute ('src','images/pic1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are Dolbaib too, ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are Dolbaib too, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = 'Hello World!';
myHeading.onclick = function(){
    alert("Nice Click!");
};
var imageChange = document.querySelector('img');
imageChange.onclick = function(){
    var src = imageChange.getAttribute('src');
    if (src == "image/My test image.jpg")
        imageChange.setAttribute('src',"image/My test image2.jpg");
    else
        imageChange.setAttribute('src',"image/My test image.jpg");
}
function setUserName()
{
    var myName = prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'You are cooooooool!' + myName;   
}
if (!localStorage.getItem('name'))
    {
        setUserName();
    }
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent =  'You are cooooooool!' + storedName;
}
myButton.onclick = function()
{
    setUserName();
}
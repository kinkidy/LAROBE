// Initialize the plugin

$('#exampleSlider').multislider({
    interval:false
});


//decalring varible
const menuBtn = document.querySelectorAll('a');
const header = document.getElementsByClassName ('header');

const menuBtn2 = menuBtn[1];

//event listener
menuBtn2.addEventListener('click', () => {
    header.style.backgroundColor('red');
});

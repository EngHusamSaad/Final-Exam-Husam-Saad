// Deveplement By Husam Saad
// Date:16-09-2024


function search(searchinput){
    if(searchinput.value=="")
        alert("Search Bar Is Empty !!!!")
    else    
        alert(searchinput.value);  
}

function removeitem(element){  
    element.remove();
}


var sum=document.getElementById("maincounter");
var total=0;
function increaselikes(){
     total++;
     sum.innerText=total;
}


function previosphoto(currentimage){

    currentimage.src="Assets/Slider/bd-item-2.jpg"
}

function nextphoto(currentimage){

    currentimage.src="Assets/Slider/bd-item-1.jpg"
}
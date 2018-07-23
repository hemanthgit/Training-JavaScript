
// Global Empty Object app is created using Object Literal Syntax
var app = {};

// Adding a function show using function Literal  Syntax

// app.show =function(){
//     console.log("Inside the show function");
//     return 'Java Script Examples';
// }

app.show =function(title){
    console.log("Inside the show function");
    return title.toUpperCase();
}

app.init = function(){
    var greetButton = document.getElementById('showheading');
    greetButton.addEventListener('click', function(){
        // alert('hi');

        var majHead = document.getElementById('majHeading');
        // InnerHtml is a property.
        majHead.innerHTML=app.show();
    });
}

app.update = function(title){
    return function(){
        var majHead = document.getElementById('majHeading');
        majHead.innerHTML=app.show(title);
    }
}
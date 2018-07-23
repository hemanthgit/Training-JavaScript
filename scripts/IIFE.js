var app=(function(){
    console.log('iffe called');

    function greet(){
        return 'Hello world';
    }

    function calculate(inr){
        return inr * 65;
    }

    var msg = greet();
    console.log(msg);
    console.log(calculate(10));

    return {
        greeter : greet
    }
})();
console.log(app.greeter);

//greet(); // won't work here. because scope of greet() is inside IIFE block.
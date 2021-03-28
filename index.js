
function receivesAFunction(callback) {
    callback(() => console.log(`This is a function called ${callback}`));

}

function returnsANamedFunction(fn){
    return function fn() {
        console.log("wow this is a returned func")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hey there im anon");
    }
}
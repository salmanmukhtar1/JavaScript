let printNames = function() {
    console.log("Salman"); 
}

// printNames();

// setTimeout(printNames, 10000)
    
// setInterval(printNames, 1000);

let timer = setInterval(printNames, 1000);
// clearInterval(timer);

setTimeout(function() {
    clearInterval(timer);
}, 5000);
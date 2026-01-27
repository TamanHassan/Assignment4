//1
function helloCallback(cb) {
    cb("Hello, Callback!");
}
//2
function sayHelloLater(cb) {
    setTimeout(() => {
        cb("Hi I am late!");
    }, 2000);
}
//3
function addNumbers(a, b, cb) {
    const result = a + b;
    cb(result);
}
//4
function toUppercase(str, cb) {
    cb(str.toUpperCase());
    }

//5
function orderPizza(cb) {
    setTimeout(() => {
        cb("Your pizza is ready!");
    }, 3000);
}
//6
function multipleMessages(cb) {
    cb("First message");
    cb("Second message");
    cb("Third message");
}
//7
function downloadData(url, cb) {
    setTimeout(() => {
        cb(`Downloaded data from ${url}`);
    }, 2000);
}
//8
function successOrError(onSuccess, onError) {
    if (Math.random() > 0.5) {
        onSuccess("Success!");
    } else {
        onError("Something went wrong.");
    }
}
//9
function calculate(a, b, operation, cb) {
    let result;

    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }

    cb(result);
}

//10
function step1(cb) {
    setTimeout(() => {
        console.log ("Step 1 complete");
        cb();
    }, 1000);
}
function step2(cb) {
    setTimeout(() => {
        console.log ("Step 2 complete");
        cb();
    }, 1000);
}
function step3(cb) {
    setTimeout(() => {
        console.log ("Step 3 complete");
        cb();
    }, 1000);
}
 step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete");
    });
    });
     });
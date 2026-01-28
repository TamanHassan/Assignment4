//1 
const  helloCallback = (callback:(msg: string) => void) : void => {
    callback("hello from callback");
};



//2
const sayHelloLater = (callback:(msg: string) => void) : void => {
    setTimeout(() => {
        callback("hello from callback after 2 seconds");
    }, 2000);
};

sayHelloLater ((message) => {
    console.log(message);
});

//3
const addNumbers = (
    a: number,
    b: number,
    callback: (result: number) => void
) : void => {
    callback (a + b);
};
addNumbers(5, 10, (result) => {
    console.log(result);
});

//4 
const toUppercase = (
    test: string,
    callback: (result: string) => void
) : void => {
    callback (test.toUpperCase());
};
toUppercase("hello", (result) => {
    console.log(result);
});

//5
const orderPizza = (callback: (msg: string) => void) : void => {
    setTimeout(() => {
        callback("Your pizza is ready!");
    }, 3000);
};

orderPizza ((message) => {
    console.log(message);
});

//6
const multipleMessages = (callback: (msg: string) => void) : void => {
    callback("First message");
    callback("Second message");
    callback("Third message");
};
multipleMessages ((message) => {
    console.log(message);
});

//7
const downloadData =(
    url: string,
    callback: (msg: string) => void
) : void => {
    console.log("Downloading...");
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
};

downloadData("https://example.com", (message) => {
    console.log(message);
});

//8
const successOrError = (
    onSuccess: (msg: string) => void,
    onError: (msg: string) => void
) : void => {
    if (Math.random() > 0.5) {
        onSuccess("Success!");
    } else {
        onError("Error occurred!");
    }
};
successOrError (
    (successMsg) => { console.log(successMsg); },
    (errorMsg) => { console.log(errorMsg); }
);

//9
const calculate = (
    a: number,
    b: number,
    operation: string,
    callback:(result: number | string) => void)
    : void => {
    let result: number | string;
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b !== 0) {
                result = a / b;
            } else {
                result = b !== 0 ? a / b : "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    callback(result);
};
calculate(10, 5, "multiply", (result) => {
    console.log(result);
});


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

onsole.log("synchronous result", result);
console.log("run some code here");

//using callbacks now to fix undefined error ->

function addWithCallback(a, b, sum, callback){
    sum = a + b;
    callback(sum)
};

function printResult(value){
    console.log("callback result:", value)
}
setTimeout(() => addWithCallback(2, 3, result, printResult), 100);


setTimeout(() => addWithCallback(5, 7, result, printResult), 0);

console.log("running some more code")
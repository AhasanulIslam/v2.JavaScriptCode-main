const promise1 = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed Promise");
    }
    else{
        reject("Not Completed Promise");
    }
});


promise1
.then((res) => {
    console.log(res);
})
. catch((err) => {
    console.log(err);
});

console.log("End");
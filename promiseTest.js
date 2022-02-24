const taskone = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 1 Promise");
    }
    else{
        reject("Not Completed 1 Promise");
    }
});

const tasktwo = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 2 Promise");
    }
    else{
        reject("Not Completed 2 Promise");
    }
});

const taskthree = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 3 Promise");
    }
    else{
        reject("Not Completed 3 Promise");
    }
});
   

const taskfour = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 4 Promise");
    }
    else{
        reject("Not Completed 4 Promise");
    }
});
    

const taskfive = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 5 Promise");
    }
    else{
        reject("Not Completed 5 Promise");
    }
});

        
const tasksix = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise)
    {
        resolve("Completed 6 Promise");
    }
    else{
        reject("Not Completed 6 Promise");
    }
});

        

            taskone
            .then((res) => {
                console.log(res);
            })
            tasktwo
            .then((res) => {
                console.log(res);
            })
            taskthree
            .then((res) => {
                console.log(res);
            })
            taskfour
            .then((res) => {
                console.log(res);
            })
            taskfive
            .then((res) => {
                console.log(res);
            })
            tasksix
            .then((res) => {
                console.log(res);
            })
            . catch((err) => {
                console.log(err);
            });
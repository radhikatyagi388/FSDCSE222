function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("register here")
            resolve();
        }, 1000);
    });
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here");
            resolve();
        }, 5000);
    });
}
    
    
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      reject("login failed");
    }, 5000);
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getData here");
      resolve();
    }, 4000);
  });
}
function displayData() {
  setTimeout(() => {
    console.log("displayData here");
  }, 6000);
}
//callback Hell problem
/*register()
    .then(login)
.then(getData)
    .then(displayData)
    .then(displayData)
    .catch((err)=> {
    console.log("err:",err)
})*/
async function test() {
    try {
        await register();
        await login();
        await getData();
        displayData();
    }
    catch (err) {
        console.log("err:", err)
    }
}
test();

console.log("call another application")

// const setTimeoutId = setTimeout(() => { //setTimeout always returns an unique id from the current setTimeout
//     console.log('Hey from set timeout');
    
//     clearInterval(setIntervalId); // stops the interval for setIntervalId
// }, 5000);
// console.log(setTimeoutId);
// sum = 0
// //setInterval function returns an unique id for the current setInterval
// const setIntervalId = setInterval(() => {
//     sum += 1;   // sum = sum + 1
//     console.log(sum);
// }, 1000);

// window.addEventListener('unload', () => {
//     //teardown - asa se mai numeste clearTimeout
//     //debugger;   // this statement is used for debuging; the code will automatically stop there if the browser console is opened.
// clearTimeout(setTimeoutId);
// });


// set a string in local storage
//window.localStorage.setItem('key1', 'Ding Dong');
const user = {
    name: 'John',
    lastname: "Doe",
    age: 34
}
//we need to transform the object to a 'readable' string before saving it in the local storage, otherwise it will save [Object object].
localStorage.setItem('userData', JSON.stringify(user));

// get a string from local storage
const key1Val = localStorage.getItem('key1');
console.log(user);

const userDataFromLocalStorageStr = localStorage.getItem('userData');

// we need to tarnsform the string returned bu getItem back to the Object before accessing the object's properties.
const userDataFromLocalStorageObj = JSON.parse(userDataFromLocalStorageStr);

// Update user object
userDataFromLocalStorageObj.age = 22;
localStorage.setItem('userData', JSON.stringify(userDataFromLocalStorageObj));

//console.log(userDataFromLocalStorageObj.age);

// delete item from localStorage
localStorage.removeItem('key1');
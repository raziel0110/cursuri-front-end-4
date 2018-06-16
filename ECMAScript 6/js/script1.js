// this arrow

function expare(){
    this.isExpire = false;
    // arrow fn is taking the surronding scope and sets it as 'this',
    // so inside the setTimeout callback fn 'this' refers to the object with
    // isExpired key set to false

    setTimeout(() => {
        this.isExpire = true;
    },4000);

    return this.isExpire;
}

const expaire2 = expare.bind({});

console.log(expaire2());
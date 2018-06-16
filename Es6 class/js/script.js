// //ES6 classes are not hoiseted
// //call-ul unei clasee nu va merge inaintea classei propriu - zise



// class Post{
//     constructor(){
//         this.id = null;
//         this.title = "";
//         this.body = "";
//         this.userId = null;
//     }

//     // class prototype

//     fetchData(id){
//         //var that = this;
//         return $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
//             method : 'GET',
//             success : (data) => {
//                 this.id = data.id;
//                 this.title = data.title;
//                 this.body = data.body;
//                 this.userId = data.userId;
//             },
//             error : ()=>{
//                 console.log('Error');
//             }
//         });
//     }
//     // tot timpul Get-erele fac return
//     get getTitle(){
//         return this.title.toUpperCase();
//     }

//     // la SET e nevoie mereu de cel putin un parametru

//     set budy(bodyText){
//         if(bodyText){
//             this.body = bodyText;
//         } else {
//             this.body = "Loren ipsum....";
//         }
//     }

//     static formatText(textToFormat){
//         return textToFormat + '...';
//     }
// }

// const currentPost = new Post();
// currentPost.title = "Some String";
//     currentPost.fetchData(4).then((response)=>{
//         //console.log(response);
//     });
// console.log(currentPost);
// // call setter
// currentPost.budy = 'Summer body'; 
// console.log('helllllooooooooo',currentPost.body);

// currentPost.budy = "";
// console.log("Nothing",currentPost.body);
// console.log(currentPost.title);
// console.log(currentPost.getTitle);

// //apelare methoda static

// const formatted = Post.formatText(currentPost.body);
// currentPost.budy = formatted;
// console.log(formatted);

// // class inheritance

// class Animal{
//     constructor(){
//         this.name = "";
//         this.age = 0;
//         this.weight = 0
//     }

//     speak(){
//         alert('Speaking like an animal');
//     }

//     eat(){
//         console.log('Nom Nom');
//     }
// }

// class Dog extends Animal{
//     constructor(){
//         super();//needs to be invoked before using 'this' in subclasses
//         //class specific attributes
//         this.breed  = "";    
//     }

//    playFetch(){
//        console.log('im happy to playt fetch');
//    }

//    speak(){
//        console.log('bark bark');
//    }
// }

// const a = new Animal();
// console.log(a);
// const d = new Dog();
// console.log(d);
// //eat method is invoked from parent class
// d.eat();
// //breed is an attribute from dog class
// d.breed;
// d.playFetch();
// d.speak();


class App{
    constructor(){
        this.id = null;
        this.name = "";
        this.price = null;
    }

    start(){
        console.log('start')
    }

    stop(){
        console.log('stop');
    }
}


class Game extends App{
    constructor(){
        super();
        this.score = null;
        this.winners = "";
    }

    play(){
        console.log('Here we go!');
    }
}

const a = new App();
console.log(a);
const g = new Game();
console.log(g);

g.play();
function randomNum(){
for (i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i);
        }, Math.floor(Math.random() * 1000));
    })(i); //Pass current value into self-executing anonymous function
}
return i
}
randomNum();
var ball = randomNum() + 1;
console.log(ball);
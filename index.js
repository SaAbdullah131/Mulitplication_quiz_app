const num1=Math.ceil(Math.random()*10);
// use math.ceil for ceiling number and random*10.
const num2=Math.ceil(Math.random()*10);

const formElement=document.getElementById("form");

const questionElement=document.getElementById("question");

const inputElement=document.getElementById("input");

const scoreElement = document.getElementById("score");

questionElement.innerText =`What is ${num1} Multiply by ${num2}`;

const correctAns= num1 * num2;

let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scoreElement.innerText=`score: ${score}`;

formElement.addEventListener("submit",()=>{
    const userAns=+inputElement.value ;
    //console.log(userAns,typeof(userAns));
    if(userAns===correctAns){
        score++;
       // console.log(score);
       updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}


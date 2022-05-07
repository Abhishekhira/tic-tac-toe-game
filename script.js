console.log("welcome to tic tac toe");
let music=new Audio('music.mp3');
let audioTurn=new Audio('ting.mp3');
let gameOver=new Audio('gameover.mp3');
let turn='x';
let isGameOver=false;

  
//function to change the turn
const changeTurn=()=>{
return turn ==='x'? '0':"x"
}

//function to check  for a win
const checkWin=()=>{

    let boxtext=document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+' won'
            isGameOver=true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='200px'
        }
    })
}
//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
             turn= changeTurn();
            audioTurn.play();
            checkWin();
        
             if(!isGameOver){

                 document.getElementsByClassName('info')[0].innerText='turn for '+ turn;
             }
             
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=''
    });
    turn='x';
    isGameOver=false;
    document.getElementsByClassName('info')[0].innerText='turn for '+turn;
})
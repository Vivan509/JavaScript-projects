let timer = 60;
let score = 0;
let hitrn;


// to create more bubble element with function
function makeBubble(){

    let clutter = '';
    
    for(let i = 1; i < 86; i++){
        const randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div> `;
    }

    document.querySelector('.p-bottom').innerHTML = clutter;
}


// Create Math.random to get new hit number
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10)

    document.querySelector('#hitval').textContent = hitrn;

}

//set the time and run the countdown
function updateTime(){

    let setTime = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector('#timeval').textContent = timer;
        }else{
            // to remove the interval
            clearInterval(setTime);
            document.querySelector('.p-bottom').innerHTML = `
            <div class="end-game">
                <h1>Game Over</h1>
                <h2>Your Score: ${score}</h2>
                <button class="play-again-btn" onclick= "
                timer = 60;
                makeBubble();
                getNewHit();
                updateTime();
                ">Play Again</button>
            </div>
            `
        }
        
    }, 1000);
}

// Increase the score by 10

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('.p-bottom').addEventListener('click', 
 function(e){
   let clickedNum = Number(e.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


makeBubble();
getNewHit();
updateTime();

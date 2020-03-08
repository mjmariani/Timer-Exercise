//My Solution

function countdown(num){
    while(num>0){
        num--;

        setTimeout(console.log(num),1000);
        if(num===0){
            console.log("DONE!");
        }

    }
    

}

countdown(5);

randomGame();


function randomGame(){
   let num;
   let counter = 0;
   let time = setInterval(/*anonymous function*/
    
    function(){
        num = Math.random();
        counter++;
        if(num > .75){
            clearInterval(time);
            console.log(`It took ${counter} tries.`)


        }


    } )

}

/*Springboard Solution

function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }

function randomGame(){
  let num;
  let times = 0;
  let timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}


  */
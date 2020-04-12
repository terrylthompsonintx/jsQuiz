// On page load script loads initial screen and start button.  
// On start first question is loaded and timer starts.
// Questions are an array of objects  {q:'', a0:'', a1:'',a2: '', a3:'',ca:<correct answer num>}
// Once user selects an answer the script checks the selected answer agains the correct answer.  
// The answer is correct, correct answer counter is incremented.  
// If the answer is incorrect, timer is decremented. 
// if all questions are answered user is prompted for initials.   
// if timer runs out user is prompted for initials.  
// initials, answers and time are saved to localstorage



// event listeners - start, a0, a1,a2,a3, view high scores

//Global Variables
var pagehead = document.querySelector('#testHead');
var pagehero = document.querySelector('#testHero');
var pagefoot = document.querySelector('#testFoot');
var pagestart = document.querySelector('#testStart');
var timerDisplay = 0;
var correctA = 0;
var a=0;

//End global variables

var pageloader = function(){
    var heroLabel = document.createElement('H1');
    heroLabel.textContent='Coding Quiz Challenge';
    pagestart.appendChild(heroLabel);
    var startText = document.createElement('p');
    startText.textContent='Try to answer code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by tens seconds!';
    pagestart.appendChild(startText)
    var startBtn =document.createElement("BUTTON");
    startBtn.textContent= 'Start';
    startBtn.className='startButton';
    startBtn.setAttribute('id','testStartBtn');
    pagestart.appendChild (startBtn);
}

var clearDiv =function(targetDiv){
    targetDiv.innerHTML='';
    //clears the div passed to it.
}

var updateTimer =function(secs){

        //updates timer from number passed to funciton
}



// Event handlers

var test = function(){
    
    
    
    //if event is start button initialize vars. start timer
    //if event is an answer button, compare answer to correct one.  If correct increment correct answer counter. if not decrement time.  Clear screen load next question.  If no more 
    
    var questions =[{q:'What is the color of the sky?',a0:'blue',a1:'green',a2:'yellow',a3:'red',c:'id0'},{q:'What is the color of the grass?',a0:'blue',a1:'green',a2:'yellow',a3:'red',c:'id1'},{q:'What is the color of the banana?',a0:'blue',a1:'green',a2:'yellow',a3:'red',c:'id2'}];
   
    clearDiv(pagehero);
    clearDiv(pagefoot);

        
        if (a < questions.length){
            questionMess =document.createElement('p');
            questionMess.textContent=questions[a].q;
            pagehero.appendChild(questionMess);
            var abtn0 = document.createElement('BUTTON');
            abtn0.textContent=questions[a].a0;
            abtn0.setAttribute('id','id0');
            abtn0.setAttribute('class','answerbutton')
            pagehero.appendChild(abtn0);
            var abtn1 = document.createElement('BUTTON');
            abtn1.textContent=questions[a].a1;
            abtn1.setAttribute('id','id1');
            abtn1.setAttribute('class','answerbutton')
            pagehero.appendChild(abtn1);
            var abtn2 = document.createElement('BUTTON');
            abtn2.textContent=questions[a].a2;
            abtn2.setAttribute('id','id2');
            abtn2.setAttribute('class','answerbutton')
            pagehero.appendChild(abtn2);
            var abtn3 = document.createElement('BUTTON');
            abtn3.textContent=questions[a].a3;
            abtn3.setAttribute('id','id3');
            abtn3.setAttribute('class','answerbutton')
            pagehero.appendChild(abtn3);
            var correctid =questions[a].c 
            var answerSelId = event.target.getAttribute('id');
            console.log(event.target);
            console.log(correctid);
            console.log(answerSelId);
            if (correctid == answerSelId){
                correctA++;
                a++;
                var userOut =  document.createElement('H2');
                userOut.textContent="Correct";
                pagefoot.appendChild(userOut);
                
            }
            else if (correctid !== answerSelId && answerSelId !=='testStartBtn'){
                a++
                    var userOut =  document.createElement('H2');
                    userOut.textContent="Incorrect";
                    pagefoot.appendChild(userOut);
            }
        }
    

       

// start timer.
//iterate thorough questions. 
    
    
}

var starter = function(){
    clearDiv(pagestart);
    setInterval(test(),3000);
}

pageloader();

//evant listeners 


pagehero.addEventListener('click',test);
pagestart.addEventListener('click',starter);


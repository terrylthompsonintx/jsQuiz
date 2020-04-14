// On page load script loads initial screen and start button.  
// On start first question is loaded and timer starts.
// Questions are an array of objects  {q:'', a0:'', a1:'',a2: '', a3:'',ca:<correct answer num>}
// Once user selects an answer the script checks the selected answer against the correct answer.  
// The answer is correct, correct answer counter is incremented.  
// If the answer is incorrect, timer is decremented. 
// if all questions are answered user is prompted for initials.   
// if timer runs out user is prompted for initials.  
// initials and number of correct answers are saved to localstorage





//Global Variables begin//
var pagehead = document.querySelector('#testHead');
var pagehero = document.querySelector('#testHero');
var pagefoot = document.querySelector('#testFoot');
var pagestart = document.querySelector('#testStart');
var pagecounter = document.querySelector('#timerCount');
var heroul = document.querySelector('#displayInit');
var timerDisplay = 0;
var correctA = 0;
var a=0;
var questions =[{q:'What JavaScipt method concatenates two strings?',a0:'concat()',a1:'cat()',a2:'cString()',a3:'toString()',c:'id0'},{q:'What JavaScipt property tells you an elements length ?',a0:'.len',a1:'.length',a2:'indexif',a3:'.match',c:'id1'},{q:'What JavaScipt method can be used to replace a work in a string?',a0:'blue',a1:'repeat',a2:'replace()',a3:'search()',c:'id2'},{q:'What JavaScipt method extracts part of a sting?',a0:'match()',a1:'search()',a2:'slice()',a3:'Startswith()',c:'id2'},{q:'What JavaScipt method converts a string to uppercase?',a0:'UPPER!',a1:'Upper()',a2:'toUpper()',a3:'upper()',c:'id2'}];
var qnum =0;
var initials =[];
var timeCount =60;
var doom = 0;
//End global variables

//functions begin//
var pageloader = function(){
    var heroLabel = document.createElement('H1');
    heroLabel.textContent='Coding Quiz Challenge';
    pagehero.appendChild(heroLabel);
    var startText = document.createElement('p');
    startText.textContent='Try to answer code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
    pagehero.appendChild(startText)
    var startBtn =document.createElement("BUTTON");
    startBtn.textContent= 'Start';
    startBtn.className='startButton';
    startBtn.setAttribute('id','testStartBtn');
    pagehero.appendChild (startBtn);
}

var clearDiv =function(targetDiv){
    targetDiv.innerHTML='';
    //clears the div passed to it.
}

var printQ=function(qpara,ans0, ans1,ans2,ans3){
    var pagehero = document.querySelector('#testHero');
    questionMess =document.createElement('p');
    questionMess.textContent=qpara;
    pagehero.appendChild(questionMess);
    var abtn0 = document.createElement('BUTTON');
    abtn0.textContent=ans0;
    abtn0.setAttribute('id','id0');
    abtn0.setAttribute('class','answerbutton')
    pagehero.appendChild(abtn0);
    var abtn1 = document.createElement('BUTTON');
    abtn1.textContent=ans1;
    abtn1.setAttribute('id','id1');
    abtn1.setAttribute('class','answerbutton');
    pagehero.appendChild(abtn1);
    var abtn2 = document.createElement('BUTTON');
    abtn2.textContent=ans2;
    abtn2.setAttribute('id','id2');
    abtn2.setAttribute('class','answerbutton')
    pagehero.appendChild(abtn2);
    var abtn3 = document.createElement('BUTTON');
    abtn3.textContent=ans3;
    abtn3.setAttribute('id','id3');
    abtn3.setAttribute('class','answerbutton')
    pagehero.appendChild(abtn3);
    
}

var endTest = function(){
    clearDiv(pagehero);
    var dscore = document.createElement('h2');
    dscore.textContent="Number of correct answers!";
    pagehero.appendChild(dscore);
    var hscore = document.createElement('p');
    hscore.textContent=correctA.toString();
    pagehero.appendChild(hscore);
    var userInitstxt = document.createElement('p');
    userInitstxt.textContent='Enter your intitials'
    pagehero.appendChild(userInitstxt);
    var initBox = document.createElement('input');
    initBox.setAttribute('id','savebox');
    pagehero.appendChild (initBox);

    var saveBtn =document.createElement("BUTTON");
    saveBtn.textContent= 'Save';
    saveBtn.className='saveButton';
    saveBtn.setAttribute('id','saveBtn');
    pagehero.appendChild (saveBtn);
    var promptUse = document.createElement('p');
    promptUse .textContent='Hit Start to play again.'
    pagehero.appendChild(promptUse);
    var startBtn =document.createElement("BUTTON");
    startBtn.textContent= 'Start';
    startBtn.className='startButton';
    startBtn.setAttribute('id','testStartBtn');
    pagehero.appendChild (startBtn);
    clearDiv(pagefoot);
    clearInterval(doom);
 
}

var corA = function(){
    clearDiv(pagefoot);
    var answerOut = document.createElement('h2');
    answerOut.textContent='Correct';
    pagefoot.appendChild(answerOut);
    
}

var wrongA = function(){
    clearDiv(pagefoot);
    var answerOut = document.createElement('h2');
    answerOut.textContent='Incorrect, 10 seconds deducted.';
    pagefoot.appendChild(answerOut);
    timeCount = timeCount -10;
}

var testq = function(){
      
    var clickedBtn= event.target.id;
    
    if(clickedBtn==questions[qnum].c){
        correctA++;
        corA();
    }
    
    else{
        wrongA();
    };
    
    clearDiv(pagehero);
    
    qnum++;
    if (qnum == questions.length){
        endTest()
    }
    else {printQ(questions[qnum].q,questions[qnum].a0,questions[qnum].a1,questions[qnum].a2,questions[qnum].a3);
        
    };
}

var saveInitials = function() {
    var newScore = correctA.toString();
    var newinits = document.getElementById('savebox').value;
    var newItem ={
        initials: newinits,
        score:newScore
    }
    initials.push(newItem);

    localStorage.setItem('userinits',JSON.stringify(initials));

}

var displayInitials = function(){
    var tempdata =JSON.parse(localStorage.getItem('userinits'));
    clearDiv(pagehero);
    if (tempdata != null){
        
        initials = tempdata.slice();
        
        for (i=0;i<initials.length;i++){
           var templi= document.createElement('p');
           templi.className='users';
           var score = initials[i].score;
           score += ': ';
           score += initials[i].initials;
           templi.textContent = score;
           
           pagehero.appendChild(templi);
            
        }
    }
    else {
        console.log('fired');
        var errormes = document.createElement('h2');
        errormes.textContent ='No saved initials in localstorage.';
        console.log (errormes);
        pagehero.appendChild(errormes);
        
    }
    var promptUse = document.createElement('p');
    promptUse .textContent='Hit Start to play again.'
    pagehero.appendChild(promptUse);
    var startBtn =document.createElement("BUTTON");
    startBtn.textContent= 'Start';
    startBtn.className='startButton';
    startBtn.setAttribute('id','testStartBtn');
    pagehero.appendChild (startBtn);
    

}

var update =function(){
    timeCount--;
    var displaytxt = 'Time Remaining: ';
    displaytxt = displaytxt.concat(timeCount.toString());
     document.getElementById('timerCount').textContent=displaytxt;
     if (timeCount<=0){
        endTest()
        clearInterval(doom);
     }

}
//functions end//

// Event handlers begin//
var heroEvents= function(){
    
    if (event.target.matches("#testStartBtn")) {
        
        clearDiv(pagehero);
        qnum=0;
        correctA=0;
        timeCount=60;
        doom =setInterval(update,1000);
        printQ(questions[qnum].q,questions[qnum].a0,questions[qnum].a1,questions[qnum].a2,questions[qnum].a3);
    }
   
   
   if (event.target.matches("#id0")){
       testq();
       
     
    };
   
   if (event.target.matches("#id1")){
        testq();
   };
   
   if (event.target.matches("#id2")){
    testq();
    };
   
    if (event.target.matches("#id3")){
        testq();
        };
   
   if(event.target.matches("#saveBtn")){
       saveInitials();

   }
}

var headEvents= function(){
    if (event.target.matches("#highScoreBtn")) {
        displayInitials();
         
        
    }
}
// Event handlers end//


pageloader();

//event listeners begin//
pagehero.addEventListener('click',heroEvents);
pagehead.addEventListener('click',headEvents);
//event listeners begin//


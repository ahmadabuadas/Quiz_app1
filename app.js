

/////////////////////////////////////////////////////////////////////////////////
function populate(){
    if(quiz.isEnded()){
        showScore();
    }else{
    var element =document.getElementById('qustion');
    element.innerHTML = quiz.getQustionIndex().text;
    
    var choices = quiz.getQustionIndex().choices;
    
    for(var i=0; i<choices.length; i++){
        var element = document.getElementById('choice'+ i);
        element.innerHTML = choices[i];
        guess('btn'+i, choices[i]);
    }
       showprogress();

    }
}

function guess(id, guess){
    var button =document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showprogress(){
    var currentqustionNumber = quiz.questionIndex +1 
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentqustionNumber + "of" + quiz.questions.length ;
}

function showScore(){
 var gameoverHtml = '<h1> Result </h1>';
 gameoverHtml += "<h2 id='score'> your score is: "+ quiz.score + '</h2>';
 
  var element = document.getElementById('quiz');
    element.innerHTML = gameoverHtml;
}

var qustions = [
     new Qeustion("what is your name?", ["ali","ahmad","yusef","raya"], "Ahmad"),
     new Qeustion('who old are you?',['22','33','30','29'],'29'),
     new Qeustion('what yours car year',['2000','2003','2007','2015'],'2015'),
     new Qeustion('what yours job',['developer','art','music','sport'],'developer'),
     new Qeustion('what your favaret programing languge',['c#','ruby','javascript','C++'],'javascript'),
];

var quiz = new Quiz(qustions);

populate();



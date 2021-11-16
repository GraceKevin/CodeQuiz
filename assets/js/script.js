// Timer functionality with assist from module 4 in class lessons and module project

var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')

var quiz={

    questions:[

        {
            qst:'How do you write a hidden comment in Javascript?',
            options: ['!-- --!', '//'],
            answer:2
        },
        {
            qst:'What does an Array do?',
            options: ['Holds multiple values into a single variable', 'Assigns values to variables'],
            answer:1
        }
        {
            qst:'In HTML what is the proper tag name for adding images?',
            options: ['pic', 'img'],
            answer:2
        },
        {
            qst:'What does border-radius do?',
            options: ['Rounds the corners of the border', 'Increases the width of the border'],
            answer:1
        },
    ],
    listQ:0,

    load:function(){
        if(this.listQ<=this.questions.length-1){
            quizbox.innerHTML=this.listQ+1 + ". " +this.questions[this.listQ].qst;
            option1.innerHTML=this.questions[this.listQ].options[0];
            option2.innerHTML=this.questions[this.listQ].options[1];
        }
        else {

            quizbox.innerHTML="You've reached the end!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.listQ++;
        this.load();
    },

    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.listQ].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },

    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "|" + this.score;
    }
}

function timerCount(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
    startTimer(fiveMinutes, display);
}; 

window.onload= function() {

    var twoMinutes = 60 * 2,

        display = document.querySelector('#timer');

}


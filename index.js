var btnNext = document.getElementsByClassName("next")[0];
var btnPrevious = document.getElementsByClassName("previous")[0];
var btnSubmit = document.getElementsByClassName("submit")[0];
var btnRestart = document.getElementsByClassName("restart")[0];
var num = 1;
btnNext.disabled = true;
var clickAnswerQ1 = document.querySelectorAll(".Q1Ans");
var clickAnswerQ2 = document.querySelectorAll(".Q2Ans");
var clickAnswerQ3 = document.querySelectorAll(".Q3Ans");
var clickedAns1 = [];
var clickedAns2 = [];
var clickedAns3 = [];
var Q2id = ["a21", "a22", "a23", "a24"]
var Q3id = ["a31", "a32", "a33", "a34"]
var answer = ["a13", "a24", "a34"];

function buttons () {
    
// Record Answer
for (var i = 0; i<clickAnswerQ1.length; i++) {
    clickAnswerQ1[i].addEventListener("click", function (e) {
    btnNext.disabled = false;
    clickedAns1.push(e.target.id);
    })};
    
for (var i = 0; i<clickAnswerQ2.length; i++) {
    clickAnswerQ2[i].addEventListener("click", function (e) {
    btnNext.disabled = false;
    clickedAns2.push(e.target.id);
    })};

for (var i = 0; i<clickAnswerQ3.length; i++) {
    clickAnswerQ3[i].addEventListener("click", function (e) {
    clickedAns3.push(e.target.id);
    })};        

// Next and Previous Button

btnNext.addEventListener("click", function(n) {
    var qn = document.getElementById(num);
    console.log(num);
    function hideQuestion () {
        qn.classList.add("non-current");
        qn.classList.remove("current");
        btnNext.disabled = true;
    }
    hideQuestion();
    
    num += 1;

    console.log(num);
    var nxQn = document.getElementById(num);
    function changeQuestion() {
        nxQn.classList.add("current");
        nxQn.classList.remove("non-current");
        btnPrevious.classList.remove("non-current");
    }
    changeQuestion();

    if (num == 2) {
    for (id in Q2id) {
        if( document.getElementById(Q2id[id]).checked ) {btnNext.disabled = false;}
        btnSubmit.disabled = true;
    }};

    if (num === 3 ) { 
        btnNext.classList.add("non-current");
        btnSubmit.classList.remove("non-current");
    };

    for (i =0; i < Q3id.length; i++) {
    clickAnswerQ3[i].addEventListener("click", function() {
        for (id in Q3id) {
            if( document.getElementById(Q3id[id]).checked ) {btnSubmit.disabled = false;}
        }
    })};

    // Check Q1 Answer
    if (clickedAns1[clickedAns1.length - 1] === answer[0]) {
        var Q1score = 1;
    } else { 
        var Q1score = 0;
    };
    // Check Q2 Answer
    if (clickedAns2[clickedAns2.length - 1] === answer[1]) {
        var Q2score = 1;
    } else { 
        var Q2score = 0;
    };
    btnSubmit.addEventListener("click", function() {
        if (clickedAns3[clickedAns3.length - 1] === answer[2]) {
            var Q3score = 1;
        } else { 
             var Q3score = 0;
        };
        var totalScore = Q1score + Q2score + Q3score;
        console.log(Q1score, Q2score, Q3score, totalScore);
        nxQn.classList.remove("current");
        nxQn.classList.add("non-current");
        document.getElementsByClassName("container-result")[0].classList.remove("non-current");
        document.getElementsByClassName("result")[0].innerHTML = "Congratulations!! You scored " + totalScore + " out of " + answer.length + " questions."
        btnPrevious.classList.add("non-current");
        btnSubmit.classList.add("non-current");
        btnRestart.classList.remove("non-current");
        });
    });

btnPrevious.addEventListener("click", function(n) {
    
    var qn = document.getElementById(num);
    function hideQuestion (ID) {
        qn.classList.add("non-current");
        qn.classList.remove("current");
    }
    hideQuestion(n);

    num -= 1;
    var nxQn = document.getElementById(num);
    function changeQuestion(ID) {
        nxQn.classList.add("current");
        nxQn.classList.remove("non-current");
        btnNext.disabled = false;
        btnSubmit.classList.add("non-current");
            if ( num === 1) {
                btnPrevious.classList.add("non-current");
            };
            if (num < 3 ) { 
                btnNext.classList.remove("non-current");
            };
    }
    changeQuestion(n);
    });
};

    buttons();
    btnRestart.addEventListener("click", function() {
        num = 1;
        clickedAns1 = [];
        clickedAns2 = [];
        clickedAns3 = [];
        var qn = document.getElementById(num);
        qn.classList.add("current");
        qn.classList.remove("non-current");
        document.getElementsByClassName("container-result")[0].classList.add("non-current");
        btnNext.classList.add("current");
        btnNext.classList.remove("non-current");
        var changeChecked = document.getElementsByTagName("input");
        for (i = 0; i < changeChecked.length; i++){
            changeChecked[i].checked = false;
        };
        //buttons();
    });
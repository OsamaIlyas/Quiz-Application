var questions = [
    {
        "question": "Javascript is _________ language.",
        "option1": "Programming",
        "option2": "Application",
        "option3": "Scripting",
        "option4": "None of these",
        "answer": "3"
    },
    {
        "question": "Why so JavaScript and Java have similar name?",
        "option1": "JavaScript is a stripped-down version of Java",
        "option2": "JavaScript's syntax is loosely based on Java's",
        "option3": "They both originated on the island of Java",
        "option4": "None of the above.",
        "answer": "2"
    },
    {
        "question": "JavaScript is also called client-side JavaScript.",
        "option1": " Microsoft",
        "option2": "Navigator",
        "option3": "LiveWire",
        "option4": " Native",
        "answer": "2"
    },
    {
        "question": "Tag is an extension to HTML that can enclose any number of JavaScript ",
        "option1": " <SCRIPT>",
        "option2": "<BODY>",
        "option3": "<HEAD>",
        "option4": "<TITLE>",
        "answer": "1"
    },
    {
        "question": "What is the correct JavaScript syntax to write 'Hello World'?",
        "option1": " System.out.println('Hello World)",
        "option2": "println ('Hello World'')",
        "option3": " document.write('Hello World)",
        "option4": "response.write('Hello World')",
        "answer": "3"
    },
    {
        "question": "Which of the following is not considered a JavaScript operator?",
        "option1": "new",
        "option2": "this",
        "option3": "delete",
        "option4": "typeof",
        "answer": "2"
    },
    {
        "question": "The _______ method of an Array object adds and/or removes elements from an array.",
        "option1": "Reverse",
        "option2": "Shift",
        "option3": "Slice",
        "option4": "Splice",
        "answer": "4"
    },
    {
        "question": "Select all the correct option(s). State the correct place of JS Code inside HTML",
        "option1": "Inside Body",
        "option2": "Inside Head",
        "option3": "Inside Single Javascript File",
        "option4": "All of these",
        "answer": "4"
    },
    {
        "question": "Assignment Operators is following type of operator ______________.",
        "option1": "Binary",
        "option2": "Unarry",
        "option3": "Ternary",
        "option4": "None of these",
        "answer": "1"
    },
    {
        "question": "JavaScript is interpreted by _________.",
        "option1": "Client",
        "option2": "Server",
        "option3": "Object",
        "option4": "None of these",
        "answer": "1"
    },
];

window.onload = function timer() {

    var min = 4;
    var sec = 59;
    var int = setInterval(function () {
        if (min < 10 && sec < 10) {
            time.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if (min < 10) {
            time.innerHTML = "0" + min + ":" + sec;
        }
        else if (sec < 10) {
            time.innerHTML = min + ":" + "0" + sec;
        }

        else { time.innerHTML = min + ":" + sec; }
        sec--;

        if (min < 0) {
            clearInterval(int);
            time.innerHTML = "Time Out";
            Resultcon.style.display = '';
            // nextButton.textContent = 'Time Out';
            Resultcon.textContent = 'Your Score:' + score + '%';

        }
        else if (sec == 0) {
            min--;
            sec = 60;
        }
    }, 1000);
};


var currentQuestion = 0;
var score = 0;
var time = document.getElementById('timer');
var totQuestion = questions.length;
var Container = document.getElementById("container");
var Question = document.getElementById("question");
var op1 = document.getElementById("option1");
var op2 = document.getElementById("option2");
var op3 = document.getElementById("option3");
var op4 = document.getElementById("option4");
var nextButton = document.getElementById("nextQ");
var Resultcon = document.getElementById("result");


function loadQuestion(QuestionIndex) {

    var q = questions[QuestionIndex];
    Question.textContent = (QuestionIndex + 1) + '.' + q.question;
    op1.textContent = q.option1;
    op2.textContent = q.option2;
    op3.textContent = q.option3;
    op4.textContent = q.option4;

};

function loadNextQuestion() {

    var selectedOption = document.querySelector('input[type = radio]:checked');
    if (!selectedOption) {
        alert("Select any answer");
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;

    }



    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestion - 1) {


        nextButton.textContent = 'Next';
    }
    if (currentQuestion == totQuestion) {



        Resultcon.style.display = ''
        Resultcon.textContent = '  Your correct answer : '+answer+ 'out of 10 '+' Your Total Marks : '+answer*10+'%';

        // clearInterval(int);


    }

    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);


function startQuiz() {
    location = '../Main/main.html';
}



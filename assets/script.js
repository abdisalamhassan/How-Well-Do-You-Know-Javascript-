//Start Section
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#TryAgain!");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let timer = 20000;
let interval = 0;

//total points
let correct = 5;

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
});


//What happens when 'Exit' Button Gets Clicked
exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});


//Creating Timer For Quiz Timer Section

let countDown = () => {
    if (timer === 20000) {
        clearInterval(interval);
        next_question.click();

    } else {
        timer++;
        time.innerText = timer;
    }
}

//setInterval(countDown,1000);

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    //    timer start
    timer = 0;
}

loadData();

//what happen when 'Continue' Button Gets Clicked
continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();

    //    remove All Active Classes When Continue Button Will Click

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${MCQS.length} Questions`;
});

choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceNo === MCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        //stop Counter
        clearInterval(interval);

        //disable All Options When User Selects An Option
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});

////what happen when 'Next' Button Gets Clicked
next_question.addEventListener("click", () => {
    //    if index is less then MCQS.length
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        //question
        loadData();

        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    } else {
        index = 0;


        // Quiz Question Complete Display Result 
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${MCQS.length}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//What happens when 'Quit' Button Gets Selected
quit.addEventListener("click", () => {
    start.style.display = "block";
    result.style.display = "none";
});


let MCQS = [{
question: "How can you add a comment in a JavaScript?",
    choice1: "//This is a comment",
    choice2: "'This is a comment",
    choice3: "<!--This is a comment-->",
    choice4: "#This is a comment",
answer: 1
},
{
question: "How do should you put Javascript in HTML",
      choice1: "<js></js>",
      choice2: "<javascript></javascript>",
      choice3: "<script></script>",
      choice4: "<scripting>",
answer: 2
},  
{
question: "In JavaScript, which of the following is NOT an assignment operator?",
    choice1: "+=",
    choice2: "||",
    choice3: "*=", 
    choice4: "=",
answer: 1
},

{
    question: "How do you create a function?",
choice1: "function:myFunction()",
choice2: "function=myFunction()",
choice3: "function myFunction()",
choice4: "myFunction():function",
answer: 3
},

{
    question: "In JavaScript, the expression x!=y returns false if:",
choice1: "the variables are equal.",
choice2: "x is less than y.",
choice3: "bthe variables are not equal.",
choice4: "None of the above.",
answer: 0
}

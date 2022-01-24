var count = 0;
var time = 60;
var marks = 0;
var answer = [];
var timer;

//    Main Ready funtion

$(document).ready(function () {
    $('#finish').hide();
    $('#Result').hide();

    buttons_manager();

    //    Create Function

    function buttons_manager() {
        if (count > 0) {
            $('#prev').show();
            if (count == 9) {
                $('#next').hide();
                $('#finish').show();
            }
            else {
                $('#next').show();
            }
        }
        else {
            $('#prev').hide();
        }
    }

    // Create Question Function
    function adding_Questions(data, i) {
        $('#question').text(data[i].Quiz)
        $('#options1').text(data[i].option1)
        $('#options2').text(data[i].option2)
        $('#options3').text(data[i].option3)
        $('#options4').text(data[i].option4)
        $('#options5').text(data[i].option5)
        $('#options6').text(data[i].option6)
        $('#options7').text(data[i].option7)
        $('#options8').text(data[i].option8)
        $('#options10').text(data[i].option9)
        $('#number').text(Number(i + 1));

    }

    // Answer Selection Function

    function selected_Answer() {
        for (var i = 0; i < 9; i++) {
            var a = document.getElementById("options").children;
            if (a[i].innerHTML == answer[count]) {
                $("#options").children("button")[i].classList.add("active");
            }
            else {
                $("#options").children("button")[i].classList.remove("active");
            }
        }
    }

    function creating_result(data) {
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] == data.Questions[i].answer) {

                marks += 1;
            }
        }
        console.log(answer)
        $('#main').hide();

        $("#marks").text(marks);
        $('#correct_answer').text(marks / 10);
        $('#percentage').text((marks / 10) * 100 + "%");

        $("#Result").show();
        $("#saveBtn").on('click', function() {
            var initials = $( "#initials").val()
            

        localStorage.setItem('initials', initials)
        localStorage.setItem('score', marks)
        })
    }

    $("#options").hide();

    // Attach API

    /* fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {*/
            var data = {
"Questions": [
{
"Quiz": "Q.1)  How does a 'for' loop start?",
"option1": "for (i = 0; i <= 5)",
"option2": "for (i = 0; i <= 5; i++) ",
"option3": "for i = 1 to 5",
"option4": "for (i <= 5; i++)",
"answer": "for (i = 0; i <= 5; i++)"
},

{
"Quiz": "Q.2) Alert(message), close() and reset() are JavaScript:",
"option1": "Methods",
"option2": "console.log",
"option3": "commands",
"option4": "Properties",
"answer": "Methods"
},

{
"Quiz": "Q.3) Which HTML attribute is used to define inline styles?",
"option1": " ||",
"option2": "*=",
"option3": "+=",
"option4": "=",
"answer": " ||"
},

{
"Quiz": "Q.4) In JavaScript, the symbols + - * and / are:",
"option1": "operators.",
"option2": "expressions.",
"option3": "comparison operators.",
"option4": "None of the above.",
"answer": "operators."
},
{
"Quiz": "Q.5) How do you find the largest number of 2 and 4? ",
"option1": "Math.ceil(2,4)",
"option2": "Math.max(2,4) ",
"option3": "ceil(2,4)",
"option4": "top(2,4)",
"answer": "Math.max(2,4)"
},
{
"Quiz": "Q.6) What is the correct syntax for referring to an external script called 'xxx.js'? ",
"option1": "<script src='xxx.js'>",
"option2": " <script name='xxx.js'> ",
"option3": " <script href='xxx.js'>",
"option4": "<script value='xxx.js'>",
"answer": "<script src='xxx.js'>"
},

{
"Quiz": "Q.7) Where is the correct place to insert a JavaScript?  ",
"option1": "Both the <head> section and the <body> section are correct",
"option2": " The <body> section ",
"option3": " The <head> section",
"option4": "On the css page",
"answer": "Both the <head> section and the <body> section are correct"
},

{
"Quiz": "Q.8) How do you write 'Hello World' in an alert box? ",
"option1": "alert('Hello World')",
"option2": "msgBox('Hello World') ",
"option3": " alertBox='Hello World'",
"option4": "alertBox('Hello World')",
"answer": "alert('Hello World')"
},

{
"Quiz": "Q.9) How do you create a function?",
"option1": "function:myFunction()",
"option2": " function=myFunction() ",
"option3": " function myFunction() ",
"option4": "myFunction():function",
"answer": "function myFunction() "
},

{
"Quiz": "Q.10) How do you call a function named 'myFunction'?",
"option1": "call myFunction()",
"option2": " myFunction() ",
"option3": " call function myFunction",
"option4": "Call.myFunction()",
"answer": "myFunction() "
}
]
}
            $('#btn').click(function () {
                $('#options').show();
                adding_Questions(data.Questions, count);
                $('.start_page').hide();
                $('#prev').hide();

                timer = setInterval(timer_function, 1000);

                function timer_function() {
                    $('#time').text(time);
                    if (time < 1) {
                        clearInterval(timer);
                        alert("Out of time!");
                        creating_result(data);
                        $("#main").hide();
                        $("#result").show();
                    }
                    time--;
                }

            });

            // Select Option

            $(".option").click(function () {

                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                answer[count] = $(this).html();
            });

            // Next Questions

            $('#next').click(function () {
                if (count > answer.length - 1) {
                    alert("Select Atleast 1 Option")
                }
                else {
                    count++;
                    adding_Questions(data.Questions, count);
                    $("#prev").show();
                    $(".option").removeClass("active");
                    buttons_manager();
                    selected_Answer();
                }
            });

            // Previous Questions

            $('#prev').click(function () {
                count--;
                adding_Questions(data.Questions, count);
                buttons_manager();
                selected_Answer();
            });

            // Finish Quiz

            $("#finish").click(function () {
                if (count > answer.length - 1) {
                    alert("Select Atleast Option");
                }
                else {
                    creating_result(data);
                    clearInterval(timer);
                }
            });



        /*})*/




})

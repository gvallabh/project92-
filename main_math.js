

number1 = localStorage.getItem("number1");
number2= localStorage.getItem("number1");

number1_score = 0;
number2_score = 0;

document.getElementById("number1").innerHTML = number1+ " : ";
document.getElementById("number2").innerHTML = number2 + " : ";

document.getElementById("MATH_question").innerHTML = "Question Turn - " + number1;
document.getElementById("MATH_answer").innerHTML = "Answer Turn - " + number2 ;

function send() {
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);
console.log(actual_answer);


question_answer = "<h4>"+number1+"X"+number2+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_answer + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}


MATH_question = "MATH1_name";
MATH_answer = "MATH2_name";


function check()
{
get_answer = document.getElementById("input_check_box").value;

if(get_answer == actual_answer)  
{
    if(MATH_answer == "MATH1_name")
    {
        number1_score = number1_score +1;
        document.getElementById("number1_score").innerHTML=number1_score;
    }
    else 
    {
        number2_score =number2_score +1;
        document.getElementById("number2_score").innerHTML=number2_score;
    }
}
if(MATH_question == "MATH1_name")
{
    MATH_question = "MATH2_name"
    document.getElementById("MATH_question").innerHTML = "Question Turn - " + MATH2_name ;
}
else 
{
    MATH_question= "MATH1_name"
    document.getElementById("MATH_question").innerHTML = "Question Turn - " + MATH1_name;
}

if(MATH_answer == "MATH1_name")
{
    MATH_answer = "MATH2_name"
    document.getElementById("MATH_answer").innerHTML = "Answer Turn - " +MATH2_name;
}
else 
{
    MATH_answer= "MATH1_name"
    document.getElementById("MATH_answer").innerHTML = "Answer Turn - " + MATH1_name ;
}

document.getElementById("output").innerHTML = "";
}


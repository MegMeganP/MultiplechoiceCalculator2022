let prevText = document.getElementById("screenText");  //getting the screen inputs
let traceText = "";  //for testing

let displayItem = (number) => {  //arrow function-grab numbers and add them to screen with whatever is in there already
    if (prevText) {
        prevText.value = prevText.value + number;
    }

    traceText = traceText + number;  //for testing purposes
}
function checkTraceText() { //for testing to see if numbers can be gotten
    return traceText;
}

function checkTraceAnswer() {  //for testing to see if math problems work-can you get the answer
    return eval(traceText); //testing eval function to see if the way that the basic calculator works is ok
}

function clearTrace() { //for testing -need this to clear the trace when running multiple traces
    traceText = "";
}
let result = () => {  //run the calculator or catch the error
    try {
        answer = eval(prevText.value);  //calculate
        getModal();  //call the modal/popup with the choices
    }
    catch (error) {
        alert("Error: Invalid Input \nHint: Must enter number, operand, number...then equals");
    }
}

function allClear() {  //completely clear the calculator-completely reload to start from scratch
    window.location.reload();
}

function del() {  //only take one character at a time off the end
    prevText.value = prevText.value.slice(0, -1);
}

//This function runs the modal
function getModal() {
    // Get the modal-multiple choice popup/screen
    let modal = document.getElementById("multChoiceModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";  //required styling

    getChoices();  //call to generate the choices that appear on multiple choice buttons
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        prevText.value = answer;

        afterAnswer()  //after closing modal, click anywhere to reload app
    }

    function afterAnswer() {  //after you display answer, click anywhere to reload
        document.getElementById("refresh").addEventListener("click", reset);
        function reset() {
            window.location.reload();
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            prevText.value = answer;
            afterAnswer()
        }
    }
}

//This function is where the whole multiple choice feature runs
function getChoices() {
    let isDecimal = answer % 1;  //find out if the answer is a decimal or whole number-affects the type of choices to create

    if (isDecimal > 0) {
        let randomNumber = Math.floor(Math.random() * 10)  //use random number to decide which case for the choices to use
        //if answer is a decimal, generate these types of choices (probably decimal options)
        switch (randomNumber) {
            case 0:
                wrongChoice1 = answer + (0.01 * answer);
                wrongChoice2 = answer - 2;
                break;
            case 1:
                wrongChoice1 = answer + (0.01 * answer);
                wrongChoice2 = answer - 2;
                break;
            case 2:
                wrongChoice1 = answer + (0.01 * answer);
                wrongChoice2 = answer - (0.01 * answer);
                break;
            case 3:
                wrongChoice1 = answer + (0.05 * answer);
                wrongChoice2 = answer - 1;
                break;
            case 4:
                wrongChoice1 = answer - (0.01 * answer);
                wrongChoice2 = answer + (0.01 * answer);
                break;
            case 5:
                wrongChoice1 = answer + (0.1 * answer);
                wrongChoice2 = answer - (0.05 * answer);
                break;
            case 6:
                wrongChoice1 = answer + (0.1 * answer);
                wrongChoice2 = answer - (0.01 * answer);
                break;
            case 7:
                wrongChoice1 = answer - (0.1 * answer);
                wrongChoice2 = answer - 1;
                break;
            case 8:
                wrongChoice1 = answer - (0.1 * answer);
                wrongChoice2 = answer - (0.05 * answer);
                break;
            case 9:
                wrongChoice1 = answer - (0.1 * answer);
                wrongChoice2 = answer + (0.1 * answer);
                break;
        }
        switch (randomNumber) {  //use random number to choose a case for what order the choices are presented
            case 0:
                document.getElementById("btnA").innerText = wrongChoice1;
                document.getElementById("btnB").innerText = wrongChoice2;
                document.getElementById("btnC").innerText = answer;

                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;
            case 1:
                document.getElementById("btnC").innerText = wrongChoice1;
                document.getElementById("btnA").innerText = wrongChoice2;
                document.getElementById("btnB").innerText = answer;
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = answer + " is correct!";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 2:
                document.getElementById("btnA").innerText = wrongChoice1;
                document.getElementById("btnC").innerText = wrongChoice2;
                document.getElementById("btnB").innerText = answer;

                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = answer + " is correct!";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 3:
                document.getElementById("btnB").innerText = wrongChoice1;
                document.getElementById("btnA").innerText = wrongChoice2;
                document.getElementById("btnC").innerText = answer;

                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 4:
                document.getElementById("btnB").innerText = wrongChoice1;
                document.getElementById("btnC").innerText = wrongChoice2;
                document.getElementById("btnA").innerText = answer;

                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            default:
                document.getElementById("btnC").innerText = wrongChoice1;
                document.getElementById("btnB").innerText = wrongChoice2;
                document.getElementById("btnA").innerText = answer;

                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

        }
    }

    else if (isDecimal == 0) {
        let randomNumber = Math.floor(Math.random() * 10)

        switch (randomNumber) {  //if answer is whole number, make the choices a whole number
            case 0:
                wrongChoice1 = Math.ceil(answer + (0.01 * answer));
                wrongChoice2 = answer - 2;
                break;
            case 1:
                wrongChoice1 = Math.ceil(answer + (0.01 * answer));
                wrongChoice2 = answer - 2;
                break;
            case 2:
                wrongChoice1 = Math.ceil(answer + (0.01 * answer));
                wrongChoice2 = Math.floor(answer - (0.01 * answer));
                break;
            case 3:
                wrongChoice1 = Math.ceil(answer + (0.05 * answer));
                wrongChoice2 = answer - 1;
                break;
            case 4:
                wrongChoice1 = Math.floor(answer - (0.01 * answer));
                wrongChoice2 = Math.ceil(answer + (0.01 * answer));
                break;
            case 5:
                wrongChoice1 = Math.ceil(answer + (0.1 * answer));
                wrongChoice2 = Math.floor(answer - (0.05 * answer));
                break;
            case 6:
                wrongChoice1 = Math.ceil(answer + (0.1 * answer));
                wrongChoice2 = Math.floor(answer - (0.01 * answer));
                break;
            case 7:
                wrongChoice1 = Math.floor(answer - (0.1 * answer));
                wrongChoice2 = answer - 1;
                break;
            case 8:
                wrongChoice1 = Math.floor(answer - (0.2 * answer));
                wrongChoice2 = Math.floor(answer - (0.05 * answer));
                break;
            case 9:
                wrongChoice1 = Math.floor(answer - (0.1 * answer));
                wrongChoice2 = Math.ceil(answer + (0.1 * answer));
                break;
        }
        //prevent getting wrong choice options that are the same as the answer due to rounding
        if (wrongChoice1 == answer){
            wrongChoice1 = wrongChoice1 +1
        }
        if (wrongChoice2 == answer){
            wrongChoice2 = wrongChoice2 -1
        }

        switch (randomNumber) {  //cases for what order to present choices
            case 0:
                document.getElementById("btnA").innerText = wrongChoice1;
                document.getElementById("btnB").innerText = wrongChoice2;
                document.getElementById("btnC").innerText = answer;

                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })

                break;
            case 1:
                document.getElementById("btnC").innerText = wrongChoice1;
                document.getElementById("btnA").innerText = wrongChoice2;
                document.getElementById("btnB").innerText = answer;

                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = answer + " is correct!";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 2:
                document.getElementById("btnA").innerText = wrongChoice1;
                document.getElementById("btnC").innerText = wrongChoice2;
                document.getElementById("btnB").innerText = answer;

                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = answer + " is correct!";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 3:
                document.getElementById("btnB").innerText = wrongChoice1;
                document.getElementById("btnA").innerText = wrongChoice2;
                document.getElementById("btnC").innerText = answer;

                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            case 4:
                document.getElementById("btnB").innerText = wrongChoice1;
                document.getElementById("btnC").innerText = wrongChoice2;
                document.getElementById("btnA").innerText = answer;

                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;

            default:
                document.getElementById("btnC").innerText = wrongChoice1;
                document.getElementById("btnB").innerText = wrongChoice2;
                document.getElementById("btnA").innerText = answer;

                document.getElementById("btnA").addEventListener("click", () => {
                    document.getElementById("btnA").innerText = answer + " is correct!";
                })
                document.getElementById("btnB").addEventListener("click", () => {
                    document.getElementById("btnB").innerText = "Sorry!  You did not choose the correct answer.";
                })
                document.getElementById("btnC").addEventListener("click", () => {
                    document.getElementById("btnC").innerText = "Sorry!  You did not choose the correct answer.";
                })
                break;
        }
    }
    else {  //if clicking equals on empty calculator, error occurs
        alert("error: undefined\nHint: Click equals after valid entry");
        window.location.reload();
    }
}

//Megan Perry,  Summer 2022
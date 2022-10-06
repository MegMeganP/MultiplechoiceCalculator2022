let prevText = document.getElementById("screenText");  //getting the screen inputs

let displayItem = (number) => {  //arrow function-grab numbers and add them to screen with whatever is in there already
    prevText.value=prevText.value + number;
}

let result = () => {  //run the calculator or catch the error
    try{
        prevText.value = eval(prevText.value);
    }
    catch(error){  //if nonsense characters entered, get an error
    alert("Error: Invalid Input \nHint: Must enter number, operand, number...then equals");
    }
    if (prevText.value == "undefined") {  //if clicking equals on the empty calculator get undefined error
        alert("error: undefined\nHint: Click equals after valid entry");
        window.location.reload();
    }
}

function allClear(){  //to clear the calculator, just refresh to start over
    window.location.reload();
}

function del(){  //backspace one at a time with slice off the end
    prevText.value=prevText.value.slice(0,-1);
}

//Megan Perry, Summer 2022




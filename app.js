var student = {
    name: "",
    type: "student"
}

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(event){
    student.name = document.getElementById('name').value;
    var totalNameValue = 0;
    for (var i = 0; i< student.name.length; i++){
        totalNameValue += student.name.charCodeAt(i);
    }


    //insert result into page
    var output = "Total numeric value of person Name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

var numField3 = document.getElementById('numField3');
var numField4 = document.getElementById('numField4');
var resultField2 = document.getElementById('resultField2');

var numField5 = document.getElementById('numField5');
var numField6 = document.getElementById('numField6');
var resultField3 = document.getElementById('resultField3');

var form = document.getElementById('xIsWhatPercentOfY');
var form2 = document.getElementById('whatIsYPercentOfX');
var form3 = document.getElementById('xIsYPercentOfWhat');

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields.");
    }
    else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});

form2.addEventListener('submit', function(event) {
    if (!numField3.value || !numField4.value) {
        alert("please enter the values in the fields.");
    }
    else {
        var x = parseFloat(numField4.value);
        var y = parseFloat(numField3.value);
        var result = (y / 100) * x;

        resultField2.innerText = "Answer: " + result;
        event.preventDefault();
    }
})

form3.addEventListener('submit', function(event) {
    if (!numField5.value || !numField6.value) {
        alert("please enter the values in the fields.");
    }
    else {
        var x = parseFloat(numField5.value);
        var y = parseFloat(numField6.value);
        var result = (100 / y) * x;

        resultField3.innerText = "Answer: " + result;
        event.preventDefault();
    }
})
